'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const SERVICES_LIST = ['Website Development', 'Web Application', 'Mobile App', 'AI Solutions', 'Business Automation', 'UI/UX Design', 'E-Commerce', 'SEO & Growth', 'Other'];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) { setStatus('success'); setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputStyle = {
    width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    color: 'white', fontSize: '0.9375rem', fontFamily: 'inherit', outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = { display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '0.5rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em' };

  return (
    <section id="contact" style={{ background: '#070B14', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Let&apos;s Start Your{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Project Today</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
            Tell us about your project. We&apos;ll get back to you within 2 hours with a plan.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>

          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {[
                { icon: Phone, label: 'Phone / WhatsApp', value: '+91 98765 43210', href: 'tel:+919876543210', color: '#8B5CF6' },
                { icon: Mail, label: 'Email', value: 'hello@whssofttech.com', href: 'mailto:hello@whssofttech.com', color: '#06B6D4' },
                { icon: MapPin, label: 'Location', value: 'India (Remote-First Team)', href: '#', color: '#10B981' },
                { icon: Clock, label: 'Business Hours', value: 'Mon–Sat, 9 AM – 7 PM IST', href: '#', color: '#F59E0B' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '1rem', background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', background: `${color}15`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>{label}</div>
                    <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9375rem' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp quick */}
            <a href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '0.875rem', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.18)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
              <MessageCircle size={20} /> Chat Directly on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ background: 'rgba(16,24,39,0.85)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.375rem', fontWeight: 700, color: 'white', marginBottom: '2rem' }}>Send Us a Message</h3>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <CheckCircle2 size={56} color="#10B981" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem' }}>Message Sent!</h4>
                  <p style={{ color: '#94A3B8' }}>We&apos;ll get back to you within 2 hours during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input type="text" required placeholder="Rajesh Kumar" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input type="text" placeholder="Your Company" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" required placeholder="hello@company.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                      <option value="" style={{ background: '#101827' }}>Select a service...</option>
                      {SERVICES_LIST.map((s) => <option key={s} value={s} style={{ background: '#101827' }}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Project Details *</label>
                    <textarea required rows={4} placeholder="Tell us about your project, requirements, and timeline..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }} />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#EF4444', fontSize: '0.875rem' }}>Something went wrong. Please try WhatsApp or email us directly.</p>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '0.75rem', background: status === 'sending' ? 'rgba(139,92,246,0.5)' : 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit', width: '100%' }}
                    onMouseEnter={(e) => { if (status !== 'sending') { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 35px rgba(139,92,246,0.45)'; } }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                    {status === 'sending' ? 'Sending...' : <><Send size={18} /> Send Message</>}
                  </button>
                  <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.8rem' }}>✓ We respond within 2 hours during business hours</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
