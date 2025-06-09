export const careerGuidanceResponses = {
  // Sample responses for testing
  sampleQuestions: [
    "What career path should I choose?",
    "How can I improve my resume?",
    "What skills are in demand?",
    "How to prepare for interviews?",
    "What are the job market trends?",
    "How to negotiate salary?",
    "Tips for career change?",
    "How to build professional network?",
  ],

  // Enhanced career guidance knowledge base
  careerPaths: {
    technology: {
      roles: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "DevOps Engineer", "Product Manager"],
      skills: ["Programming", "Cloud Computing", "Data Analysis", "Problem Solving", "Communication"],
      salaryRange: "$70K - $200K+",
      growth: "High demand, 22% growth expected",
    },
    healthcare: {
      roles: ["Nurse", "Physical Therapist", "Healthcare Administrator", "Medical Technician"],
      skills: ["Patient Care", "Medical Knowledge", "Communication", "Attention to Detail"],
      salaryRange: "$50K - $150K+",
      growth: "Very high demand, aging population",
    },
    business: {
      roles: ["Marketing Manager", "Sales Representative", "Business Analyst", "Project Manager"],
      skills: ["Communication", "Analytics", "Leadership", "Strategic Thinking"],
      salaryRange: "$45K - $130K+",
      growth: "Steady demand across industries",
    },
  },

  interviewTips: [
    "Research the company thoroughly before the interview",
    "Practice the STAR method for behavioral questions",
    "Prepare specific examples of your achievements",
    "Ask thoughtful questions about the role and company",
    "Follow up with a thank-you email within 24 hours",
  ],

  resumeTips: [
    "Tailor your resume to each job application",
    "Use action verbs and quantify achievements",
    "Keep it to 1-2 pages maximum",
    "Include relevant keywords from the job description",
    "Proofread carefully for errors",
  ],
}

export function getCareerAdvice(query: string): string {
  const lowerQuery = query.toLowerCase()

  if (lowerQuery.includes("career path") || lowerQuery.includes("what career")) {
    return `Great question! Choosing the right career path is crucial. Here's how to approach it:

🎯 **Self-Assessment First:**
• Identify your interests, values, and natural strengths
• Consider your preferred work environment and lifestyle
• Evaluate your current skills and experience level

📈 **High-Growth Career Areas:**
• **Technology**: Software Development, Data Science, AI/ML, Cybersecurity
• **Healthcare**: Nursing, Telehealth, Mental Health, Medical Technology
• **Green Energy**: Renewable Energy, Sustainability Consulting
• **Digital Marketing**: SEO, Social Media, Content Strategy

🔍 **Next Steps:**
1. Take career assessment tests (O*NET Interest Profiler, 16Personalities)
2. Conduct informational interviews with professionals
3. Consider job shadowing or internships
4. Research salary ranges and job market demand in your area

💡 **Pro Tip**: Don't just follow trends - choose something that aligns with your interests and values for long-term satisfaction.

What specific industries or roles interest you most? I can provide more detailed guidance!`
  }

  if (lowerQuery.includes("resume") || lowerQuery.includes("cv")) {
    return `Excellent question! A strong resume is your ticket to interviews. Here's how to make yours stand out:

📝 **Resume Structure:**
• **Header**: Name, phone, email, LinkedIn, location (city/state)
• **Professional Summary**: 2-3 lines highlighting your value proposition
• **Experience**: Most recent first, with quantified achievements
• **Skills**: Technical and soft skills relevant to the role
• **Education**: Degree, school, graduation year (if recent)

🎯 **Key Tips:**
• **Tailor for each job**: Use keywords from the job description
• **Quantify achievements**: "Increased sales by 25%" vs "Responsible for sales"
• **Use action verbs**: Led, developed, implemented, achieved, optimized
• **Keep it concise**: 1 page for <10 years experience, 2 pages max
• **ATS-friendly**: Use standard fonts, avoid graphics/tables

✨ **Common Mistakes to Avoid:**
• Generic objective statements
• Listing job duties instead of achievements
• Typos and grammatical errors
• Including irrelevant personal information
• Using outdated email addresses

🔍 **Before Submitting:**
• Proofread multiple times
• Have someone else review it
• Test with ATS scanners online
• Save as PDF to preserve formatting

Would you like me to help you optimize a specific section of your resume or review your industry-specific requirements?`
  }

  if (lowerQuery.includes("interview") || lowerQuery.includes("prepare")) {
    return `Great timing! Interview preparation is key to success. Here's your comprehensive guide:

🎯 **Common Interview Questions & Strategies:**

**"Tell me about yourself"**
• Structure: Present → Past → Future (2 minutes max)
• Focus on professional highlights relevant to the role
• End with why you're interested in this position

**"Why do you want this job?"**
• Research the company's mission, values, recent news
• Connect your skills/experience to their needs
• Show genuine enthusiasm for the role and company

**"What are your strengths/weaknesses?"**
• Strengths: Choose 2-3 relevant to the job with specific examples
• Weaknesses: Pick real ones you're actively improving with steps you're taking

🌟 **Behavioral Questions (Use STAR Method):**
• **Situation**: Set the context
• **Task**: Explain your responsibility  
• **Action**: Describe what you did
• **Result**: Share the measurable outcome

📋 **Day-of-Interview Success:**
• Arrive 10-15 minutes early
• Bring multiple copies of your resume
• Dress appropriately for company culture
• Maintain good eye contact and body language
• Take notes during the conversation

❓ **Smart Questions to Ask Them:**
• "What does success look like in this role after 6 months?"
• "What are the biggest challenges facing the team?"
• "How do you support professional development?"
• "What do you enjoy most about working here?"

📧 **Follow-up**: Send a thank-you email within 24 hours mentioning specific conversation points.

What type of interview are you preparing for? I can provide more specific guidance!`
  }

  // Default response for general career questions
  return `I'd be happy to help with your career question! As your Smart Career Guidance Assistant, I can provide advice on:

🎯 **Career Planning:**
• Career path exploration and recommendations
• Industry insights and job market trends
• Skills development and gap analysis
• Career transition strategies

💼 **Job Search Support:**
• Resume optimization and LinkedIn tips
• Interview preparation and techniques
• Networking strategies and personal branding
• Salary negotiation guidance

📈 **Professional Development:**
• Learning resources and certifications
• Leadership and soft skills development
• Work-life balance strategies
• Performance improvement tips

Could you be more specific about what aspect of your career you'd like guidance on? For example:
• "What career path should I choose based on my interests in [field]?"
• "How can I transition from [current role] to [desired role]?"
• "What skills should I develop for [specific industry]?"

The more details you provide about your situation, the more personalized advice I can offer!`
}
