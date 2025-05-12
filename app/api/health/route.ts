import { NextResponse } from 'next/server';

export async function GET() {
  // Add any health check logic here (e.g., DB connection check)
  const isHealthy = true; // Replace with actual checks if needed

  if (!isHealthy) {
    return NextResponse.json(
      { status: 'error', message: 'Service unavailable' },
      { status: 503 }
    );
  }

  return NextResponse.json(
    { status: 'ok', timestamp: new Date().toISOString() },
    { status: 200 }
  );
}

// Optionally configure the route behavior
export const dynamic = 'force-static'; // Ensures no dynamic behavior