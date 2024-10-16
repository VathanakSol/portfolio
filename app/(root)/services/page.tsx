'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Palette, Server, GitBranch } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { id: 1, title: 'Web Development', description: 'Building dynamic and responsive websites using modern technologies with best user experience.', icon: Code },
  { id: 2, title: 'UI/UX Design', description: 'Designing user interfaces and experiences that are both functional and aesthetically pleasing.', icon: Palette },
  { id: 3, title: 'Spring Development', description: 'Developing robust applications using the Spring framework for seamless performance.', icon: Server },
  { id: 4, title: 'DevOps Engineering', description: 'Streamlining development and operations for faster delivery and improved collaboration.', icon: GitBranch },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-4">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
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
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-3">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={`/services/${service.id}`} passHref>
                  <Button>Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}