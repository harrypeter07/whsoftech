'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';

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
    image: 'https://images.unsplash.com/photo-1518611505867-48a0ce7b0b7e?w=600&h=400&fit=crop',
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

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Portfolio of
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Success</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore projects that showcase our expertise across web, mobile, AI, and design.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">500+</p>
              <p className="text-lg text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-lg text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">12+</p>
              <p className="text-lg text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss how we can help you achieve your goals with our proven expertise.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
