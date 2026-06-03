'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Code2, Users, Sparkles } from 'lucide-react';

const VALUES = [
  { icon: Target, label: 'Result-Driven', color: '#8B5CF6' },
  { icon: Heart, label: 'Client-First', color: '#EF4444' },
  { icon: Code2, label: 'Quality Code', color: '#06B6D4' },
  { icon: Users, label: 'Team Expertise', color: '#10B981' },
  { icon: Sparkles, label: 'Innovation', color: '#F59E0B' },
  { icon: Eye, label: 'Transparency', color: '#EC4899' },
];

const EXPERTISE = [
  { label: 'Frontend Development', pct: 95 },
  { label: 'Backend Engineering', pct: 92 },
  { label: 'Mobile Development', pct: 88 },
  { label: 'AI & ML Integration', pct: 85 },
  { label: 'UI/UX Design', pct: 90 },
  { label: 'DevOps & Cloud', pct: 82 },
];

export function AboutSection() {
  return (
    <section id="about" style={{ background: '#070B14', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>About Us</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Built to{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build Your Business</span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

          {/* Left: Story */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            {/* Mission */}
            <div style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #8B5CF6, #06B6D4)' }} />
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#8B5CF6', marginBottom: '0.875rem' }}>🎯 Our Mission</h3>
              <p style={{ color: '#CBD5E1', lineHeight: 1.75, fontSize: '0.95rem' }}>
                To empower Indian businesses with world-class digital solutions that drive real growth. We believe every business — whether a local clinic or a growing startup — deserves enterprise-quality software without enterprise-level complexity.
              </p>
            </div>

            {/* Vision */}
            <div style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #06B6D4, #10B981)' }} />
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#06B6D4', marginBottom: '0.875rem' }}>🚀 Our Vision</h3>
              <p style={{ color: '#CBD5E1', lineHeight: 1.75, fontSize: '0.95rem' }}>
                To become India&apos;s most trusted software partner for SMEs and startups by delivering solutions that combine cutting-edge AI, thoughtful design, and scalable engineering — turning digital transformation from a luxury into an accessible advantage.
              </p>
            </div>

            {/* Values */}
            <div style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>💎 Our Values</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {VALUES.map(({ icon: Icon, label, color }) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '0.875rem', borderRadius: '0.875rem', background: `${color}0f`, border: `1px solid ${color}20`, textAlign: 'center' }}>
                    <Icon size={20} color={color} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#CBD5E1' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Expertise bars */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: '1.75rem' }}>Technical Expertise</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {EXPERTISE.map((e, i) => (
                  <div key={e.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 500 }}>{e.label}</span>
                      <span style={{ fontSize: '0.875rem', color: '#8B5CF6', fontWeight: 700 }}>{e.pct}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${e.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        style={{ height: '100%', borderRadius: '9999px', background: `linear-gradient(90deg, #8B5CF6, #06B6D4)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team snapshot */}
            <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(6,182,212,0.08))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '1.25rem', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍💻</div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.375rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem' }}>A Team of Digital Craftsmen</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Our team combines full-stack engineers, AI specialists, and UI/UX designers who are passionate about building products that work beautifully and perform exceptionally.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[{ n: '5+', l: 'Engineers' }, { n: '3+', l: 'Designers' }, { n: '2+', l: 'AI Experts' }].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
