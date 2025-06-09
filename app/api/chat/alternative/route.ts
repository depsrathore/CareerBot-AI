export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userQuestion = lastMessage?.content?.toLowerCase() || ""

    // Provide intelligent responses based on keywords
    let response = ""

    if (userQuestion.includes("career path") || userQuestion.includes("what career")) {
      response = `Great question! Choosing the right career path is crucial for your success and happiness. Here's a comprehensive guide:

🎯 **Self-Assessment First:**
• **Interests**: What activities energize you? What topics do you enjoy learning about?
• **Values**: What's important to you? (Work-life balance, helping others, financial security, creativity)
• **Skills**: What are you naturally good at? What skills have you developed?
• **Personality**: Are you introverted/extroverted? Do you prefer structure or flexibility?

📈 **High-Growth Career Areas in 2024:**

**Technology (High Demand)**
• Software Developer: $70K-$150K+
• Data Scientist: $80K-$160K+
• Cybersecurity Analyst: $75K-$140K+
• Cloud Engineer: $85K-$170K+

**Healthcare (Essential & Growing)**
• Registered Nurse: $60K-$90K+
• Physical Therapist: $75K-$95K+
• Healthcare Administrator: $70K-$120K+
• Mental Health Counselor: $45K-$80K+

**Business & Marketing**
• Digital Marketing Manager: $55K-$100K+
• Project Manager: $65K-$120K+
• Sales Manager: $60K-$130K+
• Business Analyst: $60K-$110K+

🔍 **Action Steps:**
1. **Take assessments**: O*NET Interest Profiler, 16Personalities, StrengthsFinder
2. **Research thoroughly**: Use LinkedIn, Glassdoor, Bureau of Labor Statistics
3. **Network actively**: Conduct informational interviews with professionals
4. **Gain experience**: Internships, volunteering, side projects
5. **Consider education**: Determine if additional training/degrees are needed

💡 **Pro Tips:**
• Don't just follow trends - choose something that aligns with your interests
• Consider the work environment and company culture you prefer
• Think about long-term growth potential and job security
• Factor in geographic location and remote work options

What specific industries or types of work interest you most? I can provide more targeted guidance!`
    } else if (userQuestion.includes("resume") || userQuestion.includes("cv")) {
      response = `Excellent question! Your resume is your first impression - let's make it outstanding:

📝 **Perfect Resume Structure:**

**1. Header (Clean & Professional)**
• Full name (larger font)
• Phone number & professional email
• LinkedIn profile URL
• City, State (no full address needed)
• Portfolio/website (if relevant)

**2. Professional Summary (2-3 lines)**
• Your value proposition in a nutshell
• Key skills and years of experience
• What you're seeking/your career focus

**3. Work Experience (Reverse chronological)**
• Job title, Company, Location, Dates
• 3-5 bullet points per role
• Start each with action verbs (Led, Developed, Increased, Managed)
• Quantify achievements with numbers/percentages

**4. Skills Section**
• Technical skills relevant to the job
• Software/tools you're proficient in
• Languages (if applicable)
• Certifications

**5. Education**
• Degree, School, Graduation year
• Relevant coursework (if recent graduate)
• GPA (only if 3.5+ and recent)

🎯 **Power Tips for Impact:**

**Use Strong Action Verbs:**
• Instead of "Responsible for..." → "Led team of 5..."
• Instead of "Helped with..." → "Collaborated on..."
• Instead of "Worked on..." → "Developed and implemented..."

**Quantify Everything:**
• "Increased sales by 25% in 6 months"
• "Managed budget of $50K"
• "Reduced processing time by 30%"
• "Led team of 8 developers"

**Tailor for Each Job:**
• Use keywords from the job description
• Highlight most relevant experience first
• Adjust skills section to match requirements

Would you like me to help you optimize a specific section or provide industry-specific resume tips?`
    } else if (userQuestion.includes("interview") || userQuestion.includes("prepare")) {
      response = `Perfect timing! Interview preparation is your key to success. Here's your complete guide:

🎯 **Essential Interview Questions & How to Ace Them:**

**"Tell me about yourself" (The 2-Minute Pitch)**
Structure: Present → Past → Future
• Present: Current role/situation
• Past: Relevant experience and achievements
• Future: Why you want this role

**"Why do you want this job?"**
• Research the company thoroughly (mission, values, recent news)
• Connect your skills to their specific needs
• Show genuine enthusiasm for the role and growth opportunities

**"What are your strengths?"**
• Choose 2-3 strengths relevant to the job
• Provide specific examples with measurable results
• Connect them to how you'll add value in this role

**"What's your biggest weakness?"**
• Choose a real weakness (not "I work too hard")
• Explain steps you're taking to improve
• Show self-awareness and growth mindset

🌟 **Behavioral Questions (Use STAR Method):**
• **Situation**: Set the context and background
• **Task**: Explain your specific responsibility
• **Action**: Describe what you did (focus on YOUR actions)
• **Result**: Share the measurable outcome

📋 **Day-of-Interview Success Strategy:**

**Before the Interview:**
• Research the company, role, and interviewer (LinkedIn)
• Prepare 5-7 thoughtful questions to ask them
• Practice your answers out loud
• Plan your route and arrive 10-15 minutes early

**What to Bring:**
• Multiple copies of your resume
• Notepad and pen
• Portfolio/work samples (if relevant)
• List of references
• Questions for them

❓ **Smart Questions to Ask Them:**
• "What does success look like in this role after 6 months?"
• "What are the biggest challenges facing the team right now?"
• "How do you support professional development and growth?"
• "What do you enjoy most about working here?"

What type of interview are you preparing for? I can provide more specific guidance based on the industry or role!`
    } else if (userQuestion.includes("skills") || userQuestion.includes("learn")) {
      response = `Excellent question! Developing the right skills is crucial for career advancement. Here's what's in high demand:

🔥 **Most In-Demand Skills 2024:**

**Technical Skills (High ROI):**

**Programming & Development**
• Python: Data science, AI, web development
• JavaScript: Web development, full-stack
• SQL: Data analysis, database management
• Cloud Computing: AWS, Azure, Google Cloud
• Average salary boost: 20-40%

**Data & Analytics**
• Data Analysis: Excel, Tableau, Power BI
• Machine Learning: TensorFlow, PyTorch
• Statistical Analysis: R, Python, SPSS
• Data Visualization: Tableau, D3.js
• Growing field: 25% job growth expected

**Digital Marketing**
• SEO/SEM: Google Analytics, SEMrush
• Social Media Marketing: Facebook Ads, LinkedIn
• Content Marketing: Copywriting, Strategy
• Email Marketing: Mailchimp, HubSpot
• High demand across all industries

💡 **Soft Skills (Equally Important):**

**Communication**
• Public speaking and presentation
• Written communication
• Active listening
• Cross-cultural communication
• Essential for leadership roles

**Problem-Solving**
• Critical thinking and analysis
• Creative solution development
• Decision-making under pressure
• Process improvement
• Valued in every industry

📚 **Best Learning Resources:**

**Free Options:**
• **Coursera**: University courses, financial aid available
• **edX**: MIT, Harvard courses
• **freeCodeCamp**: Programming bootcamp
• **Khan Academy**: Fundamentals
• **YouTube**: Tutorials and deep dives

**Paid Platforms (Worth the Investment):**
• **Udemy**: Practical, project-based courses ($10-50)
• **LinkedIn Learning**: Professional skills ($30/month)
• **Pluralsight**: Tech skills ($30/month)

💰 **Skills with Highest Salary Impact:**
• Cloud Computing: +$15K-30K
• Data Science: +$20K-40K
• Cybersecurity: +$10K-25K
• Project Management: +$10K-20K
• Digital Marketing: +$8K-18K

What specific skills are you most interested in developing? I can create a personalized learning roadmap for you!`
    } else {
      response = `Hello! I'm your Smart Career Guidance Assistant, and I'm here to help you succeed in your professional journey! 🚀

I can provide expert advice on:

🎯 **Career Planning & Development:**
• Career path exploration and recommendations
• Industry insights and job market trends  
• Skills gap analysis and development planning
• Career transition strategies and pivots

💼 **Job Search & Applications:**
• Resume optimization and formatting
• LinkedIn profile enhancement
• Cover letter writing strategies
• Job search techniques and networking

🎤 **Interview & Negotiation:**
• Interview preparation and practice questions
• Behavioral interview techniques (STAR method)
• Salary negotiation strategies
• Follow-up best practices

📈 **Professional Growth:**
• Skill development recommendations
• Learning resources and certifications
• Leadership and soft skills development
• Work-life balance strategies

💡 **Quick Start Questions You Can Ask:**
• "What career path should I choose based on my interests?"
• "How can I improve my resume to get more interviews?"
• "What skills are most in-demand in [your industry]?"
• "How should I prepare for an upcoming interview?"
• "What are the current job market trends?"
• "How can I transition from [current role] to [desired role]?"

The more specific you are about your situation, experience level, and goals, the more personalized and helpful my advice will be!

What would you like to explore first? 🌟`
    }

    return new Response(
      JSON.stringify({
        message: response,
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
    console.error("Alternative API Error:", error)
    return new Response(
      JSON.stringify({
        message:
          "I'm here to help with your career questions! Please try asking about career paths, resume tips, interview preparation, or skill development.",
        success: true,
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
