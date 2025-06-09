import { Brain, Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-8 w-8 text-blue-600" />
              <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CareerBot AI</h1>
              <p className="text-sm text-gray-600">Smart Career Guidance Assistant</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Powered</span>
            </span>
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </header>
  )
}
