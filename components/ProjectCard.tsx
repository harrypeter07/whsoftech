'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
  const content = (
    <article className="group card-hover-premium relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-[var(--surface)] shadow-lg transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 md:hover:-translate-y-1 scroll-fade-up">
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/85 via-transparent to-transparent opacity-90" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-semibold text-sky-300">
          {category}
        </div>

        <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-sky-200 hover-text-shift">
          {title}
        </h3>

        <p className="mb-4 line-clamp-2 flex-1 text-sm text-slate-400">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-sky-300">
          View details
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
