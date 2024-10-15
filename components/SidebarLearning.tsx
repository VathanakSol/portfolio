"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, ChevronRight, ChevronDown, Cog } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const tableOfContents = [
  {
    title: 'DevOps',
    slug: 'devops',
    icon: Cog,
    subtopics: [
      { title: 'CI/CD Pipelines', slug: 'ci-cd-pipelines' },
      { title: 'Docker Containerization', slug: 'docker-containerization' },
      { title: 'Kubernetes Orchestration', slug: 'kubernetes-orchestration' },
      { title: 'Infrastructure as Code', slug: 'infrastructure-as-code' },
      { title: 'Monitoring and Logging', slug: 'monitoring-and-logging' },
    ]
  },
  {
    title: 'Spring',
    slug: 'spring',
    icon: Rocket,
    subtopics: [
      { title: 'Spring Boot Basics', slug: 'spring-boot-basics' },
      { title: 'Spring MVC', slug: 'spring-mvc' },
      { title: 'Spring Data JPA', slug: 'spring-data-jpa' },
      { title: 'Spring Security', slug: 'spring-security' },
      { title: 'Spring Cloud', slug: 'spring-cloud' },
    ]
  },
]

export default function SidebarLearning() {
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState('')
  const [openTopics, setOpenTopics] = useState<string[]>([])

  const toggleTopic = (slug: string) => {
    setOpenTopics(prev => 
      prev.includes(slug) ? prev.filter(t => t !== slug) : [...prev, slug]
    )
  }

  const filteredTopics = tableOfContents.map(topic => ({
    ...topic,
    subtopics: topic.subtopics.filter(subtopic => 
      subtopic.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(topic => 
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || topic.subtopics.length > 0
  )

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg p-6 overflow-auto sticky top-0 h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Learning Path</h2>
        <div className="h-1 w-20 bg-green-500 rounded"></div>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <nav>
        <ul className="space-y-3">
          {filteredTopics.map((topic) => {
            const Icon = topic.icon
            const isOpen = openTopics.includes(topic.slug)
            return (
              <li key={topic.slug}>
                <Collapsible open={isOpen} onOpenChange={() => toggleTopic(topic.slug)}>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        pathname.startsWith(`/document/${topic.slug}`)
                          ? 'bg-blue-100 text-green-500 dark:bg-gray-700 dark:text-green-500'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      <span className="flex-grow text-left">{topic.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {topic.subtopics.map((subtopic) => {
                            const isActive = pathname === `/document/${topic.slug}/${subtopic.slug}`
                            return (
                              <motion.li
                                key={subtopic.slug}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Link
                                  href={`/document/${topic.slug}/${subtopic.slug}`}
                                  className={`flex items-center p-2 rounded-md transition-all duration-200 ${
                                    isActive
                                      ? 'bg-green-100 text-green-500 dark:bg-gray-600 dark:text-green-400'
                                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                                  }`}
                                >
                                  <span className="flex-grow">{subtopic.title}</span>
                                  {isActive && <ChevronRight className="h-4 w-4" />}
                                </Link>
                              </motion.li>
                            )
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </CollapsibleContent>
                </Collapsible>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Your Progress</h3>
        <Progress value={33} className="w-full" />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">4/12 topics completed</p>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Our support team is always here to assist you.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Contact Support
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </aside>
  )
}