'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Code2, Users, Sparkles, Rocket, Diamond } from 'lucide-react';

const VALUES = [
  { icon: Target,   label: 'Result-Driven', color: '#3b82f6' },
  { icon: Heart,    label: 'Client-First',  color: '#ef4444' },
  { icon: Code2,    label: 'Quality Code',  color: '#06b6d4' },
  { icon: Users,    label: 'Team Expertise',color: '#10b981' },
  { icon: Sparkles, label: 'Innovation',    color: '#f59e0b' },
  { icon: Eye,      label: 'Transparency',  color: '#ec4899' },
];

const EXPERTISE = [
  { label: 'Frontend Development',   pct: 95 },
  { label: 'Backend Engineering',    pct: 92 },
  { label: 'Mobile Development',     pct: 88 },
  { label: 'AI & ML Integration',    pct: 85 },
  { label: 'UI/UX Design',           pct: 90 },
  { label: 'DevOps & Cloud',         pct: 82 },
];

export function AboutSection() {
  return (
    <section id="about" style={{ background: '#030311', padding: '6rem 0', borderTop: '1px solid rgba(59,130,246,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="s-label">About Us</span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, color: '#e2e8ff',
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            Built to{' '}
            <span className="grad">Build Your Business</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
          >
            {/* Mission card */}
            <div style={{
              background: '#0e0e2a', border: '1px solid rgba(59,130,246,0.1)',
              borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.25rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #3b82f6, #06b6d4)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '0.625rem', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={18} color="#3b82f6" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#3b82f6' }}>Our Mission</h3>
              </div>
              <p style={{ color: '#e2e8ff', lineHeight: 1.75, fontSize: '0.95rem' }}>
                To empower Indian businesses with world-class digital solutions that drive real growth. We believe every business — whether a local clinic or a growing startup — deserves enterprise-quality software without enterprise-level complexity.
              </p>
            </div>

            {/* Vision card */}
            <div style={{
              background: '#0e0e2a', border: '1px solid rgba(59,130,246,0.1)',
              borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.25rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #06b6d4, #10b981)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '0.625rem', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket size={18} color="#06b6d4" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#06b6d4' }}>Our Vision</h3>
              </div>
              <p style={{ color: '#e2e8ff', lineHeight: 1.75, fontSize: '0.95rem' }}>
                To become India&apos;s most trusted software partner for SMEs and startups by delivering solutions that combine cutting-edge AI, thoughtful design, and scalable engineering — turning digital transformation from a luxury into an accessible advantage.
              </p>
            </div>

            {/* Values card */}
            <div style={{
              background: '#0e0e2a', border: '1px solid rgba(59,130,246,0.1)',
              borderRadius: '1.25rem', padding: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '0.625rem', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Diamond size={18} color="#f59e0b" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#e2e8ff' }}>Our Values</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {VALUES.map(({ icon: Icon, label, color }) => (
                  <div key={label} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: '0.5rem', padding: '0.875rem', borderRadius: '0.875rem',
                    background: `${color}0f`, border: `1px solid ${color}20`, textAlign: 'center',
                    transition: 'transform 0.2s, background 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.background = `${color}18`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.background = `${color}0f`; }}
                  >
                    <Icon size={20} color={color} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#e2e8ff' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Expertise bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div style={{
              background: '#0e0e2a', border: '1px solid rgba(59,130,246,0.1)',
              borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.25rem',
            }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#e2e8ff', marginBottom: '1.75rem' }}>Technical Expertise</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {EXPERTISE.map((e, i) => (
                  <div key={e.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', color: '#e2e8ff', fontWeight: 500 }}>{e.label}</span>
                      <span style={{ fontSize: '0.875rem', color: '#60a5fa', fontWeight: 700 }}>{e.pct}%</span>
                    </div>
                    <div style={{ height: '5px', background: 'rgba(59,130,246,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${e.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.1, ease: 'easeOut' }}
                        style={{
                          height: '100%', borderRadius: '9999px',
                          background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team snapshot */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(6,182,212,0.07))',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '1.25rem', padding: '2rem', textAlign: 'center',
            }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 1.25rem',
                background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Users size={28} color="#60a5fa" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: '#e2e8ff', marginBottom: '0.75rem' }}>A Team of Digital Craftsmen</h3>
              <p style={{ color: '#7b8db0', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Our team combines full-stack engineers, AI specialists, and UI/UX designers passionate about building products that work beautifully and perform exceptionally.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[{ n: '5+', l: 'Engineers' }, { n: '3+', l: 'Designers' }, { n: '2+', l: 'AI Experts' }].map(s => (
                  <div key={s.l}>
                    <div style={{
                      fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 800,
                      background: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', color: '#7b8db0' }}>{s.l}</div>
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
