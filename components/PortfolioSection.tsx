'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  industry: string;
  tags: string[];
  image: string;
  results: string;
  featured: boolean;
  size: 'large' | 'medium' | 'small';
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: '1.125rem',
        background: '#ffffff',
        border: hovered ? '1px solid #93c5fd' : '1px solid #bfdbfe',
        transition: 'all 0.35s ease', cursor: 'default',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(37,99,235,0.12)' : '0 4px 24px rgba(37,99,235,0.06)',
      }}
    >
      {/* Image area */}
      <div style={{ position: 'relative', height: project.size === 'large' ? '220px' : '160px', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.06))' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              {project.industry === 'Healthcare' ? '🏥' : project.industry === 'Education' ? '🎓' : project.industry === 'E-Commerce' ? '🛒' : project.industry === 'Real Estate' ? '🏠' : project.industry === 'Automobile' ? '🚗' : '🍽'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#4a6fa5', fontWeight: 500 }}>{project.industry}</div>
          </div>
        </div>
        {/* Hover overlay */}
        <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.2 }}
          style={{ position: 'absolute', inset: 0, background: 'rgba(30,58,95,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', borderRadius: '0.625rem', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.35)', color: '#93c5fd', fontSize: '0.875rem', fontWeight: 600 }}>
            <ExternalLink size={15} /> View Case Study
          </div>
        </motion.div>
        {/* Featured badge */}
        {project.featured && (
          <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#2563eb', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.375rem' }}>
        <div style={{ fontSize: '0.7rem', color: '#06b6d4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{project.industry}</div>
        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.625rem', lineHeight: 1.3 }}>{project.title}</h3>
        <p style={{ color: '#4a6fa5', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>{project.description}</p>
        {/* Result */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.875rem', borderRadius: '0.5rem', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700 }}>📈 {project.results}</span>
        </div>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ padding: '0.2rem 0.5rem', borderRadius: '0.3rem', background: 'rgba(37,99,235,0.06)', border: '1px solid #bfdbfe', color: '#4a6fa5', fontSize: '0.65rem', fontWeight: 600 }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/admin/projects').then((r) => r.json()).then(setProjects).catch(() => {
      setProjects([
        { id: '1', title: 'HealthSync — Clinic Management', description: 'Comprehensive clinic management with appointment booking, patient records, and billing.', industry: 'Healthcare', tags: ['Next.js', 'Node.js', 'PostgreSQL'], image: '', results: '300% more appointments', featured: true, size: 'large' },
        { id: '2', title: 'EduLearn — LMS Portal', description: 'Full LMS with live classes, recorded lectures, and student tracking.', industry: 'Education', tags: ['React', 'Django', 'AWS'], image: '', results: '5,000+ students onboarded', featured: true, size: 'medium' },
        { id: '3', title: 'ShopMax — E-Commerce', description: 'Custom e-commerce with multi-vendor support and analytics.', industry: 'E-Commerce', tags: ['Next.js', 'Stripe', 'Redis'], image: '', results: '2x revenue in 6 months', featured: true, size: 'medium' },
        { id: '4', title: 'PropVista — Real Estate', description: 'Real estate platform with listings and virtual tours.', industry: 'Real Estate', tags: ['React', 'MongoDB', 'Mapbox'], image: '', results: '150% more leads', featured: false, size: 'small' },
        { id: '5', title: 'AutoAI — AI Chatbot', description: 'AI chatbot for automobile dealerships that qualifies leads 24/7.', industry: 'Automobile', tags: ['Python', 'OpenAI', 'FastAPI'], image: '', results: '60% less support costs', featured: false, size: 'small' },
        { id: '6', title: 'RestaurantPro — POS', description: 'Restaurant management with online ordering and kitchen display.', industry: 'Restaurant', tags: ['React Native', 'Firebase'], image: '', results: '40% more online orders', featured: false, size: 'small' },
      ]);
    });
  }, []);

  return (
    <section id="portfolio" style={{ background: '#f0f7ff', padding: '6rem 0', borderTop: '1px solid #bfdbfe' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label">Our Portfolio</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1e3a5f', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Work That Speaks{' '}
            <span className="grad">For Itself</span>
          </h2>
          <p style={{ color: '#4a6fa5', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            Real projects, real results. See how we&apos;ve helped businesses across industries transform their digital presence.
          </p>
        </motion.div>

        <div className="portfolio-grid" style={{ marginBottom: '3rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(37,99,235,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.35)'; }}>
            Start Your Project <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
