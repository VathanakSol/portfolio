"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  GitBranch,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cloudinator",
    description:
      "Service Deployment Website for both monolothic and microservice applications",
    image:
      "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/cloudinator-preview-CgLzpt4WQQjnms8AcGJ3WOizvpV7aO.png",
    technologies: ["Spring Boot", "Java", "Next.js", "DevOps Tool"],
    link: "https://cloudinator.naktech.pro/",
  },
  {
    id: 2,
    title: "Open Source Template",
    description: "Free Template Website Download for developers",
    image: "/assets/opensourcetemplate.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    link: "https://opensource-template.naktech.pro/",
  },
  {
    id: 3,
    title: "DealKH",
    description: "E-commerce Website for deals and discounts in Cambodia",
    image: "/assets/dealkh.jpg",
    technologies: ["Next.js", "Spring Boot", "Postgres"],
    link: "https://dealkh.istad.co",
  },
];

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building dynamic and responsive websites using modern technologies.",
    icon: Code,
    features: [
      "Custom web applications",
      "Responsive design",
      "API integration",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing user interfaces and experiences that are both functional and aesthetically pleasing.",
    icon: Palette,
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Usability testing",
    ],
  },
  {
    id: 3,
    title: "Spring Development",
    description:
      "Developing robust applications using the Spring framework for seamless performance.",
    icon: Server,
    features: [
      "Spring Boot applications",
      "Microservices architecture",
      "RESTful APIs",
      "Database integration",
    ],
  },
  {
    id: 4,
    title: "DevOps Engineering",
    description:
      "Streamlining development and operations for faster delivery and improved collaboration.",
    icon: GitBranch,
    features: [
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Containerization",
      "Cloud management",
    ],
  },
  {
    id: 5,
    title: "Cyber Security",
    description:
      "Protecting systems, networks, and data from cyber threats to ensure confidentiality, integrity, and availability.",
    icon: Shield,
    features: [
      "Threat detection & response",
      "Vulnerability management",
      "Network security",
      "Data encryption",
    ],
  },
];

export default function ProjectsAndServices() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("projects"); // State to manage active tab

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 dark:bg-gray-800">
      <motion.h1
        className="text-4xl py-4 font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects & Services
      </motion.h1>

      <Tabs defaultValue="projects" className="my-2">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
          <TabsTrigger
            value="projects"
            onClick={() => setActiveTab("projects")}
            className={`${
              activeTab === "projects"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-md dark:shadow-cyan-500/30"
                : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            } rounded-lg transition-all duration-300`}
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="services"
            onClick={() => setActiveTab("services")}
            className={`${
              activeTab === "services"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 dark:from-pink-500 dark:to-purple-500 text-white shadow-md dark:shadow-purple-500/30"
                : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            } rounded-lg transition-all duration-300`}
          >
            Services
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-cyan-500/10 transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={500}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-cyan-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 border-gray-300 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white hover:shadow-md hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/30 transition-all duration-300">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="services">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-500/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-pink-500 dark:to-purple-500 rounded-full">
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-blue-600 dark:text-purple-400">
                            {service.title}
                          </CardTitle>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleService(service.id)}
                          className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {expandedService === service.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle service details
                          </span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                      <AnimatePresence>
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="mt-4 space-y-2">
                              {service.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-center space-x-2"
                                >
                                  <Code className="h-4 w-4 text-blue-500 dark:text-purple-400" />
                                  <span className="text-gray-600 dark:text-gray-300">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/services/${service.id}`}>
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-pink-500 dark:to-purple-500 text-white hover:shadow-md hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all duration-300">
                          Learn More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
