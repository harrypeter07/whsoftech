'use client';

import { motion } from 'framer-motion';
import { Target, Zap, MessageSquare, Layers, Brain, LifeBuoy } from 'lucide-react';

const REASONS = [
  { icon: Target, title: 'Business-Focused Development', desc: 'We build with your business goals front and center — not just pretty code. Every feature is designed to generate leads or drive revenue.', color: '#8B5CF6' },
  { icon: Zap, title: 'Fast, On-Time Delivery', desc: 'We respect timelines. Our streamlined process ensures you get a high-quality product delivered on schedule, every time.', color: '#F59E0B' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'Daily updates, weekly demos, and an open Slack/WhatsApp channel. You are always in the loop, never waiting for answers.', color: '#06B6D4' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'We build foundations that can handle 10x growth. No costly rewrites as you scale — your tech grows with your business.', color: '#10B981' },
  { icon: Brain, title: 'AI & Modern Tech Expertise', desc: 'Our team stays ahead of the curve. We bring cutting-edge AI, automation, and modern frameworks to every project.', color: '#EC4899' },
  { icon: LifeBuoy, title: 'Long-Term Support Partner', desc: 'We don\'t disappear after launch. Our retainer support plans ensure your product keeps improving long after go-live.', color: '#EF4444' },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function WhyChooseUs() {
  return (
    <section id="why-us" style={{ background: 'rgba(16,24,39,0.3)', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Why WHS SoftTech</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            The Agency That{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Actually Delivers</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            We are not just developers. We are strategic partners invested in your long-term success.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {REASONS.map((r) => (
            <motion.div key={r.title} variants={item} whileHover={{ y: -5 }}
              style={{ background: 'rgba(16,24,39,0.85)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '2rem', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${r.color}30`; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 50px ${r.color}12`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '1rem', background: `${r.color}15`, border: `1px solid ${r.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <r.icon size={24} color={r.color} />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>{r.title}</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.7 }}>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
