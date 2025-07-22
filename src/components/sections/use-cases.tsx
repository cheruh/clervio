'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, BookOpen, HeartPulse, Film } from 'lucide-react';
import { cn } from '@/lib/utils';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored for Multiple Industries</h2>
          <p className="text-xl text-foreground/70">
            Clervio provides specialized insights for different sectors, helping you understand user psychology in context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <UseCaseCard 
            icon={<BookOpen className="h-8 w-8" />}
            title="E-Learning Platforms"
            color="blue"
            features={[
              "Detect confusion, reflection, and breakthrough moments",
              "Provide feedback to tutors or adapt learning pace",
              "Spot mental overload in dense content"
            ]}
            delay={0.1}
          />
          
          <UseCaseCard 
            icon={<HeartPulse className="h-8 w-8" />}
            title="Wellness & Mental Health Apps"
            color="emerald"
            features={[
              "Identify anxiety, stress, and attention fatigue",
              "Offer break suggestions and journal prompts",
              "Provide anonymous behavior feedback to therapists"
            ]}
            delay={0.2}
          />
          
          <UseCaseCard 
            icon={<ShoppingCart className="h-8 w-8" />}
            title="Ecommerce & SaaS"
            color="violet"
            features={[
              "Predict purchase doubt or decision fatigue",
              "Personalize recommendations based on mental state",
              "Improve UX to reduce hidden frustration"
            ]}
            delay={0.3}
          />
          
          <UseCaseCard 
            icon={<Film className="h-8 w-8" />}
            title="Content Platforms"
            color="amber"
            features={[
              "Detect engagement, boredom, and overstimulation",
              "Recommend content based on emotional drift",
              "Ethically reduce compulsive behavior patterns"
            ]}
            delay={0.4}
          />
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline">
            Explore More Use Cases
          </Button>
        </div>
      </div>
    </section>
  );
};

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
  features: string[];
  delay: number;
}

const UseCaseCard = ({ icon, title, color, features, delay }: UseCaseCardProps) => {
  const colorVariants = {
    violet: 'bg-violet-50 border-violet-200 dark:bg-violet-950/20 dark:border-violet-900/30',
    blue: 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-900/30',
    emerald: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/30',
    amber: 'bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/30',
  };

  const iconColorVariants = {
    violet: 'text-violet-600 dark:text-violet-400',
    blue: 'text-blue-600 dark:text-blue-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
    amber: 'text-amber-600 dark:text-amber-400',
  };

  return (
    <motion.div 
      className={cn('rounded-xl p-6 border shadow-sm', colorVariants[color])}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={cn('rounded-full bg-background p-3', iconColorVariants[color])}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>
      
      <ul className="space-y-3 mt-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default UseCases;