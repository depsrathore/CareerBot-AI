"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestAPI() {
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const testAPI = async () => {
    setLoading(true)
    setResponse("")
    setError("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "What career path should I choose?",
          history: [],
        }),
      })

      console.log("Response status:", res.status)
      console.log("Response headers:", res.headers)

      const text = await res.text()
      console.log("Raw response:", text)

      try {
        const data = JSON.parse(text)
        setResponse(data.response || "No response field")
        if (data.error) {
          setError(data.error)
        }
      } catch (parseError) {
        setError(`JSON Parse Error: ${parseError}. Raw response: ${text}`)
      }
    } catch (error) {
      setError(`Network Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>API Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={testAPI} disabled={loading}>
            {loading ? "Testing..." : "Test Gemini API"}
          </Button>

          {error && (
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Error:</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm text-red-600">{error}</pre>
              </CardContent>
            </Card>
          )}

          {response && (
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">Response:</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm">{response}</pre>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
