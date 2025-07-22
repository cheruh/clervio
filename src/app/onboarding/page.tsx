'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles, Brain, Target, Zap, Users, BarChart3, Shield, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import { AnimatedLogo } from '@/components/ui/animated-logo'
import { useRouter } from 'next/navigation'

const steps = [
  {
    id: 1,
    title: 'Welcome to Clervio',
    subtitle: 'The future of user behavior analytics',
    icon: Sparkles,
    content: (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
          <Brain className="w-12 h-12 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Understand Your Users Like Never Before</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Clervio uses advanced AI to analyze user behavior patterns, providing insights that help you build better products and experiences.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-card border rounded-lg p-4">
            <Target className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold mb-1">Precision Analytics</h4>
            <p className="text-sm text-muted-foreground">Track every interaction with pixel-perfect accuracy</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <Zap className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold mb-1">Real-time Insights</h4>
            <p className="text-sm text-muted-foreground">Get instant feedback on user behavior</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Your Account Setup',
    subtitle: 'Let&apos;s personalize your experience',
    icon: Users,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Account Created Successfully!</h3>
          <p className="text-muted-foreground">Your Clervio account is ready to go</p>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
          <h4 className="font-semibold mb-4 flex items-center">
            <Shield className="w-5 h-5 text-primary mr-2" />
            What's Next?
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Email verification sent to your inbox</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Account security configured</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Ready to start tracking user behavior</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Early Access',
    subtitle: 'You&apos;re among the first to experience Clervio',
    icon: Rocket,
    content: (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-full flex items-center justify-center">
          <Rocket className="w-12 h-12 text-purple-500" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Welcome to the Future</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            You&apos;re now part of an exclusive group of early adopters who will shape the future of user analytics.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
          <h4 className="font-semibold mb-4 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-purple-500 mr-2" />
            Coming Soon
          </h4>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <span>Advanced Dashboard</span>
              <span className="text-purple-500 font-medium">Q1 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <span>AI-Powered Insights</span>
              <span className="text-purple-500 font-medium">Q1 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <span>Team Collaboration</span>
              <span className="text-purple-500 font-medium">Q2 2024</span>
            </div>
          </div>
        </div>
        
        <div className="bg-card border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Pro Tip:</strong> Check your email for exclusive updates and be the first to know when new features launch!
          </p>
        </div>
      </div>
    )
  }
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const { user, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }, [user, router])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handleComplete = () => {
    // For now, redirect to home since dashboard isn't built
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-card border border-border/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            You&apos;re All Set!
          </h1>
          <p className="text-muted-foreground mb-8">
            Welcome to Clervio, {user.user_metadata?.full_name || user.email}. Your journey into advanced user analytics begins now.
          </p>
          <div className="space-y-3">
            <Button onClick={handleComplete} className="w-full">
              Explore Clervio
            </Button>
            <button
              onClick={signOut}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  const step = steps[currentStep]
  const Icon = step.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <AnimatedLogo />
          <div className="mt-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
        >
          {/* Step Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {step.title}
            </h1>
            <p className="text-muted-foreground">{step.subtitle}</p>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {step.content}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={signOut}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign Out
              </button>
            </div>
            <Button onClick={nextStep} className="flex items-center space-x-2">
              <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* User Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-sm text-muted-foreground"
        >
          <p>
            Signed in as <strong>{user.user_metadata?.full_name || user.email}</strong>
          </p>
        </motion.div>
      </div>
    </div>
  )
}