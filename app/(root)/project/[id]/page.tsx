'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DealKH',
    description: 'E-commerce Website',
    image: '/assets/dealkh.jpg',
    longDescription: 'DealKH is a comprehensive e-commerce platform designed to connect buyers and sellers in Cambodia. It features a user-friendly interface, secure payment integration, and a robust product management system.',
    technologies: ['React', 'Node.js', 'Next.js', 'Spring Boot', 'Redux', 'OAuth', 'PostgreSQL'],
    liveUrl: 'https://dealkh.istad.co',
  },
  {
    id: 2,
    title: 'Open Source Template',
    description: 'Free Template Website Download',
    image: '/assets/opensourcetemplate.jpg',
    longDescription: 'This open-source template provides a starting point for developers to quickly build modern, responsive websites. It includes pre-built components, a flexible grid system, and customizable styles.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'jQuery', 'Postgres'],
    liveUrl: 'https://opensource-templates-9xu7.vercel.app/',
  },
  {
    id: 3,
    title: 'SpringOps',
    description: 'Automation CI/CD pipeline Website',
    image: '/assets/springops.jpg',
    longDescription: 'SpringOps is a powerful CI/CD pipeline automation tool designed specifically for Spring Boot applications. It streamlines the development process, automates testing, and simplifies deployment to various cloud platforms.',
    technologies: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'Kubernetes'],
    liveUrl: 'https://spring-ops2.psa-khmer.world/',
  },
]

export default function ProjectPage() {
  const { id } = useParams()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const projectId = parseInt(id as string, 10)
    const foundProject = projects.find(p => p.id === projectId)
    setProject(foundProject || null)
  }, [id])

  if (!project) {
    return <div className="w-full h-screen bg-blue-500 flex justify-center items-center text-gray-100 text-2xl">Loading...</div>
  }
 
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/project" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={500}
          className="rounded-lg shadow-lg w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.longDescription}</p>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Project Links</h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mb-3 w-full justify-center"
            >
              <ExternalLink size={20} className="mr-2" />
              View Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors w-full justify-center"
            >
              <Github size={20} className="mr-2" />
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  )
}