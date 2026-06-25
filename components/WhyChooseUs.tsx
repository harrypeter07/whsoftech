'use client';
import { motion } from 'framer-motion';
import { Target, Zap, MessageSquare, Layers, Brain, LifeBuoy } from 'lucide-react';

const REASONS = [
  { icon: Target,       title: 'Business-Focused Development', desc: 'We build with your business goals front and center — not just pretty code. Every feature is designed to generate leads or drive revenue.', color: '#3b82f6', stat: '40+', statLabel: 'businesses grown' },
  { icon: Zap,          title: 'Fast, On-Time Delivery',        desc: 'We respect timelines. Our streamlined process ensures you get a high-quality product delivered on schedule, every time.',                    color: '#f59e0b', stat: '100%', statLabel: 'on-time delivery' },
  { icon: MessageSquare,title: 'Transparent Communication',     desc: 'Daily updates, weekly demos, and an open WhatsApp channel. You are always in the loop, never waiting for answers.',                         color: '#06b6d4', stat: '2hr', statLabel: 'response time' },
  { icon: Layers,       title: 'Scalable Architecture',         desc: 'We build foundations that can handle 10x growth. No costly rewrites as you scale — your tech grows with your business.',                      color: '#10b981', stat: '10x', statLabel: 'scalable systems' },
  { icon: Brain,        title: 'AI & Modern Tech Expertise',    desc: 'Our team stays ahead of the curve. We bring cutting-edge AI, automation, and modern frameworks to every project.',                           color: '#ec4899', stat: 'GPT-4', statLabel: 'AI powered' },
  { icon: LifeBuoy,     title: 'Long-Term Support Partner',     desc: "We don't disappear after launch. Our retainer support plans ensure your product keeps improving long after go-live.",                        color: '#f97316', stat: '24/7', statLabel: 'support available' },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" style={{ background: '#07071e', padding: '6rem 0', borderTop: '1px solid rgba(59,130,246,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label">Why WHS SoftTech</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#e2e8ff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            The Agency That{' '}
            <span className="grad">Actually Delivers</span>
          </h2>
          <p style={{ color: '#7b8db0', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            We are not just developers — we are strategic partners invested in your long-term success.
          </p>
        </motion.div>

        <div className="why-bento">
          {REASONS.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: '#0e0e2a',
                border: '1px solid rgba(59,130,246,0.1)',
                borderRadius: '18px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s, box-shadow 0.3s, transform 0.2s',
                cursor: 'default',
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${r.color}35`;
                el.style.boxShadow = `0 20px 60px ${r.color}14`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(59,130,246,0.1)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Background number watermark */}
              <div style={{ position: 'absolute', top: '-10px', right: '1rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '5rem', fontWeight: 900, color: `${r.color}06`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${r.color}12`, border: `1px solid ${r.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <r.icon size={22} color={r.color} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.375rem', fontWeight: 800, color: r.color, lineHeight: 1 }}>{r.stat}</div>
                  <div style={{ fontSize: '0.65rem', color: '#4b5e80', fontWeight: 500 }}>{r.statLabel}</div>
                </div>
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#e2e8ff', marginBottom: '0.625rem' }}>{r.title}</h3>
              <p style={{ color: '#7b8db0', fontSize: '0.875rem', lineHeight: 1.7 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
