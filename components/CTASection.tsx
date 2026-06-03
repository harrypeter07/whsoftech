'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section style={{ padding: '5rem 0', background: '#070B14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', padding: '4rem 3rem', textAlign: 'center' }}>

          {/* BG Gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(99,102,241,0.12) 50%, rgba(6,182,212,0.12) 100%)', borderRadius: 'inherit' }} />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(139,92,246,0.25)', borderRadius: 'inherit' }} />

          {/* Blobs */}
          <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '50%', height: '150%', background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: '50%', height: '150%', background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)', pointerEvents: 'none' }} />

          {/* Grid overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none', opacity: 0.5 }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Let&apos;s Build Together
            </motion.div>

            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', fontWeight: 800, color: 'white', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Ready to Transform Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Business With Technology?
              </span>
            </h2>

            <p style={{ color: '#CBD5E1', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Join 40+ businesses that trusted WHS SoftTech to build their digital future. Get a free consultation — no commitment, no pressure, just clarity.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.5rem', borderRadius: '0.875rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1.0625rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 50px rgba(139,92,246,0.55)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(139,92,246,0.4)'; }}>
                Book Free Consultation <ArrowRight size={19} />
              </button>

              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20WHS%20SoftTech%20services" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.5rem', borderRadius: '0.875rem', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', color: '#25D366', fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none', transition: 'all 0.3s ease', fontFamily: 'inherit' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <MessageCircle size={19} /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust signal */}
            <p style={{ marginTop: '2rem', color: '#94A3B8', fontSize: '0.85rem' }}>
              ✓ Free consultation &nbsp;&nbsp; ✓ No commitment required &nbsp;&nbsp; ✓ Response within 2 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
