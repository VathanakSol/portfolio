import { kv } from '@/lib/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = (await kv.get<number>('visitorCount')) || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json({ count: 0, message: 'Failed to fetch visitor count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const count = await kv.incr('visitorCount');
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    return NextResponse.json({ count: 0, message: 'Failed to increment visitor count' }, { status: 500 });
  }
}
