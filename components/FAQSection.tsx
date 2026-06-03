'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'How much does a website or app cost?', a: 'Every project is unique, so we don\'t have fixed pricing. Costs depend on features, complexity, and timeline. We offer free consultations to understand your requirements and provide a transparent, detailed quote with no hidden charges. Book a call and we\'ll give you an accurate estimate within 24 hours.' },
  { q: 'How long does it take to build a website?', a: 'A professional business website typically takes 2–4 weeks. A web application or mobile app can take 6–16 weeks depending on complexity. After our discovery call, we\'ll provide a detailed timeline with weekly milestones so you always know exactly where your project stands.' },
  { q: 'Do you work with clients outside your city?', a: 'Absolutely. We work with clients across India and internationally. Our process is built for remote collaboration — with video calls, shared project dashboards, and regular demos ensuring you stay completely in control regardless of your location.' },
  { q: 'Will I own the code and the website after launch?', a: 'Yes, completely. Upon final payment, you own 100% of the codebase, design files, and all project assets. We hand over everything — source code, hosting credentials, and documentation — with no licensing fees or lock-ins.' },
  { q: 'What technologies do you use?', a: 'We use modern, industry-standard technologies: Next.js, React, Node.js, Python, React Native for development; PostgreSQL, MongoDB for databases; AWS, Vercel, Firebase for hosting; and OpenAI, LangChain for AI features. We choose the best tech for your specific project needs.' },
  { q: 'Can you redesign my existing website?', a: 'Yes, we specialize in redesigns and migrations. We\'ll analyze your current site, preserve your existing content and SEO rankings, and rebuild it with a modern design and improved performance — typically resulting in higher conversions and better Google rankings.' },
  { q: 'Do you provide support after launch?', a: 'Yes. We offer flexible post-launch support plans including bug fixes, content updates, performance monitoring, and feature additions. Our team remains available for urgent issues via WhatsApp and email. We\'re a long-term partner, not a one-time vendor.' },
  { q: 'Can you integrate AI into my existing system?', a: 'Yes. We can add AI capabilities — chatbots, recommendation engines, automated workflows, document processing, or custom ML models — to your existing systems via API integration. We\'ll assess your current setup and suggest the most practical AI enhancements.' },
  { q: 'How do you handle project communication?', a: 'We maintain a dedicated WhatsApp group + email thread for every project. You\'ll receive weekly progress demos, a shared project dashboard with task status, and direct access to your project manager. You\'ll never be left wondering what\'s happening with your project.' },
  { q: 'What industries do you specialize in?', a: 'We have delivered projects across 16+ industries including healthcare, education, e-commerce, real estate, hospitality, manufacturing, automobile, legal, and corporate sectors. Our industry-specific experience means we understand your domain requirements, compliance needs, and target audience from day one.' },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: 'rgba(16,24,39,0.25)', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>FAQ</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Common Questions, <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Straight Answers</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
            Everything you need to know before starting your project.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQS.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ background: 'rgba(16,24,39,0.85)', border: `1px solid ${open === i ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '1rem', overflow: 'hidden', transition: 'border-color 0.3s' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.375rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 600, color: open === i ? '#8B5CF6' : 'white', lineHeight: 1.4, transition: 'color 0.3s', fontFamily: 'inherit' }}>{faq.q}</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: open === i ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.05)', border: `1px solid ${open === i ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s' }}>
                  {open === i ? <Minus size={15} color="#8B5CF6" /> : <Plus size={15} color="#94A3B8" />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '0 1.5rem 1.375rem', color: '#94A3B8', fontSize: '0.9375rem', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#94A3B8', marginBottom: '1.25rem' }}>Still have questions? We&apos;re happy to answer them personally.</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', borderRadius: '0.75rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.2)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.1)'; }}>
            Ask Your Question
          </button>
        </motion.div>
      </div>
    </section>
  );
}
