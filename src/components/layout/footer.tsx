import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { AnimatedLogo } from '@/components/ui/animated-logo';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <AnimatedLogo className="inline-block" />
            <p className="mt-4 text-foreground/70 max-w-md">
              Clervio measures human depth, not just digital actions. Our behavioral intelligence platform helps websites understand how users think, feel, and decide.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-foreground/70 hover:text-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-foreground/70 hover:text-foreground transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-foreground/70 hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Clervio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;