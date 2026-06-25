'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { ParticleSphere } from './ParticleSphere';

interface HeroData {
  headline: string;
  headlineAccent: string;
  headlineSuffix: string;
  subtext: string;
  badge: string;
  stats: Array<{ value: number; suffix: string; label: string }>;
}

const DEFAULT_HERO: HeroData = {
  headline: 'We Build Software',
  headlineAccent: 'That Transforms',
  headlineSuffix: 'Your Business',
  subtext: 'WHS SoftTech delivers custom websites, mobile apps, AI systems, and automation for startups, SMEs, and enterprises across India.',
  badge: 'Available for new projects · India',
  stats: [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 16, suffix: '+', label: 'Industries Served' },
    { value: 40, suffix: '+', label: 'Happy Clients' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  ],
};

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

function FloatCard({ style, icon: Icon, label, value, color, delay = 0 }: {
  style?: React.CSSProperties; icon: React.ElementType; label: string; value: string; color: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      style={{
        position: 'absolute',
        background: 'rgba(255,255,255,0.95)',
        border: `1px solid ${color}30`,
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        backdropFilter: 'blur(16px)',
        boxShadow: `0 8px 32px rgba(37,99,235,0.1)`,
        animation: 'float 5s ease-in-out infinite',
        animationDelay: `${delay}s`,
        zIndex: 2,
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={14} color={color} />
        </div>
        <div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 800, color: color, lineHeight: 1 }}>{value}</div>
          <div style={{ fontSize: '0.65rem', color: '#4a6fa5', fontWeight: 500 }}>{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const [heroData, setHeroData] = useState<HeroData>(DEFAULT_HERO);

  useEffect(() => {
    fetch('/api/admin/hero')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then((data: HeroData) => setHeroData(data))
      .catch(() => setHeroData(DEFAULT_HERO));
  }, []);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 160]);
  const sphereY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', background: '#f0f7ff', paddingTop: '7rem', paddingBottom: '3.5rem', width: '100%' }}>
      {/* Dot grid + glow — parallax wrapper */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(37,99,235,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Blue glow left */}
        <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '55%', height: '85%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)' }} />
        {/* Saffron glow right */}
        <div style={{ position: 'absolute', top: '20%', right: '-15%', width: '50%', height: '70%', background: 'radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 65%)' }} />
      </motion.div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '99px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.22)', color: '#2563eb', fontSize: '0.775rem', fontWeight: 600, letterSpacing: '0.07em' }}>
                <span className="anim-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                {heroData.badge}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4.25rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em', color: '#1e3a5f', marginBottom: '1.25rem' }}>
              {heroData.headline}<br />
              <span className="grad">{heroData.headlineAccent}</span><br />
              {heroData.headlineSuffix}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#4a6fa5', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
              {heroData.subtext}
            </motion.p>

            {/* Trust row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {[
                { icon: CheckCircle, text: 'Free consultation', color: '#10b981' },
                { icon: CheckCircle, text: 'Full code ownership', color: '#10b981' },
                { icon: CheckCircle, text: 'Post-launch support', color: '#10b981' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4a6fa5', fontSize: '0.875rem' }}>
                  <Icon size={14} color={color} /> {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={() => scrollTo('contact')} className="btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </button>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle size={16} color="#25D366" /> WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* RIGHT — sphere + floating cards */}
          <motion.div className="hero-sphere-wrapper" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.35 }} style={{ y: sphereY }}>
            {/* Orbit rings */}
            <div style={{ position: 'absolute', width: '470px', height: '470px', borderRadius: '50%', border: '1px dashed rgba(59,130,246,0.15)', animation: 'spin-slow 35s linear infinite' }} />
            <div style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', border: '1px dashed rgba(249,115,22,0.1)', animation: 'spin-slow 22s linear infinite reverse' }} />
            {/* Glow */}
            <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }} />
            {/* Orbit dots */}
            <div style={{ position: 'absolute', width: '10px', height: '10px', borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 12px 4px rgba(96,165,250,0.5)', animation: 'orbit 18s linear infinite' }} />
            <div style={{ position: 'absolute', width: '7px', height: '7px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 10px 3px rgba(249,115,22,0.5)', animation: 'orbit-rev 26s linear infinite' }} />

            {/* Floating metric cards */}
            <FloatCard icon={TrendingUp} label="Projects Delivered" value="50+" color="#3b82f6" style={{ top: '8%', left: '-8%' }} delay={0.8} />
            <FloatCard icon={Users} label="Happy Clients" value="40+" color="#06b6d4" style={{ bottom: '12%', right: '-5%' }} delay={1.0} />
            <FloatCard icon={Award} label="Satisfaction" value="98%" color="#10b981" style={{ top: '55%', left: '-12%' }} delay={1.2} />

            <ParticleSphere size={400} />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div className="stats-strip" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
          {heroData.stats.map(s => (
            <div key={s.label} style={{ background: '#ffffff', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', fontWeight: 800, lineHeight: 1, marginBottom: '0.3rem', background: 'linear-gradient(135deg, #60a5fa, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ color: '#7090c0', fontSize: '0.75rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
