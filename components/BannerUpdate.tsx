'use client';

import { useEffect, useState } from 'react';

export function BannerUpdate() {
  const [isBuilding, setIsBuilding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkStatus() {
      try {
        const response = await fetch('/api/vercel-status');
        const data = await response.json();
        setIsBuilding(data.isBuilding);
      } catch (error) {
        console.error('Error checking status:', error);
      } finally {
        setIsLoading(false);
      }
    }

    checkStatus();
    // Check every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return null;
  if (!isBuilding) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black p-2 text-center z-50">
      ⚠️ Website is currently under maintenance (building new version). Some features may be temporarily unavailable.
    </div>
  );
}