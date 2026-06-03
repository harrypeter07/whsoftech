'use client';

import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, TestTube2, Rocket, HeartHandshake } from 'lucide-react';

const STEPS = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'We deep-dive into your business, goals, competitors, and target audience to understand exactly what success looks like for you.', color: '#8B5CF6' },
  { num: '02', icon: Map, title: 'Strategy', desc: 'We craft a detailed roadmap covering technology stack, features, timeline, and milestones tailored to your budget and goals.', color: '#6366F1' },
  { num: '03', icon: Palette, title: 'Design', desc: 'Our designers create stunning, user-tested UI/UX mockups and prototypes before writing a single line of code.', color: '#06B6D4' },
  { num: '04', icon: Code2, title: 'Development', desc: 'Our engineers build your product with clean, scalable code, regular updates, and weekly progress demos.', color: '#10B981' },
  { num: '05', icon: TestTube2, title: 'Testing', desc: 'Rigorous QA testing across devices and browsers ensures your product is fast, secure, and bug-free before launch.', color: '#F59E0B' },
  { num: '06', icon: Rocket, title: 'Deployment', desc: 'We handle the entire launch process — server setup, domain configuration, SSL, and go-live with zero downtime.', color: '#EF4444' },
  { num: '07', icon: HeartHandshake, title: 'Support & Growth', desc: 'Post-launch, we provide ongoing support, performance monitoring, feature updates, and growth strategy consulting.', color: '#EC4899' },
];

export function ProcessSection() {
  return (
    <section id="process" style={{ background: 'rgba(16,24,39,0.25)', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>How We Work</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our Proven{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>7-Step Process</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            A transparent, collaborative process that keeps you in control from first call to final launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(6,182,212,0.5))', transform: 'translateX(-50%)', display: 'none' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {STEPS.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '1.25rem', alignItems: 'flex-start' }}>
                {/* Step number + icon */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `${step.color}18`, border: `2px solid ${step.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <step.icon size={22} color={step.color} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: '2px', height: '100%', minHeight: '24px', background: `linear-gradient(to bottom, ${step.color}40, transparent)` }} />
                  )}
                </div>
                {/* Content card */}
                <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.2 }}
                  style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', padding: '1.5rem', cursor: 'default', marginBottom: '0.25rem' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${step.color}30`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${step.color}10`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.625rem' }}>
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: step.color, letterSpacing: '0.05em' }}>STEP {step.num}</span>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: '#94A3B8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Ready to start your project? Let&apos;s kick off with a free consultation.</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9375rem 2.5rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(139,92,246,0.5)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
