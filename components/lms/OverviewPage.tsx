"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, UsersRound } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Interactive Lessons",
    description:
      "Engage with hands-on lessons and real-world projects to enhance your skills.",
    icon: () => <BookOpen className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Expert Instructors",
    description:
      "Learn from industry experts with years of experience in their fields.",
    icon: () => <Users className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Community Support",
    description:
      "Join a vibrant community of learners and get support whenever you need it.",
    icon: () => <UsersRound className="w-6 h-6" />,
  },
];

export default function Overview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 hover:from-purple-600 hover:to-cyan-600 dark:hover:from-purple-300 dark:hover:to-cyan-300 transition-all ease-in-out duration-300 text-center">
            Welcome to the Interactive Learning Platform
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Explore, learn, and grow with our interactive courses.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400"
            >
              <div className="text-cyan-600 dark:text-cyan-400 mb-4">
                <feature.icon />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 hover:from-purple-600 hover:to-cyan-600 dark:hover:from-purple-300 dark:hover:to-cyan-300 transition-all ease-in-out duration-300 text-center">
            Ready to Start Learning?
          </h2>

          <Link
            href="/learning"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-600 dark:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 dark:hover:from-cyan-700 dark:hover:to-purple-700 transition-all duration-300"
          >
            Explore Courses
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
