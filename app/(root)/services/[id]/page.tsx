'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Code, Palette, Server, GitBranch, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building dynamic and responsive websites using modern technologies with best user experience.',
    icon: Code,
    longDescription: 'Our web development service focuses on creating fast, responsive, and user-friendly websites. We use the latest technologies like React, Next.js, and Node.js to build scalable and maintainable web applications.',
    features: [
      'Custom web application development',
      'Responsive design for all devices',
      'Progressive Web Apps (PWAs)',
      'API development and integration',
      'Performance optimization',
      'SEO-friendly development'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Formik', 'NextAuth'],
    process: [
      { title: 'Requirements Gathering', description: 'We start by understanding your needs and project goals.' },
      { title: 'Design and Prototyping', description: 'We create wireframes and interactive prototypes for your approval.' },
      { title: 'Development', description: 'Our team builds your web application using modern technologies and best practices.' },
      { title: 'Testing and QA', description: 'We thoroughly test the application to ensure it meets all requirements and quality standards.' },
      { title: 'Deployment', description: 'We deploy your application to your chosen hosting environment.' },
      { title: 'Maintenance and Support', description: 'We provide ongoing support and maintenance to keep your application running smoothly.' }
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing user interfaces and experiences that are both functional and aesthetically pleasing.',
    icon: Palette,
    longDescription: 'Our UI/UX design service is all about creating intuitive and visually appealing interfaces. We focus on user-centered design principles to ensure that your product not only looks great but also provides an excellent user experience.',
    features: [
      'User research and analysis',
      'Information architecture',
      'Wireframing and prototyping',
      'Visual design',
      'Interaction design',
      'Usability testing'
    ],
    technologies: ['Figma', 'Adobe XD'],
    process: [
      { title: 'Research', description: 'We conduct user research to understand your target audience and their needs.' },
      { title: 'Information Architecture', description: 'We organize and structure your content for optimal user experience.' },
      { title: 'Wireframing', description: 'We create low-fidelity wireframes to establish the basic structure of your interface.' },
      { title: 'Visual Design', description: 'We develop a visually appealing design that aligns with your brand identity.' },
      { title: 'Prototyping', description: 'We create interactive prototypes to test and refine the user experience.' },
      { title: 'User Testing', description: 'We conduct usability tests to ensure the design meets user needs and expectations.' }
    ]
  },
  {
    id: 3,
    title: 'Spring Development',
    description: 'Developing robust applications using the Spring framework for seamless performance.',
    icon: Server,
    longDescription: 'With our Spring development service, we build robust and scalable backend systems. We leverage the power of the Spring framework to create high-performance, secure, and easily maintainable applications.',
    features: [
      'Custom Spring Boot applications',
      'RESTful API development',
      'Microservices architecture',
      'Database integration and ORM',
      'Security implementation',
      'Testing and quality assurance'
    ],
    technologies: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Maven', 'Gradle'],
    process: [
      { title: 'Requirements Analysis', description: 'We analyze your project requirements and define the system architecture.' },
      { title: 'Design', description: 'We design the application structure, including data models and API endpoints.' },
      { title: 'Development', description: 'Our team develops the Spring application, following best practices and design patterns.' },
      { title: 'Testing', description: 'We perform unit testing, integration testing, and end-to-end testing.' },
      { title: 'Deployment', description: 'We deploy your Spring application to your chosen server or cloud platform.' },
      { title: 'Monitoring and Maintenance', description: 'We set up monitoring tools and provide ongoing maintenance and support.' }
    ]
  },
  {
    id: 4,
    title: 'DevOps Engineering',
    description: 'Streamlining development and operations for faster delivery and improved collaboration.',
    icon: GitBranch,
    longDescription: 'Our DevOps engineering service focuses on improving your development and deployment processes. We implement CI/CD pipelines, containerization, and infrastructure as code to increase efficiency and reduce time-to-market.',
    features: [
      'CI/CD pipeline implementation',
      'Infrastructure as Code (IaC)',
      'Containerization and orchestration',
      'Cloud infrastructure management',
      'Monitoring and logging',
      'Security and compliance'
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
    process: [
      { title: 'Assessment', description: 'We assess your current development and deployment processes to identify areas for improvement.' },
      { title: 'Strategy Development', description: 'We create a DevOps strategy tailored to your organization\'s needs.' },
      { title: 'Tool Selection', description: 'We help you choose the right tools and technologies for your DevOps implementation.' },
      { title: 'Implementation', description: 'We implement CI/CD pipelines, containerization, and infrastructure as code.' },
      { title: 'Automation', description: 'We automate testing, deployment, and infrastructure management processes.' },
      { title: 'Monitoring and Optimization', description: 'We set up monitoring and logging systems and continuously optimize your DevOps processes.' }
    ]
  },
]

export default function ServicePage() {
  const params = useParams()
  const serviceId = parseInt(params.id as string)
  const service = services.find(s => s.id === serviceId)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container mx-auto px-4 pb-10 dark:from-gray-900 dark:to-black bg-white dark:bg-gray-900">
      <Link href="/services" passHref>
        <Button variant="ghost" className="py-10 text-black hover:text-blue-400 dark:text-white dark:hover:text-blue-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-8 border border-transparent rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-tl from-teal-500 to-blue-600 rounded-full p-3">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-gradient-to-r from-teal-400 to-blue-500">{service.title}</CardTitle>
                <CardDescription className="text-lg text-black dark:text-gray-300">{service.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="py-6 text-black dark:bg-gray-700 dark:text-gray-200">
            <p className="mb-6">{service.longDescription}</p>
            <h3 className="text-xl font-semibold mb-4 text-teal-500">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-2 hover:scale-105 transition-transform"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-teal-500 mt-1" />
                  <span className="text-black dark:text-gray-200">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gradient-to-r from-purple-700 to-pink-600 border border-transparent rounded-lg shadow-lg dark:bg-gradient-to-tl dark:from-indigo-600 dark:to-purple-900">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Technologies We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="bg-teal-600 text-white hover:text-teal-500 hover:border-teal-500 hover:cursor-pointer dark:bg-teal-700 dark:hover:bg-teal-600">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-tl from-indigo-600 to-purple-800 border border-transparent rounded-lg shadow-lg dark:bg-gradient-to-tl dark:from-gray-800 dark:to-gray-900">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Process</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {service.process.map((step, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger
                    className="text-xl text-white hover:text-yellow-400 transition-colors dark:text-gray-200 dark:hover:text-yellow-300"
                    onClick={() => setActiveAccordion(activeAccordion === `item-${index}` ? null : `item-${index}`)}
                  >
                    {step.title}
                  </AccordionTrigger>
                  <AnimatePresence>
                    {activeAccordion === `item-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AccordionContent className="bg-opacity-20 bg-gray-900 text-white p-4 rounded-lg dark:bg-opacity-40 dark:bg-gray-800">
                          {step.description}
                        </AccordionContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
              {/* Additional Process Step */}
              <AccordionItem value="item-new">
                <AccordionTrigger
                  className="text-xl text-white hover:text-yellow-400 transition-colors dark:text-gray-200 dark:hover:text-yellow-300"
                  onClick={() => setActiveAccordion(activeAccordion === 'item-new' ? null : 'item-new')}
                >
                  Continuous Improvement
                </AccordionTrigger>
                <AnimatePresence>
                  {activeAccordion === 'item-new' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AccordionContent className="bg-opacity-20 bg-gray-900 text-white p-4 rounded-lg dark:bg-opacity-40 dark:bg-gray-800">
                        We continuously monitor and evaluate the project to implement iterative improvements, ensuring long-term success.
                      </AccordionContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </div>

  )
}