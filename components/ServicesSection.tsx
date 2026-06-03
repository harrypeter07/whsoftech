'use client';

import { motion } from 'framer-motion';
import { Globe, Layers, Smartphone, Brain, Zap, Palette, ShoppingCart, Search, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: Globe, title: 'Website Development', desc: 'High-performance, SEO-optimized websites that convert visitors into clients. Custom designs built to scale with your business.', color: '#8B5CF6', tags: ['Custom Design', 'SEO Optimized', 'CMS Integration', 'Fast Loading'] },
  { icon: Layers, title: 'Web Applications', desc: 'Complex web platforms, SaaS products, dashboards and enterprise applications built for real-world scale.', color: '#06B6D4', tags: ['React / Next.js', 'Real-time Data', 'API Integration', 'Cloud Hosted'] },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.', color: '#10B981', tags: ['iOS & Android', 'React Native', 'Push Notifications', 'Offline Mode'] },
  { icon: Brain, title: 'AI Solutions', desc: 'Custom AI chatbots, ML models, recommendation systems and intelligent automation powered by cutting-edge AI.', color: '#F59E0B', tags: ['ChatGPT API', 'Custom Models', 'NLP Systems', 'AI Automation'] },
  { icon: Zap, title: 'Business Automation', desc: 'Eliminate manual tasks with intelligent workflow automation. Connect tools, automate processes, save hours every day.', color: '#EF4444', tags: ['Workflow Automation', 'API Integration', 'CRM Automation', 'Analytics'] },
  { icon: Palette, title: 'UI/UX Design', desc: 'Research-driven design that balances aesthetics with usability — from wireframes to pixel-perfect interfaces.', color: '#EC4899', tags: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'] },
  { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Complete online stores with inventory management, payment processing, and multi-channel selling capabilities.', color: '#8B5CF6', tags: ['Custom Store', 'Payment Gateway', 'Inventory Mgmt', 'Analytics'] },
  { icon: Search, title: 'SEO & Digital Growth', desc: 'Data-driven SEO strategies, content marketing, and digital campaigns that drive qualified traffic and leads.', color: '#06B6D4', tags: ['On-Page SEO', 'Technical SEO', 'Content Strategy', 'Link Building'] },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const card = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function ServicesSection() {
  return (
    <section id="services" style={{ background: 'rgba(16,24,39,0.25)', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Our Services</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Everything You Need to{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Dominate Your Market</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            End-to-end digital solutions designed for businesses that want to grow faster than their competition.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {SERVICES.map((s) => (
            <motion.div key={s.title} variants={card}
              whileHover={{ y: -6 }}
              style={{ background: 'rgba(16,24,39,0.85)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '1.75rem', cursor: 'default', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${s.color}35`; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${s.color}12`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              {/* Top gradient line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`, opacity: 0.7 }} />
              {/* Icon */}
              <div style={{ width: '48px', height: '48px', borderRadius: '0.875rem', background: `${s.color}18`, border: `1px solid ${s.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <s.icon size={22} color={s.color} />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.075rem', fontWeight: 700, color: 'white', marginBottom: '0.625rem' }}>{s.title}</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {s.tags.map((t) => (
                  <span key={t} style={{ padding: '0.25rem 0.625rem', borderRadius: '0.375rem', background: `${s.color}12`, border: `1px solid ${s.color}20`, color: s.color, fontSize: '0.68rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9375rem 2.5rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(139,92,246,0.3)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(139,92,246,0.5)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(139,92,246,0.3)'; }}>
            Discuss Your Project <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
