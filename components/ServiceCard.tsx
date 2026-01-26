'use client';

import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        delay: delay * 0.1,
        ease: 'power2.out',
      });
    }, cardRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Card
      ref={cardRef}
      className="group relative hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm"
    >
      {/* Gradient background on hover with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover light effect */}
      <div className="absolute -inset-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-primary via-transparent to-accent transition-opacity duration-500 -z-10" />

      <CardContent className="relative z-10 p-6">
        {/* Icon with 3D effect */}
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50 glow-primary">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Hover indicator with animation */}
        <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1">
          Learn more
          <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
