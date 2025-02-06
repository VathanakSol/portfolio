"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DevOpsPipeline from "./DevOpsPipeline";
import TypingHeading from "./TypingHeading";

// const GoogleIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
//   </svg>
// );

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/VathanakSol" },
  { name: "Website", icon: Globe, url: "https://naktech.pro" },
  // { name: "Google", icon: GoogleIcon, url: "https://g.dev/naktech" },
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
      className={`bg-gray-50 dark:bg-gray-800 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center md:w-1/2 relative text-center py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={handleEasterEggClick}
              className="relative cursor-pointer"
            >
              
                <Image
                  src="/assets/profile.jpg"
                  alt="Vathanak Sol"
                  width={200}
                  height={200}
                  className="mx-auto md:mx-0 rounded-full border-4 border-gray-100 shadow-lg"
                />
              
              {/* Easter Egg Notification */}
              {easterEggTriggered && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  🎉 Easter Egg Found!
                </span>
              )}
            </motion.div>

            <motion.h1
              className="text-6xl font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Vathanak Sol
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

            <div className="flex justify-center w-full space-x-6">
              {/* contact button */}
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/contact" passHref>
                  <motion.div
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-base font-medium rounded-full text-blue-500 hover:bg-blue-500 hover:text-white shadow-lg transition-all duration-300 ease-in-out"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect Me Now
                  </motion.div>
                </Link>
              </motion.div>
              {/* support button */}
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/buy-me-coffee" passHref>
                  <motion.div
                    className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-base font-medium rounded-full text-amber-500 hover:bg-amber-500 hover:text-white shadow-lg transition-all duration-300 ease-in-out gap-2"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
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
                      <span>☕</span>
                      Buy me a coffee
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500"
                  aria-label={name}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-8 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <DevOpsPipeline />
          </motion.div>
        </div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ChevronDown className="text-blue-500 animate-bounce" size={32} />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
