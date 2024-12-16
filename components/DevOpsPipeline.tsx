'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, GitBranch, Play, Check, Cloud } from 'lucide-react'

const stages = [
    { name: 'Code', icon: Code, color: 'bg-blue-500' },
    { name: 'Build', icon: GitBranch, color: 'bg-green-500' },
    { name: 'Test', icon: Play, color: 'bg-yellow-500' },
    { name: 'Deploy', icon: Cloud, color: 'bg-purple-500' },
    { name: 'Monitor', icon: Check, color: 'bg-red-500' },
]

const DevOpsPipeline: React.FC = () => {
    const [currentStage, setCurrentStage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStage((prevStage) => (prevStage + 1) % stages.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">CI/CD Pipeline</h2>
            <div className="flex flex-wrap justify-between items-center gap-2">
                {stages.map((stage, index) => (
                    <motion.div
                        key={stage.name}
                        className={`flex flex-col items-center ${
                            index <= currentStage ? stage.color : 'bg-gray-300 dark:bg-gray-600'
                        } rounded-full p-4 transition-colors duration-300 w-[120px] h-[75px] sm:w-[100px] sm:h-[60px]`}
                        initial={{ scale: 1 }}
                        animate={{ scale: index === currentStage ? 1.1 : 1 }}
                    >
                        {/* Increase the size of the icon here */}
                        <stage.icon className="text-white" size={120} /> {/* Changed from 48 to 64 */}
                        <span className="text-xs mt-2 text-gray-800 dark:text-gray-200">{stage.name}</span>
                    </motion.div>
                ))}
            </div>
            <div className="mt-6">
                <motion.div
                    className="h-2 bg-blue-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentStage + 1) / stages.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    )
}

export default DevOpsPipeline
