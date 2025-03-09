"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [isBouncing, setIsBouncing] = useState(true);

  // Stop the bounce animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsBouncing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        {/* Animated 404 Text */}
        <h1
          className={`text-9xl font-bold text-purple-600 ${
            isBouncing ? "animate-bounce" : ""
          }`}
        >
          404
        </h1>
        <p className="mt-4 text-2xl text-gray-700">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={() => alert("Search functionality coming soon!")}
            className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition-colors"
          >
            Search
          </button>
        </div>

        {/* Home Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
