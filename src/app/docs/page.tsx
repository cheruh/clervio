'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DocsPage() {
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
          <h1 className="text-3xl font-bold mb-6">Clervio Documentation</h1>
          
          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <p className="mb-4">
              Welcome to Clervio's documentation. This guide will help you integrate and use Clervio's Behavioral Intelligence Platform in your applications.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Installation</h3>
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

          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Core Concepts</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Behavioral Signals</h3>
            <p className="mb-4">
              Clervio tracks various behavioral signals to understand user intent and emotional state:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Mouse Dynamics:</strong> Speed, acceleration, and path of mouse movements</li>
              <li><strong>Scroll Behavior:</strong> Scroll speed, direction, and pauses</li>
              <li><strong>Click Hesitation:</strong> Time between hovering and clicking</li>
              <li><strong>Repeated Views:</strong> Patterns of revisiting the same content</li>
              <li><strong>Idle Time:</strong> Duration of inactivity between interactions</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Data Processing</h3>
            <p className="mb-4">
              Clervio processes behavioral data in real-time using our proprietary algorithms. The data is analyzed to extract meaningful insights about user engagement, frustration, confusion, and decision-making patterns.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">API Reference</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Initialization</h3>
            <div className="bg-muted p-4 rounded-md overflow-x-auto mb-6">
              <pre className="text-sm">
                <code>{`Clervio.init(apiKey, options);

// Parameters:
// - apiKey: Your Clervio API key (required)
// - options: Configuration object (optional)
//   - debug: Enable debug mode (boolean)
//   - trackingConsent: User's consent status (boolean)
//   - endpoint: Custom API endpoint (string)`}</code>
              </pre>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Methods</h3>
            <div className="bg-muted p-4 rounded-md overflow-x-auto mb-6">
              <pre className="text-sm">
                <code>{`// Track custom events
Clervio.track(eventName, properties);

// Identify user
Clervio.identify(userId, traits);

// Update user consent
Clervio.setConsent(hasConsent);

// Get current insights
Clervio.getInsights(callback);`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p className="mb-4">
              Our documentation is currently under development. More detailed guides, tutorials, and API references will be available soon.
            </p>
            <p>
              For now, you can <Link href="/demo" className="text-primary hover:underline">try our demo</Link> to see Clervio in action.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}