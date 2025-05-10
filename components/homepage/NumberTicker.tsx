"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NumberTickerProps {
  value: number;
  duration?: number;
  className?: string;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  duration = 1.5,
  className = "",
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / (duration * 1000));
      const easedProgress = easeOutExpo(progress);
      const newValue = Math.floor(easedProgress * value);
      
      setCurrentValue(newValue);
      
      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(value);
      }
    };

    animate();
  }, [value, duration]);

  // Easing function for smooth animation
  const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  return (
    <motion.span
      className={`font-bold text-4xl bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentValue}+
    </motion.span>
  );
};

export default NumberTicker;