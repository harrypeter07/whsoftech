'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const STATS = [
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 16, suffix: '+', label: 'Industries' },
  { value: 40, suffix: '+', label: 'Clients' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
];

const WINS = [
  'Fast, on-time delivery',
  'Full source code ownership',
  'Post-launch support included',
  'Free consultation — no commitment',
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const step = value / (2000 / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= value) { setCount(value); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0f',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        width: '100%',
      }}
    >
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Warm glow — NOT blue, reddish-purple */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-5%', width: '55%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '-10%', width: '45%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>

          {/* Left — text */}
          <div style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '1.5rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 1rem', borderRadius: '99px',
                background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.22)',
                color: '#a78bfa', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', animation: 'dot-blink 2s ease-in-out infinite' }} />
                Software Agency · India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: '-0.03em', color: '#f3f4f6',
                marginBottom: '1.25rem',
              }}
            >
              We Build Software That{' '}
              <span style={{
                background: 'linear-gradient(120deg, #a78bfa, #7c3aed 50%, #0ea5e9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Grows Your Business
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#9ca3af', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '580px' }}
            >
              WHS SoftTech delivers custom websites, mobile apps, AI systems, and business automation for startups, SMEs, and enterprises across India.
            </motion.p>

            {/* Wins */}
            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.25rem' }}
            >
              {WINS.map((w) => (
                <li key={w} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#d1d5db', fontSize: '0.9rem' }}>
                  <CheckCircle size={15} color="#10b981" style={{ flexShrink: 0 }} />
                  {w}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  color: 'white', fontWeight: 700, fontSize: '0.9375rem',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  boxShadow: '0 4px 18px rgba(124,58,237,0.35)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(124,58,237,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(124,58,237,0.35)'; }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                  color: '#d1d5db', fontWeight: 600, fontSize: '0.9375rem',
                  textDecoration: 'none', fontFamily: 'inherit',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'; }}
              >
                <MessageCircle size={16} color="#25D366" /> WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right — Stats card (hidden on mobile, shown md+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
          >
            {STATS.map((s) => (
              <div key={s.label} style={{
                background: 'rgba(19,19,26,0.85)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px', padding: '1.5rem 1.25rem', textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '2.25rem',
                  fontWeight: 800, lineHeight: 1, marginBottom: '0.375rem',
                  background: 'linear-gradient(120deg, #a78bfa, #0ea5e9)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}

            {/* Social proof strip */}
            <div style={{ gridColumn: '1 / -1', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)', borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ color: '#f3f4f6', fontSize: '0.875rem', fontWeight: 600 }}>Trusted by 40+ businesses across India</div>
                <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>Healthcare · Education · E-Commerce · Retail · Corporate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
