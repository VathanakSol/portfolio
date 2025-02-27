"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TypingHeading from "./TypingHeading";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/VathanakSol" },
  { name: "Website", icon: Globe, url: "https://naktech.pro" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEasterEggClick = () => {
    if (!easterEggTriggered) {
      setEasterEggTriggered(true);
      setTimeout(() => setEasterEggTriggered(false), 5000);
    }
  };

  return (
    <header
      className={`bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center transition-all duration-300 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="flex flex-col items-center justify-center md:w-1/2 space-y-6 sm:space-y-8">
            <motion.h1
              className="text-4xl sm:text-6xl font-bold text-center sm:text-left hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sol Vathanak
            </motion.h1>

            <TypingHeading
              texts={[
                { text: "DevOps Engineer" },
                { text: "Cloud Engineer" },
                {
                  text: "Full Stack Developer",
                  style: { color: "rgb(59,130,246)" },
                },
              ]}
            />

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Link href="/contact" passHref>
                  <motion.div
                    className="inline-flex items-center justify-center w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-sm sm:text-md font-medium rounded-full text-blue-500 hover:bg-blue-500 hover:text-white shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-all duration-300 ease-in-out"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect Me Now
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Link href="/buy-me-coffee" passHref>
                  <motion.div
                    className="inline-flex text-center justify-center w-full sm:w-auto items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-amber-500 text-sm sm:text-md font-medium rounded-full text-amber-500 hover:bg-amber-500 hover:text-white shadow-xl hover:shadow-amber-200 dark:hover:shadow-amber-900 transition-all duration-300 ease-in-out gap-3"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(245, 158, 11, 0.5)",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-xl">☕</span>
                      Buy me a coffee
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <div className="flex justify-center items-center space-x-6 w-full">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  aria-label={name}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </Link>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleEasterEggClick}
            className="relative cursor-pointer"
          >
            <motion.div
              className="rounded-full border-6 sm:border-8 p-1 sm:p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              style={{
                background: "linear-gradient(45deg, #2563eb, #60a5fa)",
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
              }}
              animate={{
                borderColor: ["#2563eb", "#60a5fa", "#2563eb"],
                boxShadow: [
                  "0 0 20px rgba(37, 99, 235, 0.5)",
                  "0 0 20px rgba(96, 165, 250, 0.5)",
                  "0 0 20px rgba(37, 99, 235, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/2-xEHKaOOecwUXcNTcEd39pyTVqZaQSx.png"
                alt="Nak-Tech"
                width={250}
                height={250}
                className="rounded-full border-2 sm:border-4 border-white w-64 h-64 sm:w-[300px] sm:h-[300px]"
              />
            </motion.div>

            {easterEggTriggered && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                🎉 Easter Egg Found!
              </span>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ChevronDown className="text-blue-500 animate-bounce w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
