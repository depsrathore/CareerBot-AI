import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "AIzaSyB3MRJO68GEt5J-gI5Y2JKVnaIz7TYtWio")

export async function generateCareerResponse(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const enhancedPrompt = `
    You are a Smart Career Guidance Assistant. Provide helpful, specific, and actionable career advice.
    
    User Query: ${prompt}
    
    Please provide a comprehensive response that includes:
    1. Direct answer to the user's question
    2. Specific actionable steps they can take
    3. Relevant resources or tools they might find helpful
    4. Any important considerations or potential challenges
    
    Keep your response professional, encouraging, and practical.
    `

    const result = await model.generateContent(enhancedPrompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error("Gemini API Error:", error)
    return "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again, and I'll do my best to help you with your career guidance needs."
  }
}

export const careerGuidancePrompts = {
  welcome:
    "Hello! I'm your Smart Career Guidance Assistant. I'm here to help you with career advice, learning paths, job recommendations, and answer any career-related questions. How can I assist you today?",

  sampleResponses: {
    careerPath: `Great question! Choosing a career path depends on several factors:

**Self-Assessment First:**
• Identify your interests, values, and natural strengths
• Consider your preferred work environment and lifestyle
• Evaluate your current skills and experience

**Popular Career Paths to Consider:**
• **Technology**: Software Development, Data Science, Cybersecurity, AI/ML
• **Business**: Marketing, Sales, Project Management, Consulting
• **Healthcare**: Nursing, Physical Therapy, Healthcare Administration
• **Creative**: UX/UI Design, Content Creation, Digital Marketing
• **Finance**: Financial Analysis, Investment Banking, Financial Planning

**Next Steps:**
1. Take career assessment tests (O*NET Interest Profiler, 16Personalities)
2. Conduct informational interviews with professionals
3. Consider job shadowing or internships
4. Research salary ranges and job market demand

Would you like me to dive deeper into any specific career area?`,

    skills: `Excellent question! Here are the most in-demand skills across industries:

**Technical Skills:**
• **Programming**: Python, JavaScript, SQL, Cloud Computing (AWS, Azure)
• **Data Analysis**: Excel, Tableau, Power BI, R, Python
• **Digital Marketing**: SEO, Social Media, Google Analytics
• **Cybersecurity**: Network Security, Risk Assessment
• **AI/Machine Learning**: TensorFlow, PyTorch, Data Science

**Soft Skills (Equally Important):**
• Communication and presentation skills
• Problem-solving and critical thinking
• Leadership and team collaboration
• Adaptability and continuous learning
• Emotional intelligence

**How to Develop These Skills:**
1. **Online Learning**: Coursera, Udemy, LinkedIn Learning, freeCodeCamp
2. **Certifications**: Google, Microsoft, Amazon, Salesforce
3. **Practice Projects**: Build a portfolio on GitHub
4. **Networking**: Join professional associations and online communities

**Pro Tip**: Focus on developing both technical skills relevant to your field AND strong communication skills - this combination makes you incredibly valuable!

What specific skill area interests you most?`,

    jobMarket: `Here's what's happening in today's job market:

**Growing Industries:**
• **Technology**: AI/ML, Cybersecurity, Cloud Computing, Software Development
• **Healthcare**: Telehealth, Mental Health, Elder Care, Health Tech
• **Green Energy**: Solar, Wind, Electric Vehicles, Sustainability
• **E-commerce**: Digital Marketing, Supply Chain, Customer Experience
• **Remote Work Tools**: Collaboration software, Virtual Reality, EdTech

**Job Market Trends:**
• 73% of companies now offer remote or hybrid work options
• Skills-based hiring is increasing (less emphasis on degrees alone)
• Contract and gig work opportunities are expanding
• Automation is changing job requirements (upskilling is crucial)

**Hot Job Roles:**
• Data Scientists and Analysts
• Software Engineers and Developers
• Digital Marketing Specialists
• Cybersecurity Analysts
• Healthcare Professionals
• UX/UI Designers
• Project Managers
• Sales Development Representatives

**Salary Insights:**
• Tech roles: $70K-$150K+ average
• Healthcare: $50K-$120K+ depending on specialization
• Marketing: $45K-$100K+ based on experience
• Remote work can expand your job market significantly

**Action Steps:**
1. Research specific roles on LinkedIn, Glassdoor, Indeed
2. Set up job alerts for positions that interest you
3. Network with professionals in growing industries
4. Consider upskilling in high-demand areas

Which industry or role would you like me to explore further?`,

    interview: `Great! Interview preparation is crucial for success. Here's your comprehensive guide:

**Common Interview Questions & How to Answer:**

**1. "Tell me about yourself"**
• Structure: Present situation → Past experience → Future goals
• Keep it professional and relevant to the role
• Practice a 2-minute version

**2. "Why do you want this job?"**
• Research the company thoroughly
• Connect your skills to their needs
• Show genuine enthusiasm

**3. "What are your strengths/weaknesses?"**
• Strengths: Choose relevant ones with specific examples
• Weaknesses: Pick real ones you're actively improving

**4. "Where do you see yourself in 5 years?"**
• Show ambition but realistic expectations
• Align with potential career progression at the company

**Behavioral Questions (STAR Method):**
• **Situation**: Set the context
• **Task**: Explain your responsibility
• **Action**: Describe what you did
• **Result**: Share the outcome

**Technical Interview Prep:**
• Review job requirements thoroughly
• Practice coding problems (if applicable)
• Prepare portfolio examples
• Know your resume inside and out

**Day-of-Interview Tips:**
• Arrive 10-15 minutes early
• Bring multiple copies of your resume
• Prepare thoughtful questions about the role/company
• Follow up with a thank-you email within 24 hours

**Questions to Ask Them:**
• "What does success look like in this role?"
• "What are the biggest challenges facing the team?"
• "How do you support professional development?"
• "What's the company culture like?"

Would you like me to help you practice answers to specific questions or discuss interview strategies for a particular industry?`,
  },
}
