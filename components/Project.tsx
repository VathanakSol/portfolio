'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Search } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  { id: 1, title: 'DealKH', description: 'E-commerce Website', image: '/assets/dealkh.jpg' },
  { id: 2, title: 'Open Source Template', description: 'Free Template Website Download', image: '/assets/opensourcetemplate.jpg' },
  { id: 3, title: 'SpringOps', description: 'Automation CI/CD pipeline Website', image: '/assets/springops.jpg' },
];

const services: Service[] = [
  { id: 1, title: 'Web Development', description: 'Custom website development tailored to your needs.', icon: Code },
  { id: 2, title: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces.', icon: Palette },
  { id: 3, title: 'Mobile App Development', description: 'Building responsive and feature-rich mobile applications.', icon: Smartphone },
  { id: 4, title: 'SEO Optimization', description: 'Improving your website visibility in search engine results.', icon: Search },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-4 text-blue-500 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects & Services
      </motion.h1>
      
      <section className="mb-12">
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={1000} 
                height={500} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link href={`/project/${project.id}`} passHref>
                  <motion.div 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div> 
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section>
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + services.length) * .1 }} // Adjusted delay for services
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
   );
}