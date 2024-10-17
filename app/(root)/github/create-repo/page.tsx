import CreateRepo from '@/components/Create-Repo';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'

export default function CreateRepoPage() {
  return (
    <>
        <Link href="/github" passHref>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to GitHub 
        </Button>
      </Link>
    <div className="w-full h-screen flex justify-center items-center">
        <CreateRepo />
    </div>
    </>
    
  )
}
