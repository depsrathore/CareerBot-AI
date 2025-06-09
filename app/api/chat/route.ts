import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("AIzaSyB3MRJO68GEt5J-gI5Y2JKVnaIz7TYtWio")

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    console.log("Received message:", message)

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
      },
    })

    // Build conversation history
    let conversationHistory = ""
    if (history && history.length > 0) {
      conversationHistory = history
        .map((msg: any) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
        .join("\n\n")
    }

    // Enhanced prompt for general AI behavior with career specialization
    const fullPrompt = `You are a helpful AI assistant. Respond naturally and conversationally to any question or topic the user asks about.

${conversationHistory ? `Previous conversation:\n${conversationHistory}\n\n` : ""}

User question: ${message}

Instructions:
- Be helpful, informative, and conversational
- Answer any topic the user asks about (technology, science, general knowledge, etc.)
- Only focus specifically on career guidance when the user explicitly asks about careers, jobs, professional development, resumes, interviews, or work-related topics
- Keep responses concise but comprehensive
- Be natural and friendly in your tone
- Don't assume every question is career-related unless it clearly is

Provide a helpful response:`

    console.log("Sending to Gemini...")

    const result = await model.generateContent(fullPrompt)
    const response = await result.response
    const text = response.text()

    console.log("Gemini response received")

    return Response.json({ response: text })
  } catch (error) {
    console.error("Gemini API Error:", error)

    return Response.json({
      response: "I'm having trouble connecting to my AI service right now. Please try again in a moment.",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
