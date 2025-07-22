'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovative Teams</h2>
          <p className="text-xl text-foreground/70">
            See how Clervio is transforming user experience across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TestimonialCard 
            quote="Clervio helped us identify cognitive friction points in our learning platform that we never knew existed. Student engagement has improved by 32%." 
            author="Sarah Johnson"
            role="Product Director, EduLearn"
            image="/testimonial-1.svg"
            delay={0.1}
          />
          
          <TestimonialCard 
            quote="The emotional intelligence layer that Clervio adds to our analytics has been game-changing for our mental wellness app. We now understand user needs at a deeper level." 
            author="Michael Chen"
            role="CTO, MindfulMe"
            image="/testimonial-2.svg"
            delay={0.2}
          />
          
          <TestimonialCard 
            quote="We reduced cart abandonment by 24% after implementing Clervio's decision fatigue detection. The ROI has been incredible for our ecommerce platform." 
            author="Jessica Williams"
            role="Head of UX, ShopSmart"
            image="/testimonial-3.svg"
            delay={0.3}
          />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-70">
          <div className="text-2xl font-bold">EduLearn</div>
          <div className="text-2xl font-bold">MindfulMe</div>
          <div className="text-2xl font-bold">ShopSmart</div>
          <div className="text-2xl font-bold">ContentPlus</div>
          <div className="text-2xl font-bold">TechFlow</div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, role, image, delay }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4">
        {/* Quote icon */}
        <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <blockquote className="text-foreground/80 mb-6">
        {quote}
      </blockquote>
      
      <div className="flex items-center gap-3">
        <Image 
          src={image} 
          alt={author}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-foreground/60">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;