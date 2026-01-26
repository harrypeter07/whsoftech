'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.from(mobileMenuRef.current, {
        duration: 0.3,
        opacity: 0,
        y: -10,
        ease: 'power2.out',
      });
      gsap.from(mobileMenuRef.current.children, {
        duration: 0.3,
        opacity: 0,
        x: -20,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 border-b border-border backdrop-blur-xl transition-all duration-300 hover:bg-background/90 hover:border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with hover effect */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline group-hover:text-accent transition-colors duration-300">whsofttech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8" ref={navRef}>
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 group"
                style={{ transitionDelay: `${index * 10}ms` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/30"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 hover:shadow-lg transition-all duration-300" onClick={() => setIsOpen(false)}>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
