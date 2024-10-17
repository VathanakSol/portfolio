"use client";

import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const CreateRepo = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('https://naktech.pro/api/github', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description }),
        });

        if (response.ok) {
            const data = await response.json();
            toast({
                title: "Repository Created",
                description: `Your new repository is available at: ${data.html_url}`,
                duration: 5000,
            });
            // Reset the form after successful submission
            setName('');
            setDescription('');
        } else {
            toast({
                title: "Error",
                description: "Failed to create repository. Please try again.",
                variant: "destructive",
                duration: 5000,
            });
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Create a New Repository</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="repo-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Repository Name
                    </label>
                    <input 
                        id="repo-name"
                        type="text"
                        placeholder="Enter repository name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required
                        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="repo-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description
                    </label>
                    <textarea 
                        id="repo-description"
                        placeholder="Enter repository description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    Create Repository
                </button>
            </form>
        </div>
    );
};

export default CreateRepo;