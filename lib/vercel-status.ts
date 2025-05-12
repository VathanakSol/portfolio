const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

export async function getVercelDeploymentStatus() {
  try {
    const response = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${VERCEL_PROJECT_ID}&teamId=${VERCEL_TEAM_ID}&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch deployments");
    
    const data = await response.json();
    const latestDeployment = data.deployments[0];
    
    return {
      isBuilding: latestDeployment?.state === 'BUILDING',
      state: latestDeployment?.state || 'UNKNOWN',
      createdAt: latestDeployment?.createdAt,
    };
  } catch (error) {
    console.error('Error fetching Vercel status:', error);
    return {
      isBuilding: false,
      state: 'ERROR',
      createdAt: null,
    };
  }
}