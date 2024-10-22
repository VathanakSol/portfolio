// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require('axios');

const triggerVercelDeploy = async () => {
  const url = 'YOUR_VERCEL_DEPLOY_HOOK_URL'; 
  
  try {
    const response = await axios.post(url);
    console.log('Triggered Vercel Deployment:', response.data);
  } catch (error) {
    console.error('Error triggering Vercel deployment:', error);
  }
};

triggerVercelDeploy();
