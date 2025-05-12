export async function getVercelDeploymentStatus() {
  // For production, check the actual deployment status
  if (process.env.VERCEL_ENV === 'production') {
    try {
      const response = await fetch(
        `https://api.vercel.com/v6/deployments?projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&limit=1&target=production`,
        {
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          },
          next: { revalidate: 10 } // Revalidate every 10 seconds
        }
      );

      const data = await response.json();
      const productionDeployment = data.deployments[0];
      
      return {
        isBuilding: productionDeployment?.state === 'BUILDING',
        state: productionDeployment?.state || 'READY',
        url: productionDeployment?.url, 
        alias: productionDeployment?.alias?.[0] 
      };
    } catch (error) {
      console.error('Error checking production status:', error);
    }
  }
  
  // Default return if not in production or error occurs
  return {
    isBuilding: false,
    state: 'READY',
    url: '',
    alias: ''
  };
}