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
    <div className="group panel-card overflow-hidden p-0 transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-72 overflow-hidden border-b border-white/10 bg-muted">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="mb-1 text-xl font-semibold text-white">{name}</h3>
        <p className="mb-2 text-sm font-medium text-sky-300">{role}</p>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{bio}</p>

        {social && (
          <div className="flex gap-2 border-t border-white/10 pt-4">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 p-2 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
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
                className="rounded-lg border border-white/15 p-2 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
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
                className="rounded-lg border border-white/15 p-2 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
