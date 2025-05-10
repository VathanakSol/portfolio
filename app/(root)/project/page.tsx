import Project from '@/components/Project'
import React from 'react'
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Project",
  description: "Portfolio Website",
};

export default function ProjectPage() {
  return (
    <>
      <Project />
    </>
  )
}
