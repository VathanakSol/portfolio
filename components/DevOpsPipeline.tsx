"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Star, Shield, Heart, ThumbsUp } from "lucide-react";

const stages = [
  { name: "Worth", icon: Award, color: "bg-blue-500" },       
  { name: "Quality", icon: Star, color: "bg-green-500" },      
  { name: "Strength", icon: Shield, color: "bg-yellow-500" },  
  { name: "Be Nice", icon: Heart, color: "bg-purple-500" },     
  { name: "Do Your Best", icon: ThumbsUp, color: "bg-red-500" } 
];

const DevOpsPipeline: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prevStage) => {
        if (prevStage < stages.length - 1) {
          return prevStage + 1;
        }
        return prevStage;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const progress = ((currentStage + 1) / stages.length) * 100;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 max-w-2xl mx-auto w-full md:w-auto">
      <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
        Boost Your Confidence
      </h2>
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 md:gap-1 mb-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            className={`flex flex-col items-center ${
              index <= currentStage
                ? stage.color
                : "bg-gray-300 dark:bg-gray-600"
            } rounded-lg p-2 transition-colors duration-300 w-full md:w-[80px] h-[60px] min-w-[60px]`}
            initial={{ scale: 1 }}
            animate={{ scale: index === currentStage ? 1.1 : 1 }}
          >
            <stage.icon className="text-white" size={24} />
            <span className="text-[10px] mt-1 text-white font-medium">
              {stage.name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-blue-600">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <motion.div
          className="h-2 bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default DevOpsPipeline;
