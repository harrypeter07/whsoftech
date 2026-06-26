'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export function CTASection() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] });
  const gradX = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ctaRef} style={{ padding: '6rem 0', background: '#060f1e', borderTop: '1px solid rgba(219,39,119,0.08)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)', textAlign: 'center' }}>

          {/* Background */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(219,39,119,0.08) 0%, rgba(15,35,65,0.95) 50%, rgba(37,99,235,0.08) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(219,39,119,0.18)', borderRadius: 'inherit' }} />
          {/* Grid overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(219,39,119,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(219,39,119,0.04) 1px,transparent 1px)', backgroundSize: '48px 48px', opacity: 0.6 }} />
          {/* Glow blobs */}
          <motion.div style={{ position: 'absolute', top: '-30%', left: gradX, width: '50%', height: '160%', background: 'radial-gradient(circle, rgba(219,39,119,0.10), transparent 70%)', pointerEvents: 'none' }} />
          <motion.div style={{ position: 'absolute', bottom: '-30%', right: gradX, width: '50%', height: '160%', background: 'radial-gradient(circle, rgba(37,99,235,0.10), transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: '1.5rem' }}>
              <span className="s-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={12} /> Let&apos;s Build Together
              </span>
            </motion.div>

            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', fontWeight: 800, color: '#e2e8ff', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Ready to Transform Your{' '}
              <span className="grad">Business With Technology?</span>
            </h2>

            <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Join 40+ businesses that trusted WHS SoftTech to build their digital future. Free consultation — no commitment, no pressure.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary"
                style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                Book Free Consultation <ArrowRight size={18} />
              </button>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20WHS%20SoftTech%20services" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.5rem', borderRadius: '10px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'all 0.25s ease', fontFamily: 'inherit' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <MessageCircle size={19} /> Chat on WhatsApp
              </a>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Free consultation', 'No commitment required', 'Response within 2 hours'].map(item => (
                <span key={item} style={{ color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{ color: '#10b981' }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
