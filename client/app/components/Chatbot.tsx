'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Question {
  id: number
  category: string
  text: string
  emoji?: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

const questions: Question[] = [
  // Psychological Stress Indicators
  { id: 1, category: "Psychological", text: "How often do you feel overwhelmed by daily responsibilities?", emoji: "🤯" },
  { id: 2, category: "Psychological", text: "Do you find it difficult to concentrate on tasks?", emoji: "🎯" },
  { id: 3, category: "Psychological", text: "Do you feel anxious or worried even when there is no immediate problem?", emoji: "😰" },
  { id: 4, category: "Psychological", text: "How often do you experience racing thoughts or mental restlessness?", emoji: "🌪️" },
  { id: 5, category: "Psychological", text: "Do you have difficulty making decisions or feel mentally exhausted?", emoji: "🤔" },
]

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showQuestionnaire, setShowQuestionnaire] = useState(true)

  const handleAnswer = async (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      // Calculate stress levels and show results
      setShowQuestionnaire(false)
      setIsLoading(true)

      try {
        // Format responses for the API
        const formattedResponses = questions.map(question => ({
          question: question.text,
          response: getResponseText(answers[question.id])
        }))

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ responses: formattedResponses }),
        })

        if (!response.ok) {
          throw new Error('Failed to get response')
        }

        const data = await response.json()
        setMessages([{ role: 'assistant', content: data.message }])
      } catch (error) {
        console.error('Error:', error)
        setMessages([{ 
          role: 'assistant', 
          content: 'I apologize, but I encountered an error while analyzing your responses. Please try again later.' 
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const getResponseText = (value: number): string => {
    switch (value) {
      case 1:
        return "Never"
      case 2:
        return "Rarely"
      case 3:
        return "Sometimes"
      case 4:
        return "Often"
      case 5:
        return "Always"
      default:
        return "Not specified"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage = { role: 'assistant' as const, content: data.message }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const renderQuestionnaire = () => {
    const currentQuestion = questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100

    return (
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="mb-4 sm:mb-6">
          <div className="h-2 sm:h-3 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl animate-bounce">{currentQuestion.emoji}</span>
              <span className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-purple-700 w-fit">
                {currentQuestion.category}
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-medium mb-6 sm:mb-8 text-gray-800">{currentQuestion.text}</h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleAnswer(currentQuestion.id, value)}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105
                    ${answers[currentQuestion.id] === value 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'border-2 border-purple-100 hover:border-purple-300 hover:bg-purple-50'}
                  `}
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-semibold mb-0.5 sm:mb-1">{value}</div>
                    <div className="text-[10px] sm:text-xs opacity-90">
                      {value === 1 ? 'Never' : value === 2 ? 'Rarely' : value === 3 ? 'Sometimes' : value === 4 ? 'Often' : 'Always'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[500px] h-[80vh] sm:h-[600px] flex flex-col p-0 rounded-xl sm:rounded-2xl overflow-hidden border-purple-100 mx-auto">
        <DialogHeader className="px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-100 bg-gradient-to-r from-blue-500 to-purple-500">
          <DialogTitle className="text-white font-semibold text-lg sm:text-xl">Stress Level Assessment</DialogTitle>
        </DialogHeader>
        
        {showQuestionnaire ? (
          renderQuestionnaire()
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-b from-blue-50 to-purple-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md transform transition-all duration-300 hover:scale-[1.02] ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white border border-purple-100'
                    }`}
                  >
                    <div className="text-sm sm:text-base">{message.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-white border border-purple-100 shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-purple-100 p-3 sm:p-4 flex items-center gap-2 sm:gap-3 bg-white"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
} 