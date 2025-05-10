"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function AboutHero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const timelineSection = document.getElementById("timeline-section");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleParallax = () => {
      if (scrollRef.current) {
        const scrollPosition = window.scrollY;
        scrollRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        scrollRef.current.style.opacity = `${1 - scrollPosition / 700}`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/istad-cKvk8NBwvdghbAM3Cb45PMynaBOWDK.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div ref={scrollRef} className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Life Journey
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore the path that shaped who I am today — from humble beginnings
          to meaningful milestones.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <button
          onClick={handleScrollDown}
          className="text-white flex flex-col items-center gap-2 hover:text-primary transition-colors"
          aria-label="Scroll down to timeline"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
}
