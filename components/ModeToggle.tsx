"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (!mounted) {
    return null; 
  }

  return (
    <Button  size="icon" onClick={toggleTheme}>
      <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? 'block' : 'hidden'}`} />   
      <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? 'block' : 'hidden'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}