"use client";

import React, { useState, useEffect } from 'react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const incrementCount = async () => {
      try {
        const response = await fetch('/api/visitor-count', { method: 'POST' });
        if (!response.ok) {
          throw new Error('Failed to increment count');
        }
        const data: { count: number } = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      }
    };

    incrementCount();
  }, []);

  return <div className="w-full text-center text-blue-500 py-2 dark:text-white">Visitor Count: {count}</div>;
};

export default VisitorCounter;