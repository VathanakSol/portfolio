"use client";

import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const incrementCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/visitor-count', { method: 'POST' });
        if (!response.ok) {
          throw new Error('Failed to increment count');
        }
        const data: { count: number } = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    incrementCount();
  }, []);

  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-r from-blue-500 to-blue-900 text-white p-1 shadow-lg rounded-lg">
      <div className="flex flex-row justify-center w-full items-center">
        <Users className="w-4 h-4 mr-2 animate-bounce" />
        <h2 className="text-md mx-2">Current Visitors</h2>
        <p className={`text-sm font-bold${isLoading ? 'animate-pulse' : ''}`}>
          {isLoading ? '...' : count.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;