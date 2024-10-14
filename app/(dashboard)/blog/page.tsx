
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import NewPostForm from '@/components/NewPostForm';

const allowedRoles = ['ADMIN', 'USER']; 

export default function AdminBlogPage() {
  const { data: session, status } = useSession();
  const [message, setMessage] = useState('');
  const [role, setRole]= useState<string | null>(null);

  useEffect(() => {
    if (session && session.user) {
      setRole(session.user.role || null); 
    }
  }, [session]);

  if (status === 'loading') {
    return <div className="h-screen w-full flex justify-center items-center">Loading...</div>;
  }

  console.log("Session data: ", session); 
  console.log("User role: ", role); 

  if (status === 'unauthenticated' || !session || (role && !allowedRoles.includes(role))) {
    return (
      <div className="w-full h-screen flex flex-col gap-6 justify-center items-center bg-gray-100 text-orange-500 text-3xl">
        <p>⚠️</p>
        <p>Access Denied</p>
      </div>
    );
  }

  const handlePostCreated = () => {
    setMessage('Post created successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin Blog Management
      </motion.h1>
      {message && (
        <motion.div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <span className="block sm:inline">{message}</span>
        </motion.div>
      )}
      <NewPostForm onPostCreated={handlePostCreated} />
    </div>
  );
}