"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestPage() {
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const testQuestions = [
    "What career path should I choose?",
    "How can I improve my resume?",
    "What are the current job market trends?",
    "How should I prepare for interviews?",
    "What skills are in high demand?",
  ]

  const testAPI = async (question: string) => {
    setLoading(true)
    setResponse("")

    try {
      const res = await fetch("/api/chat/simple", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: question }],
        }),
      })

      const data = await res.json()
      setResponse(data.message || "No response received")
    } catch (error) {
      setResponse(`Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>CareerBot AI - API Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testQuestions.map((question, index) => (
              <Button
                key={index}
                onClick={() => testAPI(question)}
                disabled={loading}
                variant="outline"
                className="h-auto p-4 text-left justify-start"
              >
                {question}
              </Button>
            ))}
          </div>

          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2">Testing API...</p>
            </div>
          )}

          {response && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">API Response:</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded">{response}</pre>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
