'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { SuccessAnimation } from '@/components/ui/success-animation';
import { CTALoadingState } from '@/components/sections/cta-loading-state';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setEmail(''); // Clear the email input
        setIsDialogOpen(true);
      } else {
        console.error('Failed to join waitlist:', data.error);
        // You could add error state handling here
        alert(data.error || 'Failed to join waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/30 to-blue-50/30 dark:from-violet-950/10 dark:to-blue-950/10 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -right-40 w-80 h-80 rounded-full bg-violet-200/30 dark:bg-violet-900/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-200/30 dark:bg-blue-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Understand Your Users Better?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join the waitlist today and be the first to access Clervio when we launch. Discover the power of behavioral intelligence for your website.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Button 
              type="submit" 
              size="lg" 
              className="group whitespace-nowrap"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              {isLoading ? (
                <CTALoadingState />
              ) : (
                <div className="text-center py-6">
                  <SuccessAnimation className="mb-4" />
                  <h3 className="text-xl font-medium">Thanks for Your Interest!</h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-4">We've added you to our waitlist. We'll notify you when Clervio launches.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    className="mx-auto"
                  >
                    Close
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
          
          <p className="text-sm text-foreground/60 mt-4">
            No credit card required. Free tier available at launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;