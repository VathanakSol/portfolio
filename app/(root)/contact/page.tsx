import Contact from '@/components/Contact'
import React from 'react'
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Contact",
  description: "Portfolio Website",
};

export default function ContactPage() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
        <Contact />
    </main>
  )
}
