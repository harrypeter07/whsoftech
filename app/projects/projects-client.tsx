'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'FinanceFlow Platform',
    description: 'AI-powered financial management platform serving 50K+ users',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Web',
    tags: ['React', 'Node.js', 'AI', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'RetailPro Mobile App',
    description: 'Native iOS & Android app for retail store management',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 3,
    title: 'DataViz Analytics',
    description: 'Real-time analytics dashboard with ML predictions',
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a49?w=600&h=400&fit=crop',
    category: 'Web',
    tags: ['D3.js', 'Python', 'AWS'],
  },
  {
    id: 4,
    title: 'MedTech AI Assistant',
    description: 'Healthcare AI solution for diagnostic support',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
    category: 'AI',
    tags: ['TensorFlow', 'Python', 'Healthcare'],
  },
  {
    id: 5,
    title: 'Marketplace Design System',
    description: 'Comprehensive design system for e-commerce platform',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'Design',
    tags: ['Figma', 'UI/UX', 'Component Library'],
  },
  {
    id: 6,
    title: 'CloudSync Enterprise',
    description: 'Enterprise file collaboration and sync platform',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'Web',
    tags: ['Next.js', 'AWS', 'WebSocket'],
  },
  {
    id: 7,
    title: 'FitTrack Mobile',
    description: 'Fitness tracking app with wearable integration',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'Health Kit'],
  },
  {
    id: 8,
    title: 'Smart City IoT',
    description: 'IoT platform for smart city infrastructure',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    category: 'AI',
    tags: ['Python', 'IoT', 'ML', 'Real-time'],
  },
  {
    id: 9,
    title: 'E-Learning Platform',
    description: 'Interactive online education platform with video streaming',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop',
    category: 'Web',
    tags: ['Next.js', 'Stripe', 'Video API'],
  },
];

const categories = ['All', 'Web', 'Mobile', 'AI', 'Design'];

export function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-white/10 px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            Portfolio
          </span>
          <h1 className="mb-4 text-balance text-4xl font-bold text-white sm:text-5xl md:text-6xl scroll-fade-up hover-text-shift">
            Our portfolio of{' '}
            <span className="gradient-text">success</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Explore projects across web, mobile, AI, and design — built with clarity and performance.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#071426]/90 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-[#071426]/80">
        <div className="section-shell">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                    : 'border-white/20 bg-white/[0.04] text-slate-200 hover:border-primary/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id.toString()}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                tags={project.tags}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-slate-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050f1c]/60 py-16 md:py-20">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8">
            <div className="card-hover-premium rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-8 scroll-fade-up">
              <p className="mb-2 text-4xl font-bold text-sky-300 md:text-5xl">500+</p>
              <p className="text-slate-400">Projects delivered</p>
            </div>
            <div className="card-hover-premium rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-8 scroll-fade-up">
              <p className="mb-2 text-4xl font-bold text-sky-300 md:text-5xl">99.9%</p>
              <p className="text-slate-400">Client satisfaction</p>
            </div>
            <div className="card-hover-premium rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-8 scroll-fade-up">
              <p className="mb-2 text-4xl font-bold text-sky-300 md:text-5xl">12+</p>
              <p className="text-slate-400">Years of excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="section-shell">
          <div className="premium-gradient rounded-2xl border border-white/20 px-6 py-12 text-center shadow-xl shadow-primary/20 md:px-12 md:py-16">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
              Let&apos;s discuss how we can help you ship faster with a focused engineering partner.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-white/40 bg-white text-primary hover:bg-white/95 btn-magnetic"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
