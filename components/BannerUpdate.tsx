'use client';

import { useEffect, useState } from 'react';

export function ProductionMaintenanceBanner() {
  const [status, setStatus] = useState({
    isBuilding: false,
    state: 'READY',
    url: '',
    alias: ''
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/vercel-status');
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Failed to fetch status:', error);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 10000); 

    return () => clearInterval(interval);
  }, []);

  if (!status.isBuilding) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black p-3 text-center z-50 flex flex-col md:flex-row items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <span className="animate-pulse">🚧</span>
        <strong>Maintenance Notice:</strong>
        <span>New version being deployed to {status.alias || 'production'}</span>
      </div>
      <div className="text-sm">
        Status: {status.state} •{' '}
        <a 
          href={`https://${status.url}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          View deployment progress
        </a>
      </div>
    </div>
  );
}