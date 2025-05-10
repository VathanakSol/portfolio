"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface TechStackShowcaseProps {
  technologies?: Technology[];
  scrollSpeed?: number;
  className?: string;
}

export default function TechStackShowcase({
  technologies = defaultTechnologies,
  scrollSpeed = 2, // Lower is faster
  className,
}: TechStackShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate the technologies array to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-full mx-auto px-0 py-8 overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="relative z-20">
        <motion.h1
          className="text-4xl py-4 font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            TECH STACK
        </motion.h1>

        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto py-4 no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className={cn(
              "flex gap-16 py-8 w-max",
              !isDragging && "animate-infinite-scroll"
            )}
            style={{
              animationDuration: `${
                scrollSpeed * duplicatedTechnologies.length
              }s`,
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 w-40 group"
              >
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={70}
                    height={70}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3
                  className={cn(
                    "text-xl font-bold tracking-wider uppercase text-center",
                    "transition-all duration-300 group-hover:scale-105",
                    "bg-gradient-to-b from-black/80 to-black bg-clip-text text-transparent dark:from-white/80 dark:to-white"
                  )}
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultTechnologies: Technology[] = [
  {
    name: "React",
    icon: "https://api.iconify.design/logos:react.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://api.iconify.design/logos:nextjs-icon.svg",
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: "https://api.iconify.design/devicon:typescript.svg",
    color: "#3178C6",
  },
  {
    name: "Tailwind",
    icon: "https://api.iconify.design/devicon:tailwindcss.svg",
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: "https://api.iconify.design/logos:nodejs-icon-alt.svg",
    color: "#339933",
  },
  {
    name: "Python",
    icon: "https://api.iconify.design/logos:python.svg",
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    icon: "https://api.iconify.design/logos:javascript.svg",
    color: "#F7DF1E",
  },
];
