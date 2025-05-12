import { VercelDeployment, DeploymentStatus } from '@/types/vercel';

const VERCEL_API_URL = 'https://api.vercel.com';

export class VercelStatusService {
  private static async fetchDeployments(): Promise<VercelDeployment[]> {
    const response = await fetch(
      `${VERCEL_API_URL}/v6/deployments?projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&limit=1&target=production`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch deployments');
    }

    const { deployments } = await response.json();
    return deployments;
  }

  public static async getProductionStatus(): Promise<DeploymentStatus> {
    try {
      const [deployment] = await this.fetchDeployments();
      
      if (!deployment) {
        return {
          isBuilding: false,
          state: 'READY',
        };
      }

      const isBuilding = deployment.state === 'BUILDING';
      let estimatedCompletion: string | undefined;

      if (isBuilding && deployment.buildingAt) {
        const averageBuildTime = 5 * 60 * 1000; // 5 minutes average
        estimatedCompletion = new Date(
          deployment.buildingAt + averageBuildTime
        ).toLocaleTimeString();
      }

      return {
        isBuilding,
        state: deployment.state,
        estimatedCompletion,
        productionUrl: deployment.alias?.[0],
        deploymentUrl: deployment.url,
      };
    } catch (error) {
      console.error('Error fetching Vercel status:', error);
      return {
        isBuilding: false,
        state: 'ERROR',
      };
    }
  }
}