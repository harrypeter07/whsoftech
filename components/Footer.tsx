'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const QUICK_LINKS  = ['Home', 'Services', 'Industries', 'Portfolio', 'Process', 'About', 'Contact'];
const SERVICES_LIST = ['Website Development', 'Web Applications', 'Mobile Apps', 'AI Solutions', 'Automation', 'UI/UX Design', 'E-Commerce', 'SEO & Growth'];
const INDUSTRIES   = ['Healthcare', 'Education', 'E-Commerce', 'Real Estate', 'Restaurant', 'Manufacturing', 'Corporate', 'Travel'];

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase().replace(/\s/g, '-'))?.scrollIntoView({ behavior: 'smooth' });

  const year = new Date().getFullYear();

  const linkStyle: React.CSSProperties = {
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#94A3B8', fontSize: '0.875rem', padding: 0,
    transition: 'color 0.2s', fontFamily: 'inherit', textAlign: 'left',
  };

  return (
    <footer style={{ background: 'rgba(5,5,12,0.99)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '4rem' }}>
      {/* Top gradient accent */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #7c3aed 30%, #06B6D4 70%, transparent)', marginBottom: '0', opacity: 0.5 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>

        {/* Responsive 4-column grid */}
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Image
                src="/newlogo-tight-transparent.png"
                alt="WHS SoftTech"
                width={180} height={60}
                style={{ objectFit: 'contain', height: '48px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '300px', marginBottom: '1.5rem' }}>
              We build custom software, AI solutions, and digital products that help businesses across India grow faster, operate smarter, and compete confidently.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {[
                { icon: Twitter,   href: 'https://twitter.com',   label: 'Twitter' },
                { icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Github,    href: 'https://github.com',    label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '0.625rem',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94A3B8', transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(124,58,237,0.15)';
                    el.style.borderColor = 'rgba(124,58,237,0.35)';
                    el.style.color = '#a78bfa';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                    el.style.color = '#94A3B8';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {QUICK_LINKS.map(l => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)} style={linkStyle}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#a78bfa'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = '#94A3B8'; }}
                  >{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SERVICES_LIST.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')} style={linkStyle}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#a78bfa'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = '#94A3B8'; }}
                  >{s}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: Phone,  text: '+91 98765 43210' },
                { icon: Mail,   text: 'whsofttech26@gmail.com' },
                { icon: MapPin, text: 'India (Remote-First)' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#94A3B8', fontSize: '0.875rem' }}>
                  <Icon size={14} color="#a78bfa" style={{ flexShrink: 0 }} />
                  {text}
                </div>
              ))}
              <a
                href="https://wa.me/918208065506" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  marginTop: '0.5rem', padding: '0.625rem 1rem', borderRadius: '0.5rem',
                  background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)',
                  color: '#25D366', fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.18)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)'; }}
              >
                WhatsApp Us <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '1.5rem 0',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>© {year} WHS SoftTech. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a
                key={l} href="#"
                style={{ color: '#64748b', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#64748b'; }}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
