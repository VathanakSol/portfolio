"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Star,
  Shield,
  Heart,
  ThumbsUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const stages = [
  {
    name: "Worth",
    icon: Award,
    color: "from-blue-400 to-blue-600",
    pulse: "hover:shadow-blue-500/50",
  },
  {
    name: "Quality",
    icon: Star,
    color: "from-green-400 to-green-600",
    pulse: "hover:shadow-green-500/50",
  },
  {
    name: "Strength",
    icon: Shield,
    color: "from-yellow-400 to-yellow-600",
    pulse: "hover:shadow-yellow-500/50",
  },
  {
    name: "Be Nice",
    icon: Heart,
    color: "from-purple-400 to-purple-600",
    pulse: "hover:shadow-purple-500/50",
  },
  {
    name: "Do Your Best",
    icon: ThumbsUp,
    color: "from-red-400 to-red-600",
    pulse: "hover:shadow-red-500/50",
  },
];

const ConfidenceBooster: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Minimum distance required for swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setCurrentStage((prevStage) => {
        if (prevStage < stages.length - 1) {
          return prevStage + 1;
        }
        return 0; // Loop back to start
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  const progress = ((currentStage + 1) / stages.length) * 100;

  const nextStage = () => {
    setCurrentStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
  };

  const prevStage = () => {
    setCurrentStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
  };

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextStage();
    } else if (isRightSwipe) {
      prevStage();
    }
  };

  // Mouse drag handlers
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!isDragging) return;

    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextStage();
    } else if (isRightSwipe) {
      prevStage();
    }

    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  return (
    <div
      className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-2xl mx-4 md:mx-8 p-4 md:p-6 max-w-3xl md:mx-auto border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition-all duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center mb-4 md:mb-6 gap-3 sm:gap-0">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-3 py-1 rounded-full text-xs font-mono ${isAutoPlaying ? "bg-green-900 text-green-400" : "bg-purple-900 text-purple-400"} border ${isAutoPlaying ? "border-green-700" : "border-purple-700"} hover:shadow-lg transition-all`}
        >
          {isAutoPlaying ? "AUTO:ON" : "AUTO:OFF"}
        </button>
      </div>

      <div className="relative mb-6 md:mb-8">
        <div className="flex justify-between items-center gap-2 md:gap-4 mb-4">
          <button
            onClick={prevStage}
            className="p-1 md:p-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ChevronLeft size={16} className="md:hidden" />
            <ChevronLeft size={20} className="hidden md:block" />
          </button>

          <div
            className="flex-1 flex justify-center"
            ref={cardRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            <motion.div
              key={currentStage}
              className={`bg-gradient-to-br ${stages[currentStage].color} rounded-xl p-3 md:p-6 w-full max-w-xs md:max-w-md text-center shadow-lg ${stages[currentStage].pulse} hover:shadow-xl transition-all cursor-grab ${isDragging ? "cursor-grabbing" : ""}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col items-center">
                {React.createElement(stages[currentStage].icon, {
                  className: "text-white mb-2 md:mb-3",
                  size: 32,
                })}
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {stages[currentStage].name}
                </h3>
                <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2">
                  {getStageDescription(stages[currentStage].name)}
                </p>
              </div>
            </motion.div>
          </div>

          <button
            onClick={nextStage}
            className="p-1 md:p-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ChevronRight size={16} className="md:hidden" />
            <ChevronRight size={20} className="hidden md:block" />
          </button>
        </div>

        <div className="flex justify-center space-x-1 md:space-x-2 mb-4 md:mb-6">
          {stages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStage(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${index === currentStage ? "bg-cyan-400 w-4 md:w-6" : "bg-gray-400 dark:bg-gray-600"}`}
            />
          ))}
        </div>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="flex items-center">
            <span className="text-[10px] md:text-xs font-mono text-cyan-600 dark:text-cyan-300 mr-1 md:mr-2">
              PROGRESS
            </span>
            <span className="text-[10px] md:text-xs font-mono text-gray-600 dark:text-gray-400">
              {currentStage + 1}/{stages.length}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] md:text-xs font-mono text-cyan-600 dark:text-cyan-300">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <div className="h-1.5 md:h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, type: "spring" }}
          />
        </div>
      </div>

      <div className="mt-4 md:mt-6 flex justify-center">
        <button
          className="px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm md:text-base text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/50"
          onClick={() => setCurrentStage(0)}
        >
          Restart Boost
        </button>
      </div>
    </div>
  );
};

// Helper function for stage descriptions
function getStageDescription(stageName: string): string {
  const descriptions: Record<string, string> = {
    Worth: "Recognize your intrinsic value and contributions",
    Quality: "Embrace excellence in everything you do",
    Strength: "Build resilience to overcome challenges",
    "Be Nice": "Kindness creates positive environments",
    "Do Your Best": "Continuous improvement leads to success",
  };
  return descriptions[stageName] || "Boost your confidence at this stage";
}

export default ConfidenceBooster;
