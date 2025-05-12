import { DeploymentStatus } from '@/types/vercel';

const VERCEL_API_URL = 'https://api.vercel.com';

export async function getProductionDeploymentStatus(): Promise<DeploymentStatus> {
  // Skip in development
  if (process.env.NODE_ENV === 'development') {
    return {
      isBuilding: false,
      state: 'READY',
      productionUrl: 'https://naktech.pro'
    };
  }

  try {
    const response = await fetch(
      `${VERCEL_API_URL}/v6/deployments?projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&limit=1&target=production`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
        },
        next: { revalidate: 10 } // Revalidate every 10 seconds
      }
    );

    const { deployments } = await response.json();
    const productionDeployment = deployments[0];
    
    // Special check for naktech.pro domain
    const isBuilding = productionDeployment?.state === 'BUILDING' && 
                      productionDeployment?.alias?.includes('naktech.pro');

    return {
      isBuilding,
      state: productionDeployment?.state || 'READY',
      productionUrl: 'https://naktech.pro',
      deploymentUrl: productionDeployment?.url
    };
  } catch (error) {
    console.error('Error checking production status:', error);
    return {
      isBuilding: false,
      state: 'ERROR',
      productionUrl: 'https://naktech.pro'
    };
  }
}