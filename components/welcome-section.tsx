"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react"

interface WelcomeSectionProps {
  onQuickStart: (message: string) => void
}

export function WelcomeSection({ onQuickStart }: WelcomeSectionProps) {
  const quickStartOptions = [
    {
      icon: Briefcase,
      title: "Career Path Guidance",
      description: "Get personalized career recommendations",
      message:
        "I'm looking for career path guidance. Can you help me explore different career options based on my interests and skills?",
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Learn what skills to develop",
      message:
        "What skills should I develop to advance in my career? I want to know about in-demand skills in the job market.",
    },
    {
      icon: TrendingUp,
      title: "Job Market Insights",
      description: "Understand current job trends",
      message: "Can you provide insights about current job market trends and which industries are growing?",
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Prepare for your next interview",
      message:
        "I have an upcoming job interview. Can you help me prepare and give me some common interview questions and tips?",
    },
  ]

  return (
    <div className="text-center mb-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Career Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm here to provide personalized career guidance, help you discover new opportunities, and support your
          professional growth every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {quickStartOptions.map((option, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => onQuickStart(option.message)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <option.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Ready to Start?</h3>
        <p className="mb-4">Ask me anything about careers, skills, job searching, or professional development!</p>
        <Button
          variant="secondary"
          onClick={() => onQuickStart("Hi! I'd like to get some career guidance. Can you help me?")}
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Start Chatting
        </Button>
      </div>
    </div>
  )
}
