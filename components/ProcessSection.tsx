'use client';
import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, TestTube2, Rocket, HeartHandshake } from 'lucide-react';

const STEPS = [
  { num: '01', icon: Search,          title: 'Discovery',       desc: 'We deep-dive into your business, goals, and target audience to understand exactly what success looks like.',              color: '#3b82f6' },
  { num: '02', icon: Map,             title: 'Strategy',        desc: 'We craft a detailed roadmap covering tech stack, features, timeline, and milestones tailored to your goals.',              color: '#6366f1' },
  { num: '03', icon: Palette,         title: 'Design',          desc: 'Stunning, user-tested UI/UX mockups and prototypes before writing a single line of code.',                                  color: '#06b6d4' },
  { num: '04', icon: Code2,           title: 'Development',     desc: 'Clean, scalable code with regular updates and weekly progress demos to keep you in the loop.',                               color: '#10b981' },
  { num: '05', icon: TestTube2,       title: 'Testing',         desc: 'Rigorous QA across devices and browsers ensures your product is fast, secure, and bug-free before launch.',                  color: '#f59e0b' },
  { num: '06', icon: Rocket,          title: 'Deployment',      desc: 'We handle the entire launch — server setup, SSL, and go-live with zero downtime.',                                          color: '#ef4444' },
  { num: '07', icon: HeartHandshake,  title: 'Support',         desc: 'Post-launch support, monitoring, feature updates, and growth consulting — we are in it for the long run.',                  color: '#ec4899' },
];

export function ProcessSection() {
  return (
    <section id="process" style={{ background: '#0a1628', padding: '6rem 0', borderTop: '1px solid rgba(37,99,235,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label">How We Work</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1e3a5f', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our Proven{' '}
            <span className="grad">7-Step Process</span>
          </h2>
          <p style={{ color: '#4a6fa5', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            A transparent, collaborative process that keeps you in control from first call to final launch.
          </p>
        </motion.div>

        {/* Steps grid: 4 on row 1, 3 on row 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Row 1: steps 1-4 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {STEPS.slice(0, 4).map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: '#0f2341', border: '1px solid #bfdbfe', borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'border-color 0.25s, box-shadow 0.25s', boxShadow: '0 2px 16px rgba(37,99,235,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${step.color}35`; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${step.color}14`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#bfdbfe'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(37,99,235,0.06)'; }}
              >
                {/* Step number watermark */}
                <div style={{ position: 'absolute', top: '-8px', right: '0.75rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '4rem', fontWeight: 900, color: 'rgba(37,99,235,0.06)', lineHeight: 1, pointerEvents: 'none' }}>{step.num}</div>
                {/* Arrow connector (not on last in row) */}
                {i < 3 && (
                  <div style={{ position: 'absolute', top: '50%', right: '-10px', transform: 'translateY(-50%)', width: '20px', height: '2px', background: 'rgba(37,99,235,0.2)', zIndex: 10 }} />
                )}
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${step.color}12`, border: `1px solid ${step.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <step.icon size={18} color={step.color} />
                </div>
                <div style={{ fontSize: '0.65rem', color: step.color, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.375rem' }}>STEP {step.num}</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9375rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#4a6fa5', fontSize: '0.8rem', lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Connector between rows with animated drawing effect */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="800" height="64" viewBox="0 0 800 64" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="timelineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 400 0 Q 400 30 400 60"
                fill="none"
                stroke="url(#timelineGrad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                viewport={{ once: true }}
              />
              <polygon points="400,62 395,52 405,52" fill="rgba(37,99,235,0.3)" />
            </svg>
          </div>

          {/* Row 2: steps 5-7, centered */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', maxWidth: '78%', margin: '0 auto', width: '100%' }}>
            {STEPS.slice(4).map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 4) * 0.1 }}
                style={{ background: '#0f2341', border: '1px solid #bfdbfe', borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'border-color 0.25s, box-shadow 0.25s', boxShadow: '0 2px 16px rgba(37,99,235,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${step.color}35`; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${step.color}14`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#bfdbfe'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(37,99,235,0.06)'; }}
              >
                <div style={{ position: 'absolute', top: '-8px', right: '0.75rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '4rem', fontWeight: 900, color: 'rgba(37,99,235,0.06)', lineHeight: 1, pointerEvents: 'none' }}>{step.num}</div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${step.color}12`, border: `1px solid ${step.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <step.icon size={18} color={step.color} />
                </div>
                <div style={{ fontSize: '0.65rem', color: step.color, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.375rem' }}>STEP {step.num}</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9375rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#4a6fa5', fontSize: '0.8rem', lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: '#4a6fa5', marginBottom: '1.5rem', fontSize: '1rem' }}>Ready to start? Let&apos;s kick off with a free consultation.</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
