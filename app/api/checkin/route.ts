import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const data = searchParams.get('data');

        if (!data) {
            return NextResponse.json(
                { error: 'Missing QR code data' },
                { status: 400 }
            );
        }

        // Parse the QR code data
        const qrData = JSON.parse(decodeURIComponent(data));

        // Verify the secret key
        const expectedSecret = process.env.QR_SECRET || 'default-secret';
        if (qrData.secretKey !== expectedSecret) {
            return NextResponse.json(
                { error: 'Invalid QR code' },
                { status: 401 }
            );
        }

        // Send notification to Telegram
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        const message = `✅ New check-in!
Event: ${qrData.eventId}
Location: ${qrData.location}
Time: ${new Date(qrData.timestamp).toLocaleString()}`;

        await axios.post(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
            }
        );

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Check-in error:', error);
        return NextResponse.json(
            { error: 'Failed to process check-in' },
            { status: 500 }
        );
    }
}

// Explicitly declare other unsupported HTTP methods
export async function POST() { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export async function PUT() { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export async function PATCH() { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }