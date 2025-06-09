"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Loader2, AlertCircle } from "lucide-react"
import { useEffect, useRef } from "react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  messages: Message[]
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  error?: string | null
}

export function ChatInterface({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  error,
}: ChatInterfaceProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="h-[600px] flex flex-col shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
          <h3 className="font-semibold flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>CareerBot AI - Smart Career Guidance</span>
          </h3>
          <p className="text-sm opacity-90">
            Your AI assistant for any questions - general topics, career guidance, and more!
          </p>
        </div>

        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  }`}
                >
                  {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                <div className={`flex-1 max-w-[85%] ${message.role === "user" ? "text-right" : ""}`}>
                  <div
                    className={`p-4 rounded-lg shadow-sm ${
                      message.role === "user"
                        ? "bg-blue-600 text-white ml-auto"
                        : "bg-white border border-gray-200 text-gray-900"
                    }`}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                  </div>
                  <div className={`text-xs text-gray-500 mt-2 ${message.role === "user" ? "text-right" : ""}`}>
                    {message.role === "user" ? "You" : "CareerBot AI"} • {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="p-4 rounded-lg bg-white border border-gray-200 text-gray-900">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                      <span>Analyzing your question and preparing career guidance...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-red-500 text-white">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">{error}</div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="border-t bg-gray-50 p-4 rounded-b-lg">
          <form onSubmit={handleSubmit} className="flex space-x-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me anything - general questions, career guidance, technology, science, or whatever you need..."
              className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              disabled={isLoading}
              maxLength={500}
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "What career path should I choose?",
              "How to improve my resume?",
              "Interview preparation tips",
              "Skills for career growth",
              "Job market trends 2024",
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleInputChange({ target: { value: suggestion } } as any)}
                className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="mt-2 text-xs text-gray-500 text-center">
            💡 Tip: Be specific about your situation for more personalized advice
          </div>
        </div>
      </Card>
    </div>
  )
}
