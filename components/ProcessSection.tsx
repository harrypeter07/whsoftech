'use client';

import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, TestTube2, Rocket, HeartHandshake } from 'lucide-react';

const STEPS = [
  { num: '01', icon: Search,         title: 'Discovery',       desc: 'We deep-dive into your business, goals, competitors, and target audience to understand exactly what success looks like for you.',                                  color: '#8B5CF6' },
  { num: '02', icon: Map,            title: 'Strategy',        desc: 'We craft a detailed roadmap covering technology stack, features, timeline, and milestones tailored to your budget and goals.',                                        color: '#6366F1' },
  { num: '03', icon: Palette,        title: 'Design',          desc: 'Our designers create stunning, user-tested UI/UX mockups and prototypes before writing a single line of code.',                                                        color: '#06B6D4' },
  { num: '04', icon: Code2,          title: 'Development',     desc: 'Our engineers build your product with clean, scalable code, regular updates, and weekly progress demos.',                                                              color: '#10B981' },
  { num: '05', icon: TestTube2,      title: 'Testing',         desc: 'Rigorous QA testing across devices and browsers ensures your product is fast, secure, and bug-free before launch.',                                                   color: '#F59E0B' },
  { num: '06', icon: Rocket,         title: 'Deployment',      desc: 'We handle the entire launch — server setup, domain configuration, SSL, and go-live with zero downtime.',                                                              color: '#EF4444' },
  { num: '07', icon: HeartHandshake, title: 'Support & Growth',desc: 'Post-launch, we provide ongoing support, performance monitoring, feature updates, and growth strategy consulting.',                                                    color: '#EC4899' },
];

export function ProcessSection() {
  return (
    <section id="process" style={{ background: '#0a0a14', padding: '5.5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px',
            background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)',
            color: '#a78bfa', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.25rem',
          }}>How We Work</span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            fontWeight: 800, color: '#f1f5f9',
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            Our Proven{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #06B6D4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>7-Step Process</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            A transparent, collaborative process that keeps you in control from first call to final launch.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical connector line */}
          <div
            className="process-connector"
            style={{
              position: 'absolute',
              left: '25px',
              top: '26px',
              bottom: '26px',
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(124,58,237,0.6), rgba(6,182,212,0.5), rgba(236,72,153,0.4))',
              borderRadius: '2px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                {/* Step icon — sits on the connector line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: `${step.color}15`, border: `2px solid ${step.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 0 20px ${step.color}20`,
                  }}>
                    <step.icon size={21} color={step.color} />
                  </div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'rgba(13,13,26,0.9)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    cursor: 'default',
                    marginBottom: '0.25rem',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${step.color}35`;
                    el.style.boxShadow = `0 8px 30px ${step.color}12`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Left accent strip */}
                  <div style={{
                    position: 'absolute', left: 0, top: '12px', bottom: '12px',
                    width: '3px', borderRadius: '0 3px 3px 0',
                    background: `linear-gradient(to bottom, ${step.color}, ${step.color}40)`,
                    opacity: 0.7,
                  }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.7rem', fontWeight: 700,
                      color: step.color, letterSpacing: '0.08em',
                      background: `${step.color}15`,
                      padding: '0.15rem 0.5rem', borderRadius: '4px',
                    }}>STEP {step.num}</span>
                    <h3 style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '1.05rem', fontWeight: 700,
                      color: '#f1f5f9', margin: 0,
                    }}>{step.title}</h3>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <p style={{ color: '#94A3B8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Ready to start your project? Let&apos;s kick off with a free consultation.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9375rem 2.5rem', borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #7c3aed, #6366F1)',
              color: 'white', fontWeight: 700, fontSize: '1rem',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease', fontFamily: 'inherit',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(124,58,237,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
