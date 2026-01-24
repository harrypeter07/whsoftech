'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating?: number;
}

export function TestimonialCard({ quote, author, role, company, image, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 leading-relaxed italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}
