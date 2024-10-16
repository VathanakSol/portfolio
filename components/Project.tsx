'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Server, GitBranch, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    title: 'DealKH', 
    description: 'E-commerce Website for deals and discounts in Cambodia', 
    image: '/assets/dealkh.jpg',
    technologies: ['Next.js', 'Spring Boot', 'Postgres'],
    link: 'https://dealkh.istad.co'
  },
  { 
    id: 2, 
    title: 'Open Source Template', 
    description: 'Free Template Website Download for developers', 
    image: '/assets/opensourcetemplate.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript','jQuery'],
    link: 'https://opensource-templates-9xu7.vercel.app/'
  },
  { 
    id: 3, 
    title: 'SpringOps', 
    description: 'Automation CI/CD pipeline Website for Spring applications', 
    image: '/assets/springops.jpg',
    technologies: ['Spring Boot', 'Java', 'Next.js'],
    link: 'https://spring-ops2.psa-khmer.world/'
  },
];

const services: Service[] = [
  { 
    id: 1, 
    title: 'Web Development', 
    description: 'Building dynamic and responsive websites using modern technologies.', 
    icon: Code,
    features: ['Custom web applications', 'Responsive design', 'API integration', 'Performance optimization']
  },
  { 
    id: 2, 
    title: 'UI/UX Design', 
    description: 'Designing user interfaces and experiences that are both functional and aesthetically pleasing.', 
    icon: Palette,
    features: ['User research', 'Wireframing', 'Prototyping', 'Usability testing']
  },
  { 
    id: 3, 
    title: 'Spring Development', 
    description: 'Developing robust applications using the Spring framework for seamless performance.', 
    icon: Server,
    features: ['Spring Boot applications', 'Microservices architecture', 'RESTful APIs', 'Database integration']
  },
  { 
    id: 4, 
    title: 'DevOps Engineering', 
    description: 'Streamlining development and operations for faster delivery and improved collaboration.', 
    icon: GitBranch,
    features: ['CI/CD pipelines', 'Infrastructure as Code', 'Containerization', 'Cloud management']
  },
];

export default function ProjectsAndServices() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('projects'); // State to manage active tab

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-500 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects & Services
      </motion.h1>
      
      <Tabs defaultValue="projects" className="my-2">
        <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger 
            value="projects" 
            onClick={() => setActiveTab('projects')} // Update active tab on click
            className={`${
              activeTab === 'projects' ? 'bg-focus text-white border border-blue-500' : 'bg-gray-300  text-black'
            }`}>
              Projects
          </TabsTrigger>
          <TabsTrigger 
            value="services" 
            onClick={() => setActiveTab('services')} // Update active tab on click
            className={`${
              activeTab === 'services' ? 'bg-focus text-white border border-blue-500' : 'bg-gray-300 text-black'
            }`}>
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
                  <Card className="h-full flex flex-col">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={1000} 
                      height={500} 
                      className="w-full h-48 object-cover rounded-t-lg" 
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button>
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
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary rounded-full">
                            <service.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-blue-500">{service.title}</CardTitle>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleService(service.id)}
                        >
                          {expandedService === service.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                          <span className="sr-only">Toggle service details</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                      <AnimatePresence>
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="mt-4 space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                  <Code className="h-4 w-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/services/${service.id}`}>
                        <Button className="bg-blue-500 border border-blue-500 text-white hover:text-blue-500">Learn More</Button>
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