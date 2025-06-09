import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("AIzaSyB3MRJO68GEt5J-gI5Y2JKVnaIz7TYtWio")

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Use the correct model name - gemini-1.5-flash is available and free
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024,
      },
    })

    // Get the conversation context
    const conversationHistory = messages
      .map((msg: any) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n")

    const systemPrompt = `You are a helpful AI assistant. Answer questions naturally and conversationally on any topic.

When users ask about career-related topics (jobs, careers, professional development, resumes, interviews, skills, workplace issues), provide detailed career guidance.

For all other topics, respond as a knowledgeable general AI assistant.

📋 CONVERSATION CONTEXT:
${conversationHistory}

Please provide a helpful response based on the conversation above:`

    const result = await model.generateContent(systemPrompt)
    const response = await result.response
    const text = response.text()

    return new Response(
      JSON.stringify({
        message: text,
        success: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  } catch (error) {
    console.error("Gemini API Error:", error)

    // Provide helpful fallback responses based on common career questions
    const fallbackResponse = getFallbackResponse()

    return new Response(
      JSON.stringify({
        message: fallbackResponse,
        success: true,
        fallback: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

function getFallbackResponse(): string {
  return `I'm experiencing a temporary connection issue, but I'm still here to help with your career guidance! 

Here are some key career insights I can share:

🎯 **Popular Career Paths:**
• **Technology**: Software Development, Data Science, AI/ML, Cybersecurity
• **Healthcare**: Nursing, Physical Therapy, Healthcare Administration  
• **Business**: Marketing, Sales, Project Management, Consulting
• **Creative**: UX/UI Design, Content Creation, Digital Marketing

💼 **Essential Career Tips:**
• Build both technical skills AND soft skills
• Network actively - 70% of jobs aren't publicly posted
• Keep learning continuously - industries evolve rapidly
• Tailor your resume for each application
• Practice interviewing regularly

📈 **In-Demand Skills 2024:**
• Programming (Python, JavaScript)
• Data Analysis & Visualization
• Digital Marketing & SEO
• Cloud Computing (AWS, Azure)
• Communication & Leadership

Could you please rephrase your question? I'll do my best to provide specific guidance for your career situation!`
}
