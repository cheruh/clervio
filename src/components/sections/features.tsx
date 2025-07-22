'use client';

import { motion } from 'framer-motion';
import { MousePointer, Braces, Clock, Activity, RefreshCw, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Behavioral Intelligence SDK</h2>
          <p className="text-xl text-foreground/70">
            Our lightweight JavaScript tracker captures subtle user signals to infer emotional states and cognitive patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MousePointer />}
            title="Mouse Dynamics"
            description="Captures pauses, jerks, hovering loops, and other subtle mouse movements that indicate cognitive processing."
            color="violet"
            delay={0.1}
          />
          
          <FeatureCard 
            icon={<Activity />}
            title="Scroll Behavior"
            description="Analyzes scroll velocity, pauses, and reversals to understand content engagement and information processing."
            color="blue"
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<Clock />}
            title="Click Hesitation"
            description="Measures the time taken between page load and click, revealing decision confidence and cognitive load."
            color="emerald"
            delay={0.3}
          />
          
          <FeatureCard 
            icon={<RefreshCw />}
            title="Repeated Views"
            description="Identifies emotional uncertainty and decision loops when users revisit the same content multiple times."
            color="amber"
            delay={0.4}
          />
          
          <FeatureCard 
            icon={<Coffee />}
            title="Idle Time"
            description="Distinguishes between cognitive pause, distraction, or reflection based on contextual patterns."
            color="rose"
            delay={0.5}
          />
          
          <FeatureCard 
            icon={<Braces />}
            title="Developer Friendly"
            description="Easy integration with a simple JavaScript snippet or NPM package for React and Vanilla JS applications."
            color="indigo"
            delay={0.6}
          />
        </div>

        <div className="mt-16 bg-background rounded-xl p-6 border shadow-sm max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">Integration Example</h3>
          <pre className="bg-secondary/50 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`// Add Clervio to your website with one line
<script src="https://cdn.clervio.io/tracker.js" async></script>

// Or use our NPM package
npm install clervio-tracker

// Then in your app
import { useClervio } from 'clervio-tracker';

function App() {
  const { trackEvent } = useClervio();
  
  return (
    <button onClick={() => trackEvent('signup_click')}>
      Sign Up
    </button>
  );
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber' | 'rose' | 'indigo';
  delay: number;
}

const FeatureCard = ({ icon, title, description, color, delay }: FeatureCardProps) => {
  const colorVariants = {
    violet: 'bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400',
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
    rose: 'bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400',
    indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400',
  };

  return (
    <motion.div 
      className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={cn('rounded-full w-12 h-12 flex items-center justify-center mb-4', colorVariants[color])}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

export default Features;