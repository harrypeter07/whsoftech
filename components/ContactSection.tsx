'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

const SERVICES_LIST = ['Website Development', 'Web Application', 'Mobile App', 'AI Solutions', 'Business Automation', 'UI/UX Design', 'E-Commerce', 'SEO & Growth', 'Other'];

interface ContactData {
  phone: string;
  email: string;
  location: string;
  hours: string;
  whatsapp: string;
}

const DEFAULT_CONTACT: ContactData = {
  phone: '+91 98765 43210',
  email: 'whsofttech26@gmail.com',
  location: 'India (Remote-First Team)',
  hours: 'Mon–Sat, 9 AM – 7 PM IST',
  whatsapp: '918208065506',
};

export function ContactSection() {
  const [form, setForm]           = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus]       = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactData, setContactData] = useState<ContactData>(DEFAULT_CONTACT);

  useEffect(() => {
    fetch('/api/admin/contact')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then((data: ContactData) => setContactData(data))
      .catch(() => setContactData(DEFAULT_CONTACT));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) { setStatus('success'); setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
    background: 'rgba(37,99,235,0.03)', border: '1px solid #bfdbfe',
    color: '#e2e8ff', fontSize: '0.9375rem', fontFamily: 'inherit', outline: 'none',
    transition: 'border-color 0.2s', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#94a3b8',
    marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em',
  };
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    { (e.target as HTMLElement).style.borderColor = '#93c5fd'; };
  const blur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    { (e.target as HTMLElement).style.borderColor = '#bfdbfe'; };

  const contactItems = [
    { icon: Phone,  label: 'Phone / WhatsApp', value: contactData.phone,    href: `tel:${contactData.phone.replace(/\s/g, '')}`,              color: '#8B5CF6' },
    { icon: Mail,   label: 'Email',             value: contactData.email,    href: `mailto:${contactData.email}`,                              color: '#06B6D4' },
    { icon: MapPin, label: 'Location',          value: contactData.location, href: '#',                                                       color: '#10B981' },
    { icon: Clock,  label: 'Business Hours',    value: contactData.hours,    href: '#',                                                       color: '#F59E0B' },
  ];

  return (
    <section id="contact" style={{ background: '#0d1f38', padding: '5.5rem 0', borderTop: '1px solid rgba(37,99,235,0.05)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

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
          }}>Get In Touch</span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            fontWeight: 800, color: '#e2e8ff',
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            Let&apos;s Start Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #06B6D4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Project Today</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
            Tell us about your project. We&apos;ll get back to you within 2 hours with a plan.
          </p>
        </motion.div>

        {/* Responsive 2-col grid */}
        <div className="contact-grid">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label} href={href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1.25rem 1.5rem', borderRadius: '1rem',
                    background: '#0f2341', border: '1px solid #bfdbfe',
                    textDecoration: 'none', transition: 'all 0.2s',
                    boxShadow: '0 2px 16px rgba(37,99,235,0.06)',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}40`; el.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#bfdbfe'; el.style.transform = 'translateX(0)'; }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '0.75rem',
                    background: `${color}15`, border: `1px solid ${color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem', fontWeight: 500 }}>{label}</div>
                    <div style={{ color: '#e2e8ff', fontWeight: 600, fontSize: '0.9375rem' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${contactData.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.75rem', padding: '1rem', borderRadius: '0.875rem',
                background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)',
                color: '#25D366', fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.18)'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.1)'; el.style.transform = 'translateY(0)'; }}
            >
              <MessageCircle size={20} /> Chat Directly on WhatsApp
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{ background: '#0f2341', border: '1px solid #bfdbfe', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 8px 40px rgba(37,99,235,0.08)' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.35rem', fontWeight: 700, color: '#e2e8ff', marginBottom: '2rem' }}>Send Us a Message</h3>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <CheckCircle2 size={56} color="#10B981" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', color: '#e2e8ff', marginBottom: '0.75rem' }}>Message Sent!</h4>
                  <p style={{ color: '#94a3b8' }}>We&apos;ll get back to you within 2 hours during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input type="text" required placeholder="Rajesh Kumar"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input type="text" placeholder="Your Company"
                        value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                        style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" required placeholder="hello@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input type="tel" placeholder="+91 98765 43210"
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focus} onBlur={blur}>
                      <option value="" style={{ background: '#f0f7ff', color: '#e2e8ff' }}>Select a service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s} style={{ background: '#f0f7ff', color: '#e2e8ff' }}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Project Details *</label>
                    <textarea required rows={4}
                      placeholder="Tell us about your project, requirements, and timeline..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                      onFocus={focus} onBlur={blur} />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#EF4444', fontSize: '0.875rem' }}>Something went wrong. Please try WhatsApp or email us directly.</p>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      gap: '0.5rem', padding: '1rem', borderRadius: '0.75rem',
                      background: status === 'sending' ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #6366F1)',
                      color: 'white', fontWeight: 700, fontSize: '1rem',
                      border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer',
                      transition: 'all 0.3s ease', fontFamily: 'inherit', width: '100%',
                    }}
                    onMouseEnter={e => { if (status !== 'sending') { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 35px rgba(124,58,237,0.45)'; } }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  >
                    {status === 'sending' ? 'Sending...' : <><Send size={18} /> Send Message</>}
                  </button>
                  <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem' }}>✓ We respond within 2 hours during business hours</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
