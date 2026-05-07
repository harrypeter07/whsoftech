'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Brain,
  Globe,
  Smartphone,
  Palette,
  Zap,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/lib/useReducedMotion';

type ServiceItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    id: 'software',
    icon: Code2,
    title: 'Software Development',
    shortDesc:
      'Custom enterprise solutions built for scale, security, and maintainability.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI & Machine Learning',
    shortDesc:
      'Practical AI—from automation to intelligent features grounded in your data.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Applications',
    shortDesc: 'Fast, accessible web apps with modern UX and solid architecture.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Applications',
    shortDesc: 'Native and cross-platform apps tailored to your product vision.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'Clear interfaces and design systems that improve conversion.',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Business Automation',
    shortDesc: 'Streamline operations with integrations and workflow automation.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
];

function ServiceModal({
  service,
  reducedMotion,
  onClose,
}: {
  service: ServiceItem;
  reducedMotion: boolean;
  onClose: () => void;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: reducedMotion ? 0 : 0.25 }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-[#0c1e36] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-xl border border-white/20 bg-[#071426]/90 p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-video w-full border-b border-white/10">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e36] via-transparent to-transparent" />
        </div>

        <div className="max-h-[45vh] overflow-y-auto p-6 md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-primary/20">
              <Icon className="h-6 w-6 text-sky-300" />
            </div>
            <h2 id="service-modal-title" className="text-2xl font-bold text-white">
              {service.title}
            </h2>
          </div>
          <p className="mb-6 text-slate-300">{service.shortDesc}</p>
          <ul className="mb-8 space-y-2 text-sm text-slate-400">
            {['Discovery & roadmap', 'Iterative delivery', 'QA & launch support'].map(
              (item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  {item}
                </li>
              ),
            )}
          </ul>
          <Button asChild className="rounded-xl">
            <Link href="/contact" onClick={onClose}>
              Discuss this service
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ParallaxServices() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-b border-white/10 pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(37,99,235,0.2),transparent)]" />

      <div className="section-shell relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            What we do
          </span>
          <h1 className="mb-4 text-balance text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Services built for{' '}
            <span className="gradient-text">real outcomes</span>
          </h1>
          <p className="text-lg text-slate-400">
            Explore our core offerings — tap a card for a quick overview, or jump to a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                id={service.id}
                onClick={() => setSelected(service)}
                className="group text-left transition-[transform,box-shadow] duration-300 md:hover:-translate-y-0.5"
              >
                <div className="panel-card overflow-hidden transition-[border-color] duration-300 hover:border-primary/35">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#071426]/75 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-sky-300" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="mb-2 text-lg font-bold text-white">{service.title}</h2>
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
                      {service.shortDesc}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-sky-300">
                      Learn more →
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/contact">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
            <Link href="/projects">See portfolio</Link>
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <ServiceModal
            key={selected.id}
            service={selected}
            reducedMotion={reducedMotion}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
