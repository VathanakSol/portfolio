'use client';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import axios from 'axios';

export default function QRGenerator() {
  const [userId, setUserId] = useState('');
  const [location, setLocation] = useState('');
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.post('/api/checkin', { userId, location });
      setGenerated(true);
    } catch {
      alert('Check-in failed!');
    } finally {
      setLoading(false);
    }
  };

  const qrValue = JSON.stringify({
    userId,
    location,
    timestamp: new Date().toISOString()
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Check-in System</h1>
      
      {!generated ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Generate Check-in QR'}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Scan to Check In</h2>
          <div className="flex justify-center mb-4">
            <QRCode value={qrValue} size={256} />
          </div>
          <p className="mb-4">Show this QR code to the scanner</p>
          <button
            onClick={() => setGenerated(false)}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Generate New QR
          </button>
        </div>
      )}
    </div>
  );
}