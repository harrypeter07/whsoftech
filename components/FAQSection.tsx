'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'How much does a website or app cost?', a: "Every project is unique, so we don't have fixed pricing. Costs depend on features, complexity, and timeline. We offer free consultations to provide a transparent, detailed quote with no hidden charges. Book a call and we'll give you an accurate estimate within 24 hours." },
  { q: 'How long does it take to build?', a: "A professional business website typically takes 2–4 weeks. A web application or mobile app can take 6–16 weeks depending on complexity. After our discovery call, we'll provide a detailed timeline with weekly milestones." },
  { q: 'Do you work with clients outside your city?', a: 'Absolutely. We work with clients across India and internationally. Our process is built for remote collaboration — with video calls, shared project dashboards, and regular demos ensuring you stay in complete control.' },
  { q: 'Will I own the code after launch?', a: 'Yes, completely. Upon final payment, you own 100% of the codebase, design files, and all project assets. We hand over everything — source code, hosting credentials, and documentation — with no licensing fees or lock-ins.' },
  { q: 'What technologies do you use?', a: "We use modern, industry-standard technologies: Next.js, React, Node.js, Python, React Native for development; PostgreSQL, MongoDB for databases; AWS, Vercel, Firebase for hosting; and OpenAI, LangChain for AI features." },
  { q: 'Can you redesign my existing website?', a: "Yes, we specialize in redesigns and migrations. We'll analyze your current site, preserve your existing content and SEO rankings, and rebuild it with a modern design and improved performance." },
  { q: 'Do you provide support after launch?', a: "Yes. We offer flexible post-launch support plans including bug fixes, content updates, performance monitoring, and feature additions. We're a long-term partner, not a one-time vendor." },
  { q: 'Can you integrate AI into my existing system?', a: 'Yes. We can add AI capabilities — chatbots, recommendation engines, automated workflows, document processing, or custom ML models — to your existing systems via API integration.' },
  { q: 'How do you handle project communication?', a: "We maintain a dedicated WhatsApp group + email thread for every project. You'll receive weekly progress demos, a shared project dashboard, and direct access to your project manager." },
  { q: 'What industries do you specialize in?', a: 'We have delivered projects across 16+ industries including healthcare, education, e-commerce, real estate, hospitality, manufacturing, automobile, legal, and corporate sectors.' },
];

function FAQItem({ faq, isOpen, onToggle, color = '#3b82f6' }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void; color?: string }) {
  return (
    <div style={{ background: '#ffffff', border: `1px solid ${isOpen ? color + '40' : '#bfdbfe'}`, borderRadius: '14px', overflow: 'hidden', transition: 'border-color 0.3s', boxShadow: '0 2px 16px rgba(37,99,235,0.06)' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9375rem', fontWeight: 600, color: isOpen ? color : '#1e3a5f', lineHeight: 1.4, transition: 'color 0.3s' }}>{faq.q}</span>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: isOpen ? `${color}15` : 'rgba(37,99,235,0.05)', border: `1px solid ${isOpen ? color + '35' : '#bfdbfe'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s' }}>
          {isOpen ? <Minus size={14} color={color} /> : <Plus size={14} color="#4a6fa5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.5rem 1.25rem', color: '#4a6fa5', fontSize: '0.9rem', lineHeight: 1.75, borderTop: '1px solid #bfdbfe', paddingTop: '1rem' }}>{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section id="faq" style={{ background: '#f0f7ff', padding: '6rem 0', borderTop: '1px solid rgba(37,99,235,0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label">FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#1e3a5f', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Common Questions,{' '}
            <span className="grad">Straight Answers</span>
          </h2>
          <p style={{ color: '#4a6fa5', fontSize: '1.05rem' }}>Everything you need to know before starting your project.</p>
        </motion.div>

        <div className="faq-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {left.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <FAQItem faq={faq} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} color="#2563eb" />
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {right.map((faq, i) => (
              <motion.div key={i + half} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <FAQItem faq={faq} isOpen={open === i + half} onToggle={() => setOpen(open === i + half ? null : i + half)} color="#0ea5e9" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#4a6fa5', marginBottom: '1.25rem' }}>Still have questions? We&apos;re happy to answer them personally.</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost">Ask Your Question</button>
        </motion.div>
      </div>
    </section>
  );
}
