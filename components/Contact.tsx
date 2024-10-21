'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { sendEmail } from '@/app/actions/send-email'
import { toast } from '@/hooks/use-toast'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className={`transition-transform duration-200 ${pending ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700 w-full'}`}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState<{ success?: boolean; message?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)
    setFormState(result)
    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
      })
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form action={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              name="name" 
              required 
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
            />
          </div>
          <SubmitButton />
        </form>
        {formState && (
          <p className={`mt-4 text-center ${formState.success ? 'text-green-600' : 'text-red-600'}`}>
            {formState.message}
          </p>
        )}
      </div>
    </div>
  )
}