import { VercelStatusService } from '@/services/vercel-status';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const status = await VercelStatusService.getProductionStatus();
  return NextResponse.json(status);
}