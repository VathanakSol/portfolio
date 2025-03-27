"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Zap,
} from "lucide-react";

interface TimelineItem {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string[];
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "Information Technology Expert Scholarship Program 2nd Generation",
    organization: "Institute of Science and Technology Advanced Development",
    period: "2023 - Present",
    description: [
      "Graduated with Basic Fundamental Program (4 months)",
      "Graduated with Basic IT Expert Program (5 months)",
      "Graduated with Advanced IT Expert DevOps Course (4 months)",
      "Capstone Project: Open Source Template, DealKH, Cloudinator",
    ],
  },
  {
    id: 7,
    type: "work",
    title: "Junior Cloud Technician",
    organization: "NeocomISP Limited",
    period: "April 2025 - Present",
    description: [
      "Managed cloud infrastructure deployment and maintenance using AWS and Azure",
      "Implemented automated scaling solutions and optimized resource allocation",
      "Collaborated with network engineers to troubleshoot connectivity issues",
      "Assisted with migration of legacy systems to cloud-based architecture",
    ],
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Infrastructure as Code"],
  },
  {
    id: 2,
    type: "work",
    title: "Spring Internship",
    organization: "Spring Education Center",
    period: "May 2023 - July 2023",
    description: [
      "Experience with team work on marketing strategy work",
      "Obtain hard skill and soft skill about public social communicating",
    ],
    skills: ["Language", "Social Sharing", "Speaking"],
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor Degree in Computer Science",
    organization: "Royal University of Phnom Penh",
    period: "2021 - 2024",
    description: [
      "Deep dive with backend language such as C, C++, Python, Java, C# and PHP programming",
      "Understanding with mathematic, physic, history, and robotic",
      "Gain fully 21st century of hard skill and soft skill",
      "Practical with web design has HTML, CSS, Javascript",
      "Explore with database as mysql and library framework like Bootstrap, Laravel, .NET",
    ],
  },
  {
    id: 4,
    type: "work",
    title: "Seagames Volunteer",
    organization: "Seagames Event Organization",
    period: "April 2023 - May 2023",
    description: [
      "Work as IT supports",
      "Collaborated with team to implement scoring system, accessible with event games.",
    ],
    skills: ["Computer", "IT Support", "Teamwork"],
  },
  {
    id: 5,
    type: "education",
    title: "High school",
    organization: "Hun Sen Saang High School",
    period: "2019 - 2020",
    description: [
      "Graduated with High school diploma",
      "Education with general knowledge with science programme",
    ],
  },
  {
    id: 6,
    type: "education",
    title: "Primary school with Secondary High school",
    organization: "Vattanac Chhoung Leap High School",
    period: "2008 - 2017",
    description: [
      "Obtain and learn primary language (Khmer) and English",
      "Fully find out of anything both hard skill and soft skill",
    ],
  },
];

export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredData = timelineData.filter((item) => item.type === activeTab);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Journey
      </motion.h1>

      <div className="flex justify-center mb-12">
        <div
          className="inline-flex rounded-full shadow-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-1"
          role="group"
        >
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-full flex items-center transition-all ${
              activeTab === "work"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-blue-500/30"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("work")}
          >
            <Briefcase className="mr-2" size={16} />
            Work
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-full flex items-center transition-all ${
              activeTab === "education"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/30"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap className="mr-2" size={16} />
            Education
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1 }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                className="mb-8 flex items-start group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    item.type === "work"
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                      : "bg-gradient-to-br from-purple-500 to-pink-500"
                  } shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.type === "work" ? (
                    <Briefcase size={18} className="text-white" />
                  ) : (
                    <GraduationCap size={18} className="text-white" />
                  )}
                </motion.div>
                <motion.div
                  className={`ml-6 bg-white dark:bg-gray-900 border ${
                    expandedItems.includes(item.id)
                      ? "border-cyan-400"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-500"
                  } rounded-xl p-6 flex-grow transition-all duration-300 shadow-lg`}
                  whileHover={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 mb-1">
                        {item.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {item.period}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`p-2 rounded-full ${
                        expandedItems.includes(item.id)
                          ? "bg-gray-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      } transition-colors`}
                    >
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedItems.includes(item.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 mt-4">
                          {item.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start text-gray-600 dark:text-gray-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                                ▹
                              </span>
                              {desc}
                            </motion.li>
                          ))}
                        </ul>
                        {item.skills && (
                          <motion.div
                            className="mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: item.description.length * 0.1,
                            }}
                          >
                            <p className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                              <Zap
                                className="mr-2 text-yellow-500 dark:text-yellow-400"
                                size={16}
                              />
                              Skills Applied
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-300 text-xs rounded-full border border-cyan-200 dark:border-cyan-400/20"
                                  whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                                  }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Web3 elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10 dark:bg-cyan-400/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
