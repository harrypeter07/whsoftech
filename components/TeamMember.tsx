'use client';

import Image from 'next/image';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export function TeamMember({ name, role, bio, image, social }: TeamMemberProps) {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!memberRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(memberRef.current, {
        scrollTrigger: {
          trigger: memberRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
      });
    }, memberRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={memberRef} className="group">
      {/* Image */}
      <div className="relative h-72 overflow-hidden rounded-xl mb-4 bg-muted border-2 border-transparent group-hover:border-primary transition-all duration-300">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
      <p className="text-sm font-medium text-primary mb-2 group-hover:text-accent transition-colors duration-300">{role}</p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{bio}</p>

      {/* Social Links */}
      {social && (
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
