'use client';

import Image from 'next/image';
import { Linkedin, Github, Twitter } from 'lucide-react';

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
  return (
    <div className="group">
      {/* Image */}
      <div className="relative h-72 overflow-hidden rounded-xl mb-4 bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm font-medium text-primary mb-2">{role}</p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{bio}</p>

      {/* Social Links */}
      {social && (
        <div className="flex gap-2">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
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
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
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
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
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
