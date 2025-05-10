"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { sendEmail } from "@/app/actions/send-email";
import { toast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`
        w-full
        bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-cyan-500 dark:to-blue-700
        hover:from-cyan-500 hover:to-blue-700 dark:hover:from-cyan-600 dark:hover:to-blue-800
        text-white font-medium
        rounded-lg
        border border-cyan-300/30 dark:border-cyan-400/20
        shadow-lg
        shadow-cyan-400/20 dark:shadow-cyan-500/10
        hover:shadow-blue-500/30 dark:hover:shadow-blue-600/20
        transition-all
        duration-300
        transform
        hover:scale-[1.02]
        ${pending ? "opacity-70" : ""}
      `}
    >
      {pending ? "Sending ..." : "Click to Send"}
    </Button>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    setFormState(result);
    if (result.success) {
      toast({
        title: "Send Successful!",
        description: result.message,
        className: "bg-green-500 text-white",
      });
    } else {
      toast({
        title: "Send failed, Try again",
        description: result.message,
        className: "bg-red-500 text-white",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 dark:bg-gray-900 p-4">
      <div className="container px-4 py-8 max-w-md">
        <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-xl shadow-blue-300/10 dark:shadow-blue-500/10">
          <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 hover:from-cyan-400 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 transition-all duration-300">
            Contact Me
          </h1>
          <form action={handleSubmit} className="space-y-6 mt-8">
            <div>
              <Label
                htmlFor="name"
                className="text-gray-700 dark:text-gray-300 block mb-2 font-medium"
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="bg-gray-100/70 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300 block mb-2 font-medium"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-gray-100/70 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="text-gray-700 dark:text-gray-300 block mb-2 font-medium"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                className="bg-gray-100/70 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 placeholder-gray-500 dark:placeholder-gray-400 transition-all min-h-[120px]"
              />
            </div>
            <SubmitButton />
          </form>
          {formState && (
            <p
              className={`mt-4 text-center font-mono text-sm ${formState.success ? "text-cyan-600 dark:text-cyan-400" : "text-red-600 dark:text-red-400"}`}
            >
              {formState.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
