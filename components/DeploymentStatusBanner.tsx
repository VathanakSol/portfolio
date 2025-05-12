"use client";

import { useEffect, useState } from "react";
import { DeploymentStatus } from "@/types/vercel";

export function DeploymentStatusBanner() {
  const [status, setStatus] = useState<DeploymentStatus>({
    isBuilding: false,
    state: "READY",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Initialize with current status
    const fetchInitialStatus = async () => {
      try {
        const response = await fetch("/api/vercel-status");
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error("Failed to fetch initial status:", error);
      }
    };

    fetchInitialStatus();

    // Set up SSE connection
    const eventSource = new EventSource("/api/sse/deployments", {
      withCredentials: true,
    });

    eventSource.onopen = () => {
      setIsConnected(true);
    };

    eventSource.onmessage = (event) => {
      const data: DeploymentStatus = JSON.parse(event.data);
      setStatus(data);
    };

    eventSource.onerror = () => {
      setIsConnected(false);
      eventSource.close();
      // Fallback to polling if SSE fails
      const pollInterval = setInterval(fetchInitialStatus, 30000);
      return () => clearInterval(pollInterval);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  if (!status.isBuilding) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black p-3 text-center z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="animate-pulse">🚧</span>
          <span className="font-medium">Site Maintenance in Progress</span>
          <span className="hidden md:inline">•</span>
          <span className="text-sm">
            Status: {status.state.toLowerCase()}
            {status.estimatedCompletion && (
              <> • Estimated completion: {status.estimatedCompletion}</>
            )}
          </span>
        </div>

        {status.deploymentUrl && (
          <a
            href={`https://${status.deploymentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:text-blue-800"
          >
            View deployment progress
          </a>
        )}
      </div>
    </div>
  );
}
