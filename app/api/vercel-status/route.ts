import { getProductionDeploymentStatus } from '@/services/vercel-status';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const status = await getProductionDeploymentStatus();
  return NextResponse.json(status);
}