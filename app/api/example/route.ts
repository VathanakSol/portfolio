import { NextResponse } from 'next/server';
import { tracer } from '@/lib/datadog';

export async function GET() {
  const span = tracer.scope().active();

  try {
    span?.setTag('api.route', 'example');

    const data = await fetchData();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    span?.setTag(
      'error',
      error instanceof Error ? error : new Error(String(error))
    );

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

async function fetchData(): Promise<{ id: number; name: string }> {
  const span = tracer.startSpan('fetch.data');

  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { id: 1, name: 'Example' };
  } finally {
    span.finish();
  }
}
