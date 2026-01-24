'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  href?: string;
}

export function ProjectCard({ title, description, image, category, tags, href }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        rotation: 2,
        ease: 'back.out(1.5)',
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const content = (
    <div ref={cardRef} className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full">
      {/* Image container with parallax effect */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-125 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Shine effect */}
        <div className="absolute -inset-full opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-500 group-hover:animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative p-6 bg-card group-hover:bg-primary/5 transition-colors duration-300">
        {/* Category badge */}
        <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 group-hover:bg-primary/20 group-hover:shadow-sm transition-all duration-300">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          View Details
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
