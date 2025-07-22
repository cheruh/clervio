'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import { useAuth } from '@/contexts/auth-context';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AnimatedLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="mr-2">
            <ThemeToggle />
          </div>
          
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-secondary/50 rounded-lg">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="flex items-center space-x-1"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">Log In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t mt-4"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </div>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <div className="flex justify-center pb-3">
                <ThemeToggle />
              </div>
              
              {loading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                </div>
              ) : user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-secondary/50 rounded-lg">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={signOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="outline" className="w-full">Log In</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const NavLinks = ({ mobile, setIsMobileMenuOpen }: NavLinksProps) => {
  const links = [
    { href: '#features', label: 'Features' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/demo', label: 'Demo' },
    { href: '/docs', label: 'Documentation' },
  ];

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        'text-foreground/80 hover:text-foreground transition-colors',
        mobile ? 'block py-2 text-lg' : ''
      )}
      onClick={() => mobile && setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      {link.label}
    </Link>
  ));
};

export default Header;