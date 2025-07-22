'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, Brain, LineChart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/20 to-transparent dark:from-violet-950/10 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-violet-200/30 dark:bg-violet-900/10 blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 rounded-full bg-blue-200/30 dark:bg-blue-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Introducing Clervio
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Measure Human Depth, <br />Not Just Digital Actions
          </motion.h1>
          
          <motion.p 
            className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Clervio is a behavioral intelligence platform that helps websites understand how users think, feel, and decide, not just what they click.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="group">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="text-center py-4">
                  <h3 className="text-lg font-medium">Join Our Waitlist</h3>
                  <p className="text-sm text-muted-foreground mt-2">Be the first to access Clervio when we launch.</p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button>Join Waitlist</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </motion.div>
        </div>
        
        {/* Feature highlights */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FeatureCard 
            icon={<Brain className="h-6 w-6 text-violet-600" />}
            title="Cognitive Insights"
            description="Understand user thinking patterns and decision processes."
          />
          
          <FeatureCard 
            icon={<Sparkles className="h-6 w-6 text-blue-600" />}
            title="Emotional Intelligence"
            description="Detect emotional states and responses to your content."
          />
          
          <FeatureCard 
            icon={<LineChart className="h-6 w-6 text-emerald-600" />}
            title="Behavioral Analytics"
            description="Track subtle signals that reveal true user engagement."
          />
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-background/50 backdrop-blur-sm border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default Hero;