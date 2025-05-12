import { NextResponse } from 'next/server';
import { DeploymentStatus } from '@/types/vercel';
import { deploymentEvents } from '@/lib/deployment-events';

interface ExtendedDeploymentStatus extends DeploymentStatus {
  message: string;
}

export async function GET(req: Request) {
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  const encoder = new TextEncoder();

  const sendEvent = (data: ExtendedDeploymentStatus) => {
    writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
  };

  // Initial connection event
  sendEvent({ 
    isBuilding: false, 
    state: 'CONNECTED',
    message: 'Listening for deployment updates' 
  });

  const handler = (status: DeploymentStatus) => {
    sendEvent({ ...status, message: '' }); // Add an empty message property
  };

  deploymentEvents.on('deployment-update', handler);

  // Cleanup on client disconnect
  req.signal.onabort = () => {
    deploymentEvents.off('deployment-update', handler);
    writer.close();
  };

  return new NextResponse(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}

export const dynamic = 'force-dynamic';