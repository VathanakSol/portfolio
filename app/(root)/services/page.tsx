"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Palette, Server, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building dynamic and responsive websites using modern technologies with best user experience.",
    icon: Code,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing user interfaces and experiences that are both functional and aesthetically pleasing.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Spring Development",
    description:
      "Developing robust applications using the Spring framework for seamless performance.",
    icon: Server,
  },
  {
    id: 4,
    title: "DevOps Engineering",
    description:
      "Streamlining development and operations for faster delivery and improved collaboration.",
    icon: GitBranch,
  },
  {
    id: 5,
    title: "Cyber Security",
    description:
      "Protecting systems and networks from digital attacks and ensuring data integrity.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <div className="px-8 py-8 min-h-screen dark:from-gray-900 dark:to-gray-800 dark:bg-gray-800">
      <motion.h1
        className="text-4xl py-6 text-center font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/services/${service.id}`} className="block">
              <Card className="bg-gradient-to-tl from-teal-500 to-blue-600 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl dark:from-teal-700 dark:to-blue-800 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-tl from-teal-400 to-blue-500 p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl font-semibold dark:text-gray-100">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800">
                  <CardDescription className="text-white text-lg dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-gray-900 p-4 rounded-b-lg dark:bg-gray-700">
                  <Button className="w-full bg-teal-600 text-white hover:bg-teal-700 transition duration-300 ease-in-out dark:bg-teal-700 dark:hover:bg-teal-600">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
