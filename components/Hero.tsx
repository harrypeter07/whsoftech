'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shield, Zap, Cpu, TrendingUp, Globe } from 'lucide-react';

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 16, suffix: '+', label: 'Industries Served' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

const TRUST = [
  { icon: Zap, text: 'Fast Delivery' },
  { icon: Cpu, text: 'AI-Powered' },
  { icon: Shield, text: 'Secure & Reliable' },
  { icon: TrendingUp, text: 'Scalable Solutions' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 2000;
          const step = value / (dur / 16);
          let cur = 0;
          const t = setInterval(() => {
            cur += step;
            if (cur >= value) { setCount(value); clearInterval(t); } else { setCount(Math.floor(cur)); }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 3,
  color: Math.random() > 0.5 ? '#8B5CF6' : '#06B6D4',
  dur: 3 + Math.random() * 5,
  delay: Math.random() * 4,
}));

const CHART = [35, 52, 41, 68, 55, 78, 63, 85, 72, 91, 80, 97];

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{ minHeight: '100vh', background: '#070B14', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '7rem', paddingBottom: '4rem' }}>

      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />

      {/* Gradient blobs */}
      <motion.div animate={{ x: [0, 40, 0, -30, 0], y: [0, -25, 15, -10, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: '-25%', left: '-10%', width: '65%', height: '70%', background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <motion.div animate={{ x: [0, -50, 20, 0], y: [0, 35, -20, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: '5%', right: '-15%', width: '55%', height: '65%', background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '15%', left: '35%', width: '35%', height: '40%', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Particles */}
      {PARTICLES.map((p) => (
        <motion.div key={p.id} animate={{ y: [0, -28, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
          style={{ position: 'absolute', left: p.left, top: p.top, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: p.color, pointerEvents: 'none' }} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '1.75rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 1.125rem', borderRadius: '9999px',
            background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)',
            color: '#8B5CF6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#8B5CF6', animation: 'dot-pulse 2s ease-in-out infinite' }} />
            Building Digital Future for Indian Businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)', fontWeight: 800, lineHeight: 1.08, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
          Custom Software, AI & Digital Solutions That{' '}
          <span style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 45%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Accelerate Business Growth
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', color: '#94A3B8', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          WHS SoftTech helps businesses scale with custom websites, mobile apps, AI systems,
          automation solutions, and enterprise software — all engineered to deliver real results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <button onClick={() => scrollTo('contact')} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.9375rem 2.25rem', borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
            color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(139,92,246,0.35)', transition: 'all 0.3s ease', fontFamily: 'inherit',
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(139,92,246,0.55)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(139,92,246,0.35)'; }}>
            Book Free Consultation <ArrowRight size={18} />
          </button>
          <button onClick={() => scrollTo('portfolio')} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.9375rem 2.25rem', borderRadius: '0.75rem',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
            color: 'white', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
            transition: 'all 0.3s ease', fontFamily: 'inherit',
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
            View Our Work <Code2 size={18} />
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '560px', margin: '0 auto 3rem', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: '1.375rem 0.75rem', textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: 'rgba(16,24,39,0.5)',
            }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.75rem', fontWeight: 800, background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '0.375rem' }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 500, lineHeight: 1.3 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem' }}>
          {TRUST.map(({ icon: Icon, text }) => (
            <div key={text} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1rem', borderRadius: '0.5rem',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500,
            }}>
              <Icon size={14} color="#8B5CF6" />{text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Dashboard */}
      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
        style={{ position: 'relative', zIndex: 1, marginTop: '4rem', width: '100%', maxWidth: '860px', padding: '0 1.5rem' }}>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'rgba(16,24,39,0.85)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.5rem', backdropFilter: 'blur(20px)', boxShadow: '0 40px 80px rgba(0,0,0,0.55), 0 0 120px rgba(139,92,246,0.09)' }}>
          {/* Browser chrome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', gap: '0.375rem' }}>
              {['#EF4444', '#F59E0B', '#10B981'].map((c) => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
            </div>
            <div style={{ flex: 1, height: '26px', background: 'rgba(255,255,255,0.04)', borderRadius: '0.375rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', paddingLeft: '0.625rem', gap: '0.375rem' }}>
              <Globe size={11} color="#94A3B8" />
              <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>dashboard.yourproject.com</span>
            </div>
          </div>
          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.875rem', marginBottom: '1.25rem' }}>
            {[{ l: 'Monthly Revenue', v: '₹4.2L', c: '+24%', col: '#10B981' }, { l: 'Active Users', v: '2,841', c: '+12%', col: '#8B5CF6' }, { l: 'Conversion Rate', v: '18.4%', c: '+8%', col: '#06B6D4' }].map((m) => (
              <div key={m.l} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', padding: '0.875rem' }}>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', marginBottom: '0.25rem' }}>{m.l}</div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, color: 'white', fontSize: '1.15rem', marginBottom: '0.2rem' }}>{m.v}</div>
                <div style={{ fontSize: '0.65rem', color: m.col, fontWeight: 600 }}>{m.c} this month</div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div style={{ height: '70px', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'flex-end', padding: '0.625rem', gap: '0.3rem' }}>
            {CHART.map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.9 + i * 0.05, duration: 0.5 }}
                style={{ flex: 1, borderRadius: '3px 3px 0 0', background: i === CHART.length - 1 ? 'linear-gradient(135deg, #8B5CF6, #06B6D4)' : `rgba(139,92,246,${0.2 + i * 0.02})` }} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
