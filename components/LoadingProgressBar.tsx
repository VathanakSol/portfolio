'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Progress } from "@/components/ui/progress"

export function LoadingProgressBar() {
  const [progress, setProgress] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    let timer: NodeJS.Timeout

    const startProgress = () => {
      setIsVisible(true)
      setProgress(0)
      timer = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 90) {
            clearInterval(timer)
            return prevProgress
          }
          return prevProgress + 10
        })
      }, 200)
    }

    const completeProgress = () => {
      clearInterval(timer)
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, 200)
    }

    startProgress()

    return () => {
      clearInterval(timer)
      completeProgress()
    }
  }, [pathname, searchParams])

  if (!isVisible) return null

  return (
    <Progress 
      value={progress} 
      className="fixed top-0 left-0 right-0 z-50 h-1 w-full bg-blue-500 transition-all duration-200 ease-in-out"
    />
  )
}