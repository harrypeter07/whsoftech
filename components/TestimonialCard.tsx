'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating?: number;
}

export function TestimonialCard({ quote, author, role, company, image, rating = 5 }: TestimonialCardProps) {
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
        ease: 'power2.out',
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <Card ref={cardRef} className="group relative hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden bg-card/50 backdrop-blur-sm">
      {/* Hover background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      <CardContent className="p-6">
        {/* Rating with hover animation */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="fill-primary text-primary group-hover:scale-110 transition-transform duration-300" 
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-foreground mb-6 leading-relaxed italic group-hover:text-foreground/90 transition-colors duration-300">
          "{quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 group-hover:scale-110">
            <Image
              src={image || "/placeholder.svg"}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{author}</p>
            <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{role} at {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
