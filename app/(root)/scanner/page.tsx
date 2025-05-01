'use client';
import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function Home() {
  const [checkInData, setCheckInData] = useState({
    eventId: 'EVENT-123',
    location: 'Main Hall',
    secretKey: process.env.NEXT_PUBLIC_QR_SECRET || 'default-secret'
  });
  const [isGenerated, setIsGenerated] = useState(false);

  // The data that will be encoded in the QR code
  const qrValue = JSON.stringify({
    type: 'check-in',
    ...checkInData,
    timestamp: new Date().toISOString()
  });

  // URL that will trigger when scanned
  const checkInUrl = `${process.env.NEXT_PUBLIC_URL}/api/checkin?data=${encodeURIComponent(qrValue)}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Event Check-In System
        </h1>

        {!isGenerated ? (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Generate Check-In QR Code
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event ID
                </label>
                <input
                  type="text"
                  value={checkInData.eventId}
                  onChange={(e) => setCheckInData({...checkInData, eventId: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  value={checkInData.location}
                  onChange={(e) => setCheckInData({...checkInData, location: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              onClick={() => setIsGenerated(true)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Generate QR Code
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Scan to Check In
            </h2>
            
            <div className="flex justify-center p-4 bg-white rounded-lg border border-gray-200">
              <QRCode 
                value={checkInUrl}
                size={256}
                level="H"
                fgColor="#1a365d"
              />
            </div>

            <div className="text-sm text-gray-500">
              <p>Scan this QR code with your phone&apos;s camera</p>
              <p>or share this link: <span className="text-blue-500">{checkInUrl}</span></p>
            </div>

            <button
              onClick={() => setIsGenerated(false)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Generate New QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}