"use client";
import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const incrementCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/visitor-count", { method: "POST" });
        if (!response.ok) {
          throw new Error("Failed to increment count");
        }
        const data: { count: number } = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error incrementing visitor count:", error);
      } finally {
        setIsLoading(false);
      }
    };
    incrementCount();
  }, []);

  return (
    <div
      className="flex justify-center items-center w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-2 shadow-lg rounded-lg"
      style={{
        boxShadow: "0 0 10px 2px rgba(147, 51, 234, 0.7)",
      }}
    >
      <div className="flex flex-row justify-center w-full items-center space-x-2">
        {/* Icon with glowing effect */}
        <Users
          className="w-6 h-6 mr-2 animate-bounce"
          style={{
            filter: "drop-shadow(0 0 5px rgba(147, 51, 234, 0.7))",
          }}
        />
        {/* Title */}
        <h2 className="text-lg font-semibold">Current Visitors</h2>
        {/* Count with loading animation */}
        <p
          className={`text-xl font-bold ${
            isLoading ? "animate-pulse" : ""
          }`}
          style={{
            background: isLoading
              ? "linear-gradient(90deg, #7e22ce, #22d3ee)"
              : "transparent",
            backgroundClip: isLoading ? "text" : "unset",
            WebkitBackgroundClip: isLoading ? "text" : "unset",
            color: isLoading ? "transparent" : "#fff",
          }}
        >
          {isLoading ? "..." : count.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;