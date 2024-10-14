'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Briefcase, GraduationCap } from 'lucide-react'

interface TimelineItem {
    id: number
    type: 'work' | 'education'
    title: string
    organization: string
    period: string
    description: string[]
    skills?: string[]
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        type: 'education',
        title: 'Information Technology Expert Scholarship Program 2nd Generation',
        organization: 'College Science Technology Advanced Development',
        period: '2023 - Present',
        description: [
            'Graduated with Honors (Cum Laude)',
            'Capstone Project: Developed a mobile app for campus navigation',
            'Active member of the Coding Club and Hackathon participant'
        ]
    },
    {
        id: 2,
        type: 'work',
        title: 'Senior Full Stack Developer',
        organization: 'Tech Innovators Inc.',
        period: '2021 - Present',
        description: [
            'Led a team of 5 developers in creating a cloud-based project management tool.',
            'Implemented microservices architecture using Node.js and Docker.',
            'Improved application performance by 40% through optimizing database queries and implementing caching strategies.'
        ],
        skills: ['React', 'Node.js', 'Docker', 'MongoDB', 'GraphQL']
    },
    {
        id: 3,
        type: 'education',
        title: 'Bachelor Degree in Computer Science',
        organization: 'Royal University of Phnom Penh',
        period: '2021 - 2024',
        description: [
            'Specialized in Artificial Intelligence and Machine Learning.',
            'Thesis: "Implementing Deep Learning Models for Natural Language Processing"',
            'GPA: 3.8/4.0'
        ]
    },
    {
        id: 4,
        type: 'work',
        title: 'Frontend Developer',
        organization: 'WebSolutions Co.',
        period: '2017 - 2021',
        description: [
            'Developed responsive web applications using React and Redux.',
            'Collaborated with UX designers to implement pixel-perfect, accessible interfaces.',
            'Reduced load times by 25% through code splitting and lazy loading techniques.'
        ],
        skills: ['React', 'Redux', 'SASS', 'Webpack', 'Jest']
    },
    {
        id: 5,
        type: 'education',
        title: 'Bachelor of Science in Software Engineering',
        organization: 'State University',
        period: '2013 - 2017',
        description: [
            'Graduated with Honors (Cum Laude)',
            'Capstone Project: Developed a mobile app for campus navigation',
            'Active member of the Coding Club and Hackathon participant'
        ]
    }

]

export default function Timeline() {
    const [expandedItems, setExpandedItems] = useState<number[]>([])
    const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

    const toggleItem = (id: number) => {
        setExpandedItems(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const filteredData = timelineData.filter(item => item.type === activeTab)

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <motion.h1
                className="text-4xl font-bold mb-12 text-center text-blue-500 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Journey
            </motion.h1>

            <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'work'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                            }`}
                        onClick={() => setActiveTab('work')}
                    >
                        <Briefcase className="inline-block mr-2" size={16} />
                        Work Experience
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'education'
                                ? 'bg-green-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                            }`}
                        onClick={() => setActiveTab('education')}
                    >
                        <GraduationCap className="inline-block mr-2" size={16} />
                        Education
                    </button>
                </div>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="mb-8 flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                                    {item.type === 'work' ? (
                                        <Briefcase size={16} className="text-white" />
                                    ) : (
                                        <GraduationCap size={16} className="text-white" />
                                    )}
                                </div>
                                <div className="ml-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2">{item.organization}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period}</p>

                                    <AnimatePresence>
                                        {expandedItems.includes(item.id) && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                                                    {item.description.map((desc, i) => (
                                                        <li key={i} className="mb-2">{desc}</li>
                                                    ))}
                                                </ul>
                                                {item.skills && (
                                                    <div className="mb-4">
                                                        <p className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Skills:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {item.skills.map((skill, i) => (
                                                                <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        onClick={() => toggleItem(item.id)}
                                        className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {expandedItems.includes(item.id) ? (
                                            <>
                                                <span className="mr-1">Less</span>
                                                <ChevronUp size={16} />
                                            </>
                                        ) : (
                                            <>
                                                <span className="mr-1">More</span>
                                                <ChevronDown size={16} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}