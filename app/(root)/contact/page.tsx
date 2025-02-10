import Contact from '@/components/Contact'
import React from 'react'
import { Metadata } from 'next/types';
import ContactAnimation from '@/components/ContactAnimation';

export const metadata: Metadata = {
  title: "Contact",
  description: "Portfolio Website",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <Contact />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <ContactAnimation />
        </div>
    </main>
  )
}
