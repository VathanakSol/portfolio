"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg focus:outline-none group"
          style={{
            background: "linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)",
            boxShadow: "0 0 20px rgba(112, 0, 255, 0.5)",
          }}
          aria-label="Back to top"
        >
          <motion.div
            animate={{
              rotate: isHovering ? 360 : 0,
              scale: isHovering ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="relative"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.div>

          {/* Web3 decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovering ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="absolute inset-0 rounded-full border-2 border-cyan-400 pointer-events-none"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovering ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="absolute inset-0 rounded-full border-2 border-purple-400 pointer-events-none"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
