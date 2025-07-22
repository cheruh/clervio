'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former AI researcher with a passion for understanding human behavior through digital interactions.',
    imageSrc: '/testimonial-1.svg'
  },
  {
    name: 'Maria Chen',
    role: 'CTO',
    bio: 'Machine learning expert specializing in behavioral pattern recognition and predictive analytics.',
    imageSrc: '/testimonial-2.svg'
  },
  {
    name: 'David Smith',
    role: 'Head of Product',
    bio: 'UX specialist with 10+ years experience in creating intuitive digital experiences.',
    imageSrc: '/testimonial-3.svg'
  },
]

export default function AboutPage() {
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Clervio</h1>
          
          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Clervio, we believe that understanding human behavior is the key to creating better digital experiences. Our mission is to help websites and applications understand not just what users do, but why they do it.
            </p>
            <p className="mb-4">
              We&#39;re building a behavioral intelligence platform that goes beyond traditional analytics by measuring the depth of human interaction — capturing the cognitive, emotional, and behavioral signals that reveal true user intent and experience.
            </p>
            <p>
              By providing these deeper insights, we empower businesses to create more intuitive, responsive, and human-centered digital products that truly meet user needs.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Clervio was founded in 2023 by a team of AI researchers, UX specialists, and behavioral scientists who saw a gap in how digital interactions were being measured and understood.
            </p>
            <p className="mb-4">
              While working on various digital products, we noticed that traditional analytics tools were great at telling us what users did, but terrible at explaining why. This missing context often led to misinterpretations and suboptimal design decisions.
            </p>
            <p>
              We set out to build a solution that could capture the subtle behavioral signals that reveal user intent, emotional state, and cognitive processes. After months of research and development, Clervio was born — a platform designed to measure human depth, not just digital actions.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-lg shadow-sm border overflow-hidden"
              >
                <div className="relative h-48 w-full bg-muted flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg shadow-sm border p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-6">
              We&#39;re always looking for talented individuals who are passionate about understanding human behavior and creating better digital experiences.
            </p>
            <Button disabled>View Open Positions</Button>
          </div>
        </div>
      </div>
    </div>
  )
}