'use client';

import { motion } from 'framer-motion';
// Note: Install framer-motion package by running:
// npm install framer-motion
// or
// yarn add framer-motion
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/70">
            Choose the plan that fits your needs. All plans include our core behavioral intelligence features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Free"
            price="$0"
            description="Perfect for trying out Clervio"
            features={[
              { included: true, text: "1 website" },
              { included: true, text: "500 sessions/month" },
              { included: true, text: "Basic insights" },
              { included: true, text: "7-day data retention" },
              { included: false, text: "Session replays" },
              { included: false, text: "Cognitive scores" },
              { included: false, text: "API access" },
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
            delay={0.1}
          />
          
          <PricingCard 
            title="Pro"
            price="$19"
            period="per month"
            description="For growing websites"
            features={[
              { included: true, text: "3 websites" },
              { included: true, text: "5,000 sessions/month" },
              { included: true, text: "Advanced insights" },
              { included: true, text: "30-day data retention" },
              { included: true, text: "Session replays" },
              { included: true, text: "Cognitive scores" },
              { included: false, text: "API access" },
            ]}
            buttonText="Subscribe Now"
            buttonVariant="default"
            featured={true}
            delay={0.2}
          />
          
          <PricingCard 
            title="Business"
            price="$99"
            period="per month"
            description="For serious analytics needs"
            features={[
              { included: true, text: "Unlimited websites" },
              { included: true, text: "50,000 sessions/month" },
              { included: true, text: "All insights & features" },
              { included: true, text: "90-day data retention" },
              { included: true, text: "Session replays" },
              { included: true, text: "Cognitive scores" },
              { included: true, text: "API access" },
            ]}
            buttonText="Contact Sales"
            buttonVariant="outline"
            delay={0.3}
          />
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
          <p className="text-foreground/70 mb-6">
            Need custom features, on-premise deployment, or HIPAA compliance? Contact our sales team for a tailored solution.
          </p>
          <Button size="lg" variant="outline">
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: { included: boolean; text: string }[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  featured?: boolean;
  delay: number;
}

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonText, 
  buttonVariant,
  featured = false,
  delay 
}: PricingCardProps) => {
  return (
    <motion.div 
      className={cn(
        'rounded-xl p-6 border shadow-sm relative',
        featured ? 'border-primary/50 shadow-md md:scale-105 bg-background' : 'bg-background'
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-3xl font-bold">
          {price}
          {period && <span className="text-base font-normal text-foreground/60">/{period}</span>}
        </div>
        <p className="text-foreground/70 mt-2">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {feature.included ? (
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? 'text-foreground/80' : 'text-foreground/50'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Button className="w-full" variant={buttonVariant}>
        {buttonText}
      </Button>
    </motion.div>
  );
};

export default Pricing;