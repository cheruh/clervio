'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Behavioral Intelligence in Web Applications',
    excerpt: 'Learn how behavioral intelligence can transform your understanding of user interactions and improve your web application.',
    date: 'June 15, 2023',
    author: 'Alex Johnson',
    category: 'Product',
    imageSrc: '/testimonial-1.svg'
  },
  {
    id: 2,
    title: 'The Science Behind Mouse Movement Analysis',
    excerpt: 'Discover how analyzing mouse movements can reveal user intent, emotional state, and cognitive processes.',
    date: 'July 22, 2023',
    author: 'Maria Chen',
    category: 'Research',
    imageSrc: '/testimonial-2.svg'
  },
  {
    id: 3,
    title: 'Improving Conversion Rates with Behavioral Analytics',
    excerpt: 'Case studies showing how companies have used behavioral analytics to significantly improve their conversion rates.',
    date: 'August 10, 2023',
    author: 'David Smith',
    category: 'Case Study',
    imageSrc: '/testimonial-3.svg'
  },
]

export default function BlogPage() {
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
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-2">Clervio Blog</h1>
          <p className="text-muted-foreground mb-8">Insights on behavioral intelligence, user experience, and web analytics</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-sm border overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 w-full bg-muted">
                  <Image 
                    src={post.imageSrc} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-2">
                        <span className="text-xs font-medium">{post.author.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="text-sm">{post.author}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <Button variant="ghost" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">More Articles Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re working on more insightful articles about behavioral intelligence and its applications.
            Stay tuned for regular updates!
            </p>
            <Button disabled>Subscribe to Updates</Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}