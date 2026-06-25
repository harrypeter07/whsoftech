'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { ParticleSphere } from './ParticleSphere';

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 16, suffix: '+', label: 'Industries Served' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
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
        const step = value / (1800 / 16);
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
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#07070f',
        paddingTop: '7rem',
        paddingBottom: '3.5rem',
        width: '100%',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Ambient glow — purple left */}
      <div style={{
        position: 'absolute', top: '-15%', left: '-8%',
        width: '55%', height: '85%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.11) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Saffron glow — right */}
      <div style={{
        position: 'absolute', top: '10%', right: '-15%',
        width: '55%', height: '75%',
        background: 'radial-gradient(ellipse, rgba(255,122,47,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Two column hero grid ── */}
        <div className="hero-grid">

          {/* LEFT — text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 1rem', borderRadius: '99px',
                background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)',
                color: '#a78bfa', fontSize: '0.775rem', fontWeight: 600, letterSpacing: '0.07em',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa',
                  animation: 'dot-blink 2s ease-in-out infinite',
                }} />
                Software Agency · India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.9rem)',
                fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.03em', color: '#f1f5f9',
                marginBottom: '1.25rem',
              }}
            >
              We Build Software
              <br />
              <span style={{
                background: 'linear-gradient(120deg, #a78bfa 0%, #7c3aed 40%, #ff7a2f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                That Grows Businesses
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8,
                marginBottom: '1.75rem', maxWidth: '520px',
              }}
            >
              WHS SoftTech delivers custom websites, mobile apps, AI systems, and business
              automation for startups, SMEs, and enterprises across India.
            </motion.p>

            {/* Wins */}
            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}
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
                  padding: '0.9rem 2rem', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  color: 'white', fontWeight: 700, fontSize: '0.9375rem',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  boxShadow: '0 4px 20px rgba(124,58,237,0.35)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 12px 35px rgba(124,58,237,0.55)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 20px rgba(124,58,237,0.35)';
                }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.9rem 1.75rem', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#d1d5db', fontWeight: 600, fontSize: '0.9375rem',
                  textDecoration: 'none', fontFamily: 'inherit',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.08)';
                  el.style.borderColor = 'rgba(37,211,102,0.3)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.04)';
                  el.style.borderColor = 'rgba(255,255,255,0.1)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <MessageCircle size={16} color="#25D366" /> WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* RIGHT — 3D particle sphere (desktop only) */}
          <motion.div
            className="hero-sphere-wrapper"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
          >
            {/* Outer dashed orbit ring */}
            <div style={{
              position: 'absolute',
              width: '460px', height: '460px',
              borderRadius: '50%',
              border: '1px dashed rgba(124,58,237,0.18)',
              animation: 'spin-slow 35s linear infinite',
            }} />
            {/* Inner dashed orbit ring */}
            <div style={{
              position: 'absolute',
              width: '340px', height: '340px',
              borderRadius: '50%',
              border: '1px dashed rgba(255,122,47,0.12)',
              animation: 'spin-slow 22s linear infinite reverse',
            }} />
            {/* Glow behind sphere */}
            <div style={{
              position: 'absolute',
              width: '300px', height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }} />
            {/* Purple orbit dot */}
            <div style={{
              position: 'absolute',
              width: '10px', height: '10px',
              borderRadius: '50%',
              background: '#a78bfa',
              boxShadow: '0 0 12px 4px rgba(167,139,250,0.5)',
              animation: 'orbit 18s linear infinite',
              transformOrigin: 'center',
            }} />
            {/* Saffron orbit dot */}
            <div style={{
              position: 'absolute',
              width: '7px', height: '7px',
              borderRadius: '50%',
              background: '#ff7a2f',
              boxShadow: '0 0 10px 3px rgba(255,122,47,0.5)',
              animation: 'orbit-rev 26s linear infinite',
              transformOrigin: 'center',
            }} />
            <ParticleSphere size={400} />
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          className="stats-strip"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: '#0d0d1a',
                padding: '1.5rem 1.25rem',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)',
                fontWeight: 800, lineHeight: 1, marginBottom: '0.3rem',
                background: 'linear-gradient(120deg, #a78bfa, #0ea5e9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.75rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
