"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Zap,
  Code,
  Rocket,
  Medal,
  Shield,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export const AchievementCard = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(
    null,
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "Top Performer",
      description: "Recognized as excellence performance in ISTAD",
      longDescription:
        "This award recognizes consistent excellence across all aspects of the program. I maintained perfect attendance, completed all projects ahead of schedule, and received top marks in all technical evaluations. My capstone project on cloud infrastructure optimization was particularly praised for its innovative approach.",
      images: [
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484170166_651367494310421_8773602267416580561_n-NYrcX2gJzDZm6sVdSQN6kCG1js7Ya9.jpg",
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484105738_651369740976863_4150855935285916029_n-7dnO1CBxh7V7yC9BX7lcxtq5Bmnk6I.jpg",
      ],
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      date: "Feb 2025",
      skills: ["Leadership", "Technical Excellence", "Project Management"],
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Published 3 open source projects with 100+ GitHub stars",
      longDescription:
        "As an active open source contributor, I've developed and maintained several projects that solve real-world problems. My most popular repository provides a set of reusable Web3 components that has been starred by over 100 developers worldwide. I actively maintain these projects and collaborate with other contributors.",
      images: [
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484105738_651369740976863_4150855935285916029_n-7dnO1CBxh7V7yC9BX7lcxtq5Bmnk6I.jpg",
      ],
      icon: Code,
      color: "from-purple-400 to-purple-600",
      date: "2024",
      skills: ["React", "TypeScript", "Web3.js", "Community Building"],
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description: "1st place in regional blockchain hackathon",
      longDescription:
        "Our team won first place in a 48-hour blockchain hackathon with our decentralized identity solution. We built a complete working prototype that allows users to control their digital identity across multiple platforms using blockchain technology. The judges praised our innovative approach to solving real identity management problems.",
      images: [
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484105738_651369740976863_4150855935285916029_n-7dnO1CBxh7V7yC9BX7lcxtq5Bmnk6I.jpg",
      ],
      icon: Rocket,
      color: "from-cyan-400 to-cyan-600",
      date: "2023",
      skills: ["Blockchain", "Solidity", "Teamwork", "Problem Solving"],
    },
    {
      id: 4,
      title: "Certified Developer",
      description: "Earned professional certification in DevOps",
      longDescription:
        "Completed rigorous certification program covering modern DevOps practices including CI/CD pipelines, infrastructure as code, containerization, and cloud-native development. The certification required passing multiple practical exams demonstrating hands-on skills with tools like Docker, Kubernetes, Terraform, and GitHub Actions.",
      images: [
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484105738_651369740976863_4150855935285916029_n-7dnO1CBxh7V7yC9BX7lcxtq5Bmnk6I.jpg",
      ],
      icon: Shield,
      color: "from-green-400 to-green-600",
      date: "2024",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
      id: 5,
      title: "Community Leader",
      description: "Organized tech meetups with 200+ participants",
      longDescription:
        "Founded and organized a local developer community that grew to over 500 members. Organized monthly meetups featuring technical talks, workshops, and hack nights. Our largest event attracted over 200 participants for a full-day conference on Web3 development with speakers from major blockchain projects.",
      images: [
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484105738_651369740976863_4150855935285916029_n-7dnO1CBxh7V7yC9BX7lcxtq5Bmnk6I.jpg",
      ],
      icon: Medal,
      color: "from-pink-400 to-pink-600",
      date: "2023",
      skills: ["Public Speaking", "Event Planning", "Networking"],
    },
    {
      id: 6,
      title: "Innovation Award",
      description: "Developed novel solution for cloud infrastructure",
      longDescription:
        "Received the Innovation Award for developing a cost-optimization algorithm for cloud resource allocation. My solution reduced infrastructure costs by 35% while maintaining performance SLAs. The approach combined machine learning predictions with rule-based optimization to dynamically scale resources based on usage patterns.",
      images: [
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/484105738_651369740976863_4150855935285916029_n-7dnO1CBxh7V7yC9BX7lcxtq5Bmnk6I.jpg",
      ],
      icon: Award,
      color: "from-blue-400 to-blue-600",
      date: "2024",
      skills: ["Cloud Computing", "Machine Learning", "Cost Optimization"],
    },
  ];

  const openModal = (id: number) => {
    setSelectedAchievement(id);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  const nextImage = () => {
    const achievement = achievements.find((a) => a.id === selectedAchievement);
    if (achievement) {
      setCurrentImageIndex((prev) =>
        prev === achievement.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    const achievement = achievements.find((a) => a.id === selectedAchievement);
    if (achievement) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? achievement.images.length - 1 : prev - 1,
      );
    }
  };

  const currentAchievement = selectedAchievement
    ? achievements.find((a) => a.id === selectedAchievement)
    : null;

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          My Achievements
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
          Milestones that showcase my journey and expertise in technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`bg-gradient-to-br ${achievement.color} rounded-xl p-0.5 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
            onClick={() => openModal(achievement.id)}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-inner">
                  <achievement.icon className="w-6 h-6 text-gray-800 dark:text-white" />
                </div>
                <span className="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                  {achievement.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">
                {achievement.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center">
                <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400 mr-2" />
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-300">
                  ACHIEVEMENT UNLOCKED
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Web3 Modal Popup */}
      <AnimatePresence>
        {selectedAchievement && currentAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 dark:bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className={`relative max-w-4xl w-full rounded-2xl overflow-hidden bg-gradient-to-br ${currentAchievement.color} p-0.5`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Image Carousel */}
                <div className="relative mb-6 rounded-xl overflow-hidden h-64 md:h-80">
                  {currentAchievement.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: idx === currentImageIndex ? 1 : 0,
                        x: `${(idx - currentImageIndex) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 ${idx === currentImageIndex ? "z-10" : "z-0"}`}
                    >
                      <Image
                        height={800}
                        width={2000}
                        src={img}
                        alt={`Achievement ${currentAchievement.title}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}

                  {/* Carousel Controls */}
                  {currentAchievement.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full bg-gray-200/50 hover:bg-gray-300/80 dark:bg-gray-900/50 dark:hover:bg-gray-800/80 text-gray-800 dark:text-white transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full bg-gray-200/50 hover:bg-gray-300/80 dark:bg-gray-900/50 dark:hover:bg-gray-800/80 text-gray-800 dark:text-white transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}

                  {/* Carousel Indicators */}
                  {currentAchievement.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                      {currentAchievement.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-gray-800 dark:bg-white w-6"
                              : "bg-gray-600/50 dark:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Achievement Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                        <currentAchievement.icon className="w-6 h-6 text-gray-800 dark:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentAchievement.title}
                      </h3>
                    </div>
                    <span className="text-sm font-mono text-cyan-600 dark:text-cyan-300 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {currentAchievement.date}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {currentAchievement.longDescription}
                  </p>

                  {currentAchievement.skills && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Zap
                          className="mr-2 text-yellow-600 dark:text-yellow-400"
                          size={18}
                        />
                        Skills Demonstrated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentAchievement.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-cyan-600 dark:text-cyan-300 text-sm rounded-full border border-cyan-200/40 dark:border-cyan-400/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Web3 Decorative Elements */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        VERIFIED ACHIEVEMENT
                      </span>
                    </div>
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400">
                      BLOCKCHAIN:{" "}
                      {Math.random()
                        .toString(36)
                        .substring(2, 10)
                        .toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Web3 elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500 dark:bg-cyan-400"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.05,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementCard;
