'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from 'lucide-react'

// Mock quiz data - in a real app, this would be fetched from an API
const quizzes = {
  "javascript-fundamentals": {
    title: "JavaScript Fundamentals",
    questions: [
      {
        question: "What is the result of '2' + 2 in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        correctAnswer: 1
      },
      {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        correctAnswer: 0
      },
      {
        question: "What does the '===' operator do?",
        options: ["Assigns a value", "Compares value only", "Compares value and type", "None of the above"],
        correctAnswer: 2
      }
    ]
  },
}

export default function QuizPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds per question

  const quiz = quizzes[params.slug as keyof typeof quizzes]

  useEffect(() => {
    if (!quiz) {
      router.push('/learning/quizzes')
    }
  }, [quiz, router])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestion])

  if (!quiz) {
    return null
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Reset selected answer only when moving to next question
      setSelectedAnswer(null);
      setTimeLeft(60);
    } else {
      setShowResult(true);
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(60);
  }

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>{quiz.title}</CardTitle>
          {!showResult && (
            <div className="flex justify-between items-center">
              <Progress value={progress} className="w-1/2" />
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {!showResult ? (
            <>
              <h2 className="text-xl font-semibold mb-4">{quiz.questions[currentQuestion].question}</h2>
              <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-4 text-sm font-medium">Time left: {timeLeft} seconds</div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
              <p className="text-xl mb-4">You scored {score} out of {quiz.questions.length}</p>
              <Progress value={(score / quiz.questions.length) * 100} className="w-full mb-4" />
              {score === quiz.questions.length ? (
                <div className="flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle className="mr-2" />
                  <span>Perfect score! Great job!</span>
                </div>
              ) : (
                <div className="flex items-center justify-center text-yellow-500 mb-4">
                  <AlertCircle className="mr-2" />
                  <span>Good effort! Keep practicing to improve.</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {!showResult ? (
            <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
              {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          ) : (
            <Button onClick={handleRetry}>Retry Quiz</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
