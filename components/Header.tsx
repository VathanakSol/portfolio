  "use client";

  import { motion } from "framer-motion";
  import { ChevronDown, Github, Gitlab, Globe, Linkedin } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
  import React, { useState, useEffect } from "react";
  import TypingHeading from "./TypingHeading";

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/VathanakSol",
      color: "hover:text-gray-800 dark:hover:text-white",
      bg: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    { 
      name: "GitLab", 
      icon: Gitlab, 
      url: "https://gitlab.com/vathanak24",
      color: "hover:text-orange-500",
      bg: "hover:bg-orange-50 dark:hover:bg-orange-900/30"
    },
    { 
      name: "Website", 
      icon: Globe, 
      url: "https://naktech.pro",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vathanak-sol-07b710353/",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
  ];

  const stats = [
    { value: 2, label: "Years Experience" },
    { value: 10, label: "Projects" },
    { value: 20, label: "Tech Stack" },
  ];

  const NumberTicker = ({ value }: { value: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const animatedValue = Math.floor(easedProgress * value);
        
        setCurrentValue(animatedValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [value]);

    const easeOutExpo = (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    return (
      <span className="font-bold text-3xl sm:text-4xl bg-gradient-to-br from-purple-500 to-cyan-400 bg-clip-text text-transparent">
        {currentValue}+
      </span>
    );
  };

  const Header: React.FC = () => {
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);

  const handleEasterEggClick = () => {
    if (!easterEggTriggered) {
      setEasterEggTriggered(true);
      setTimeout(() => setEasterEggTriggered(false), 5000);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 min-h-[90vh] flex items-center transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-8 w-full">
        {/* Profile Image - Moved to top for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleEasterEggClick}
          className="relative cursor-pointer mx-auto mb-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:hidden"
        >
          <motion.div
            className="rounded-full border-4 p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{
              background: "linear-gradient(45deg, #2563eb, #60a5fa)",
              boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)",
            }}
            animate={{
              borderColor: ["#2563eb", "#60a5fa", "#2563eb"],
              boxShadow: [
                "0 0 15px rgba(37, 99, 235, 0.5)",
                "0 0 15px rgba(96, 165, 250, 0.5)",
                "0 0 15px rgba(37, 99, 235, 0.5)",
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
              width={300}
              height={300}
              className="rounded-full border-2 border-white w-full h-full object-cover"
            />
          </motion.div>

          {easterEggTriggered && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
              🎉 Found!
            </span>
          )}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-16">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:text-left w-full lg:w-1/2 space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sol Vathanak
            </motion.h1>

            <div className="h-16 flex items-center">
              <TypingHeading
                texts={[
                  { text: "DevOps Engineer" },
                  { text: "Cloud Engineer" },
                  { text: "Full Stack Developer", style: { color: "rgb(59,130,246)" } },
                ]}
              />
            </div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-3 gap-4 w-full max-w-xs mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <NumberTicker value={stat.value} />
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full"
              >
                <Link href="/contact" passHref>
                  <motion.button
                    className="w-full flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-sm font-medium rounded-full text-blue-500 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-all duration-300 ease-in-out"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg mr-2">📩</span>
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full"
              >
                <Link href="/buy-me-coffee" passHref>
                  <motion.button
                    className="w-full flex items-center justify-center px-6 py-3 border-2 border-amber-500 text-sm font-medium rounded-full text-amber-500 hover:bg-amber-500 hover:text-white shadow-md hover:shadow-amber-200 dark:hover:shadow-amber-900 transition-all duration-300 ease-in-out"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg mr-2">☕</span>
                    Buy me coffee
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4 w-full mt-2">
              {socialLinks.map(({ name, icon: Icon, url, color, bg }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 ${bg} ${color}`}
                  aria-label={name}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Profile Image - For larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleEasterEggClick}
            className="relative cursor-pointer hidden lg:block w-72 h-72"
          >
            <motion.div
              className="rounded-full border-4 p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                background: "linear-gradient(45deg, #2563eb, #60a5fa)",
                boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)",
              }}
              animate={{
                borderColor: ["#2563eb", "#60a5fa", "#2563eb"],
                boxShadow: [
                  "0 0 15px rgba(37, 99, 235, 0.5)",
                  "0 0 15px rgba(96, 165, 250, 0.5)",
                  "0 0 15px rgba(37, 99, 235, 0.5)",
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
                width={300}
                height={300}
                className="rounded-full border-2 border-white w-full h-full object-cover"
              />
            </motion.div>

            {easterEggTriggered && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                🎉 Found!
              </span>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ChevronDown className="text-blue-500 animate-bounce w-8 h-8" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
