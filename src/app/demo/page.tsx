'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function DemoPage() {
  const [logs, setLogs] = useState<string[]>([])
  const [isSDKLoaded, setIsSDKLoaded] = useState(false)

  useEffect(() => {
    // Override console.log to capture SDK logs
    const originalConsoleLog = console.log
    console.log = function(...args) {
      originalConsoleLog.apply(console, args)
      if (args[0]?.toString().includes('Clervio SDK')) {
        setLogs(prev => [...prev, args.join(' ')].slice(-10)) // Keep only last 10 logs
      }
    }

    // Load the Clervio SDK
    const script = document.createElement('script')
    script.src = '/clervio-sdk.js'
    script.async = true
    script.onload = () => {
      setIsSDKLoaded(true)
      // Initialize the SDK
      if (window.Clervio) {
        window.Clervio.init('demo-api-key-123')
      }
    }
    document.body.appendChild(script)

    return () => {
      // Restore original console.log
      console.log = originalConsoleLog
      // Remove script
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-6">Clervio SDK Demo</h1>
          
          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <p className="mb-4">
              This demo page has the Clervio SDK installed. The SDK tracks various user behaviors:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Mouse movements and clicks</li>
              <li>Scroll behavior</li>
              <li>Page visibility changes</li>
              <li>Time spent on elements</li>
            </ul>
            <p>
              Try interacting with this page and watch the live logs below to see the SDK in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Interactive Elements</h2>
              <p className="mb-4">Click on buttons, scroll the page, and move your mouse around to generate events.</p>
              
              <div className="space-y-4">
                <Button className="w-full" id="primary-button">
                  Primary Button
                </Button>
                <Button variant="outline" className="w-full" id="secondary-button">
                  Secondary Button
                </Button>
                <div className="h-32 bg-secondary/30 rounded-md flex items-center justify-center cursor-pointer" id="interactive-area">
                  Hover and click in this area
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Live SDK Logs</h2>
              <div className="bg-muted p-4 rounded-md h-64 overflow-y-auto font-mono text-sm">
                {isSDKLoaded ? (
                  logs.length > 0 ? (
                    <ul className="space-y-2">
                      {logs.map((log, index) => (
                        <li key={index} className="border-b border-border/50 pb-2">
                          {log}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">Interact with the page to see logs...</p>
                  )
                ) : (
                  <p className="text-muted-foreground">Loading SDK...</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Implementation</h2>
            <p className="mb-4">Add Clervio to your website with just a few lines of code:</p>
            
            <div className="bg-muted p-4 rounded-md overflow-x-auto mb-6">
              <pre className="text-sm">
                <code>{`<!-- Add this to your HTML -->
<script src="https://cdn.clervio.com/sdk.js"></script>
<script>
  // Initialize Clervio with your API key
  Clervio.init('your-api-key');
</script>`}</code>
              </pre>
            </div>
            
            <p className="mb-4">Or install via npm:</p>
            
            <div className="bg-muted p-4 rounded-md overflow-x-auto mb-6">
              <pre className="text-sm">
                <code>{`// Install the package
npm install @clervio/sdk

// In your application
import Clervio from '@clervio/sdk';
Clervio.init('your-api-key');`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Add TypeScript interface for the global window object
declare global {
  interface Window {
    Clervio?: {
      init: (apiKey: string) => void;
    };
  }
}