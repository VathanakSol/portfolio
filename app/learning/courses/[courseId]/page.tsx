"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, BookOpen, HelpCircle, FileText, Code } from 'lucide-react'

const courseData = {
    'containerization': {
        title: 'Containerization',
        description: 'Learn the key terms and concepts in Containerization',
        lessons: [
            {
                title: 'I. What is Containerization?',
                content: 'Containerization is a software deployment process that bundles an application code with all the files and libraries it needs to run on any infrastructure. Traditionally, to run any application on your computer, you had to install the version that matched your machine’s operating system. For example, you needed to install the Windows version of a software package on a Windows machine. However, with containerization, you can create a single software package, or container, that runs on all types of devices and operating systems. ',
                video: {
                    url: "https://www.youtube.com/embed/0qotVMX-J5s?si=Z22WvwKMr2eeB-SE",
                },
                coding: {
                    language: 'bash',
                    code: `def hello_devops():
      print("Welcome to DevOps!")
  
  hello_devops()`,
                    description: 'A simple Python function to welcome you to DevOps.'
                },
                quiz: [
                    {
                        question: 'Who is credited with the creation of Docker, the containerization platform?',
                        options: [
                            'Linus Torvalds',
                            'Solomon Hykes',
                            'Guido van Rossum',
                            'James Gosling'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'What is the main purpose of containerization in software development?',
                        options: [
                            'To provide cloud services',
                            'To isolate applications in lightweight environments',
                            'To improve network security',
                            'To reduce hardware costs'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which of the following is a popular container orchestration platform?',
                        options: [
                            'Docker Swarm',
                            'VirtualBox',
                            'VMware',
                            'OpenStack'
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: 'Which of these is a benefit of using containers over virtual machines?',
                        options: [
                            'Containers are more secure',
                            'Containers are more lightweight and portable',
                            'Containers use more resources',
                            'Containers provide better graphical performance'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which command is used to list all running Docker containers?',
                        options: [
                            'docker ps',
                            'docker run',
                            'docker list',
                            'docker containers'
                        ],
                        correctAnswer: 0
                    }
                ],
                test: [
                    {
                        question: 'Describe how the DevOps movement began and its significance.',
                        type: 'essay'
                    }
                ]
            },
            {
                title: 'II. What is Docker?',
                content: 'Docker is a software platform that allows developers to build, test, and deploy applications quickly. It does this by packaging software into standardized units called containers, which include everything the software needs to run.',
                video: {
                    url: "https://www.youtube.com/embed/videoseries?si=LGUa9fOUTeqy9gdj&amp;list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7",
                },
                coding: {
                    language: 'bash',
                    code: `#!/bin/bash
  echo "Welcome to the world of DevOps!"`,
                    description: 'A simple Bash script that welcomes users to DevOps.'
                },
                quiz: [
                    {
                        question: 'What is Docker primarily used for?',
                        options: [
                            'Managing cloud resources',
                            'Containerizing applications',
                            'Creating virtual machines',
                            'Running shell scripts'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which of the following commands is used to list all Docker containers, running or stopped?',
                        options: [
                            'docker run',
                            'docker ps',
                            'docker ps -a',
                            'docker start'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: 'What is the purpose of a Dockerfile?',
                        options: [
                            'To store environment variables',
                            'To define the build process for Docker images',
                            'To execute shell commands',
                            'To monitor Docker containers'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which of the following is NOT a Docker command?',
                        options: [
                            'docker build',
                            'docker pull',
                            'docker commit',
                            'docker copy'
                        ],
                        correctAnswer: 3
                    },
                    {
                        question: 'What is Docker Hub?',
                        options: [
                            'A service for hosting Docker containers',
                            'A public registry for Docker images',
                            'A container orchestration tool',
                            'A tool for monitoring Docker containers'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which of the following is an advantage of using Docker containers?',
                        options: [
                            'Containers require more resources than virtual machines',
                            'Containers are highly portable across environments',
                            'Containers need manual configuration on each host',
                            'Containers do not allow application isolation'
                        ],
                        correctAnswer: 1
                    }
                ],
                test: [
                    {
                        question: 'Explain how DevOps practices can lead to improved collaboration between teams.',
                        type: 'essay'
                    }
                ]
            },
            {
                title: "III. Docker Component",
                content:
                    "The basic components include Docker client, Docker image, Docker Daemon, Docker Networking, Docker registry, and Docker container, whereas Docker Compose and Docker swarm are the advanced components of Docker.",
                video: {
                    url: "https://www.youtube.com/embed/rIidtbYQul4?si=4stMBeLYqW8mn4As",
                },
                coding: {
                    language: "yaml",
                    code: `# Example GitHub Actions CI/CD pipeline
  name: CI/CD Pipeline
  
  on:
    push:
      branches:
        - main
  
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout code
          uses: actions/checkout@v2
  
        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: 14
  
        - name: Install dependencies
          run: npm install
  
        - name: Run tests
          run: npm test`,
                    description:
                        "An example CI/CD pipeline using GitHub Actions.",
                },
                quiz: [
                    {
                        question: 'What is the purpose of a Docker Image?',
                        options: [
                            'To store application logs',
                            'To define the filesystem and application settings for a container',
                            'To provide a real-time dashboard for Docker metrics',
                            'To orchestrate multiple containers'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which Docker component is responsible for running the actual container instances?',
                        options: [
                            'Docker Engine',
                            'Docker Image',
                            'Docker Hub',
                            'Dockerfile'
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: 'What is Docker Hub primarily used for?',
                        options: [
                            'Managing Docker Swarm clusters',
                            'Hosting and sharing Docker images',
                            'Building Docker containers',
                            'Monitoring Docker performance'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'What is the role of the Docker Daemon?',
                        options: [
                            'To monitor container health',
                            'To execute Docker commands and manage containers',
                            'To define application environments',
                            'To handle networking between containers'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which component of Docker helps define the steps to build a Docker image?',
                        options: [
                            'Dockerfile',
                            'Docker Engine',
                            'Docker Compose',
                            'Docker Container'
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: 'What does Docker Compose do?',
                        options: [
                            'Builds Docker images from Dockerfiles',
                            'Orchestrates multi-container applications',
                            'Monitors Docker containers',
                            'Deploys Docker images to production'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which component is responsible for networking and communication between Docker containers?',
                        options: [
                            'Docker Engine',
                            'Docker Daemon',
                            'Docker Network',
                            'Dockerfile'
                        ],
                        correctAnswer: 2
                    }
                ],
                test: [
                    {
                        question:
                            "Discuss how CI/CD practices can enhance software delivery speed and quality.",
                        type: "essay",
                    },
                ],
            },
        ]
    },
    'ansible': {
        title: 'Ansible',
        description: 'Explore the fundamentals of ansible and its key technologies.',
        lessons: [
            {
                title: 'I. Introduction to Cloud Computing',
                content: 'Cloud computing is the delivery of computing services over the internet, including storage, processing, and data management. It allows businesses and individuals to use IT resources on-demand, without having to maintain their own data centers.',
                video: {
                    url: "https://www.youtube.com/embed/sD91P9SzRk0"
                },
                coding: {
                    language: 'python',
                    code: `import boto3

# Create an S3 client
s3 = boto3.client('s3')

# List all buckets in your AWS account
response = s3.list_buckets()

# Print the bucket names
print("S3 Buckets:")
for bucket in response['Buckets']:
    print(f'  {bucket["Name"]}')`,
                    description: 'Python code to interact with AWS S3 and list your storage buckets.'
                },
                quiz: [
                    {
                        question: 'What is the primary benefit of cloud computing?',
                        options: [
                            'Higher physical storage requirements',
                            'Scalability and flexibility',
                            'Increased hardware costs',
                            'Local data processing'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which cloud service model provides infrastructure over the internet?',
                        options: [
                            'Software as a Service (SaaS)',
                            'Platform as a Service (PaaS)',
                            'Infrastructure as a Service (IaaS)',
                            'Function as a Service (FaaS)'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: 'Which of the following is a benefit of cloud computing?',
                        options: [
                            'On-demand self-service',
                            'Shared resources',
                            'Pay-as-you-go pricing',
                            'All of the above'
                        ],
                        correctAnswer: 3
                    }
                ],
                test: [
                    {
                        question: 'Explain the difference between IaaS, PaaS, and SaaS.',
                        type: 'essay'
                    }
                ]
            },
            {
                title: 'II. Cloud Deployment Models',
                content: 'There are several types of cloud deployment models: Public Cloud, Private Cloud, Hybrid Cloud, and Community Cloud. Each offers unique benefits depending on the use case.',
                video: {
                    url: "https://www.youtube.com/embed/ZR7RC84QzjM"
                },
                coding: {
                    language: 'yaml',
                    code: `# Kubernetes deployment YAML example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80`,
                    description: 'An example Kubernetes deployment to manage a scalable Nginx web server.'
                },
                quiz: [
                    {
                        question: 'Which cloud deployment model is most commonly used for government projects?',
                        options: [
                            'Public Cloud',
                            'Private Cloud',
                            'Community Cloud',
                            'Hybrid Cloud'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: 'Which model allows organizations to use both private and public clouds in a single environment?',
                        options: [
                            'Public Cloud',
                            'Private Cloud',
                            'Hybrid Cloud',
                            'Community Cloud'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: 'Which deployment model offers the highest control over security and data privacy?',
                        options: [
                            'Public Cloud',
                            'Private Cloud',
                            'Hybrid Cloud',
                            'Community Cloud'
                        ],
                        correctAnswer: 1
                    }
                ],
                test: [
                    {
                        question: 'Describe the benefits of using a hybrid cloud model for large enterprises.',
                        type: 'essay'
                    }
                ]
            }
        ]
    }
    // Add more courses here...
}

export default function CourseContent({ params }: { params: { courseId: string } }) {
    const [activeLesson, setActiveLesson] = useState(0)
    const [activeTab, setActiveTab] = useState('lesson')
    const [quizAnswers, setQuizAnswers] = useState<number[]>([])
    const [testAnswers, setTestAnswers] = useState<string[]>([])

    const course = courseData[params.courseId as keyof typeof courseData]
    const lesson = course.lessons[activeLesson]

    const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
        const newAnswers = [...quizAnswers]
        newAnswers[questionIndex] = answerIndex
        setQuizAnswers(newAnswers)
    }

    const handleTestAnswer = (questionIndex: number, answer: string) => {
        const newAnswers = [...testAnswers]
        newAnswers[questionIndex] = answer
        setTestAnswers(newAnswers)
    }

    const calculateProgress = () => {
        const totalQuestions = lesson.quiz.length + lesson.test.length
        const answeredQuestions = quizAnswers.filter(a => a !== undefined).length + testAnswers.filter(a => a !== '').length
        return (answeredQuestions / totalQuestions) * 100
    }   

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-green-500">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>

            <div className="mb-6">
                <Progress value={calculateProgress()} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">Progress: {Math.round(calculateProgress())}% complete</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle className="text-green-500">Table of Contents</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {course.lessons.map((lessonItem, index) => (
                                <li key={index}>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start 
                        ${index === activeLesson
                                                ? 'bg-green-200 text-black dark:bg-green-700 dark:text-white'  // Active lesson: light and dark mode styles
                                                : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} // Default styles for non-active lessons
                    `}
                                        onClick={() => setActiveLesson(index)}
                                    >
                                        {lessonItem.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                </Card>

                <div className="md:col-span-3">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-4 mb-6">
                            <TabsTrigger
                                value="lesson"
                                className={`flex items-center justify-center ${activeTab === 'lesson' ? 'bg-green-500 text-white dark:bg-green-500' : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Lesson
                            </TabsTrigger>
                            <TabsTrigger
                                value="coding"
                                className={`flex items-center justify-center ${activeTab === 'coding' ? 'bg-green-500 text-white dark:bg-green-500' : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <Code className="w-4 h-4 mr-2" />
                                Coding
                            </TabsTrigger>
                            <TabsTrigger
                                value="quiz"
                                className={`flex items-center justify-center ${activeTab === 'quiz' ? 'bg-green-500 text-white dark:bg-green-500' : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <HelpCircle className="w-4 h-4 mr-2" />
                                Quiz
                            </TabsTrigger>
                            <TabsTrigger
                                value="test"
                                className={`flex items-center justify-center ${activeTab === 'test' ? 'bg-green-500 text-white dark:bg-green-500' : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <FileText className="w-4 h-4 mr-2" />
                                Test
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="lesson">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{lesson.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{lesson.content}</p>
                                    {lesson.video && (
                                        <div className="flex justify-center items-center">
                                            <iframe
                                                src={lesson.video.url}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full max-w-[50%] h-[340px] rounded-lg mx-auto"
                                            ></iframe>
                                        </div>
                                    )}
                                </CardContent>

                            </Card>
                        </TabsContent>

                        <TabsContent value="coding">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Coding Exercise</CardTitle>
                                    <CardDescription>{lesson.coding.description}</CardDescription>
                                </CardHeader>                       
                            </Card>
                        </TabsContent>

                        <TabsContent value="quiz">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quiz</CardTitle>
                                    <CardDescription>Test your knowledge with these multiple-choice questions.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {lesson.quiz.map((question, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="font-semibold mb-2">{question.question}</h3>
                                            <div className="space-y-2">
                                                {question.options.map((option, optionIndex) => (
                                                    <Button
                                                        key={optionIndex}
                                                        variant={quizAnswers[index] === optionIndex ? "default" : "outline"}
                                                        className="w-full justify-start"
                                                        onClick={() => handleQuizAnswer(index, optionIndex)}
                                                    >
                                                        {option}
                                                        {quizAnswers[index] === optionIndex && (
                                                            <CheckCircle className="w-4 h-4 ml-2" />
                                                        )}
                                                    </Button>
                                                ))}
                                            </div>
                                            {quizAnswers[index] !== undefined && (
                                                <p className={`mt-2 ${quizAnswers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                                                    {quizAnswers[index] === question.correctAnswer ? 'Correct!' : 'Incorrect. Try again!'}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="test">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Test</CardTitle>
                                    <CardDescription>Apply your knowledge with these open-ended questions.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {lesson.test.map((question, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="font-semibold mb-2">{question.question}</h3>
                                            <textarea
                                                className="w-full p-2 border rounded-md"
                                                rows={4}
                                                value={testAnswers[index] || ''}
                                                onChange={(e) => handleTestAnswer(index, e.target.value)}
                                                placeholder="Type your answer here..."
                                            />
                                        </div>
                                    ))}
                                    <Button className="mt-4">Submit Test</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex justify-between">
                        <Button
                            variant="outline"
                            onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                            disabled={activeLesson === 0}
                        >
                            Previous Lesson
                        </Button>
                        <Button
                            onClick={() => setActiveLesson(Math.min(course.lessons.length - 1, activeLesson + 1))}
                            disabled={activeLesson === course.lessons.length - 1}
                        >
                            Next Lesson
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}