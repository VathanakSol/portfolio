"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {convertTextToSpeech} from "@/components/convertTextToSpeech";
import {SoundMakerIcon} from "@/components/icon";

const ElevenLabsTTS: React.FC = () => {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedVoice, setSelectedVoice] = useState("JBFqnCBsd6RMkjVDRZzb"); // Default voice
    const [isOpen, setIsOpen] = useState(false); // State for controlling the pop-up

    const voices = [
        { id: "JBFqnCBsd6RMkjVDRZzb", name: "Rachel" },
        { id: "AZnzlk1XvdvUeBnXmlld", name: "Bella" },
        { id: "Xb7hH8MSUJpSbSDYk0k2", name: "Alice" },
    ];

    const handleGenerateSpeech = async () => {
        setAudioUrl(null);
        setError(null);

        if (!text.trim()) {
            setError("Please enter some text.");
            return;
        }

        setIsLoading(true);
        try {
            const url = await convertTextToSpeech(selectedVoice, text);
            setAudioUrl(url);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An error occurred.";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (audioUrl) {
            const link = document.createElement("a");
            link.href = audioUrl;
            link.download = "speech.mp3";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div>
            {/* Fixed Button */}
            <button
                className="fixed bottom-10 left-6 bg-blue-500 text-white px-2 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ease-in-out"
                onClick={() => setIsOpen(true)}
                aria-label="Open Text-to-Speech"
            >
                <SoundMakerIcon.gitlab />
            </button>

            {/* Pop-up Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setIsOpen(false)} // Close on backdrop click
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full"
                            onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
                        >
                            <h2 className="text-2xl font-bold mb-4">Text-to-Speech Generator</h2>
                            <div className="space-y-4">
                                {/* Voice Selection */}
                                <div>
                                    <Label>Select Voice</Label>
                                    <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Choose a voice" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {voices.map((voice) => (
                                                <SelectItem key={voice.id} value={voice.id}>
                                                    {voice.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Text Input */}
                                <div>
                                    <Label htmlFor="text">Enter Text</Label>
                                    <Textarea
                                        id="text"
                                        placeholder="Type or paste your text here..."
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        className="min-h-[120px]"
                                    />
                                </div>

                                {/* Error Message */}
                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                {/* Generate Button */}
                                <Button onClick={handleGenerateSpeech} disabled={isLoading} className="w-full">
                                    {isLoading ? "Generating..." : "Generate Speech"}
                                </Button>

                                {/* Audio Player */}
                                {audioUrl && (
                                    <div className="space-y-2">
                                        <audio controls src={audioUrl} className="w-full" />
                                        <Button variant="secondary" onClick={handleDownload} className="w-full">
                                            Download Audio
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ElevenLabsTTS;
