"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebugPage() {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const testGemini = async () => {
    setLoading(true)
    setResult("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Hello, can you help me with career advice?",
          history: [],
        }),
      })

      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult(`Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Debug Gemini API</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={testGemini} disabled={loading}>
            {loading ? "Testing..." : "Test Gemini API"}
          </Button>

          {result && <pre className="mt-4 p-4 bg-gray-100 rounded text-sm overflow-auto">{result}</pre>}
        </CardContent>
      </Card>
    </div>
  )
}
