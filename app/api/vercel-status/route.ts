import { getVercelDeploymentStatus } from '@/lib/vercel-status';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; 

export async function GET() {
  const status = await getVercelDeploymentStatus();
  return NextResponse.json(status);
}