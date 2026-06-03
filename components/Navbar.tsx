'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'Industries', href: 'industries' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Process', href: 'process' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const clickLocked = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer — but only update when not click-locked
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLocked.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    // Lock intersection observer for 1.2s so click state persists
    clickLocked.current = true;
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => { clickLocked.current = false; }, 1200);

    setActive(href);
    setOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'background 0.4s ease, border-color 0.4s ease, padding 0.3s ease',
          background: scrolled ? 'rgba(7,11,20,0.95)' : 'rgba(7,11,20,0.3)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          padding: scrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button onClick={() => handleNav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/newlogo-tight-transparent.png"
              alt="WHS SoftTech"
              width={160}
              height={52}
              style={{ objectFit: 'contain', height: '44px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              priority
            />
          </button>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="lg-show"
                  style={{
                    position: 'relative',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.5rem 0.875rem', borderRadius: '0.5rem',
                    color: isActive ? '#8B5CF6' : '#94A3B8',
                    fontSize: '0.875rem', fontWeight: isActive ? 600 : 500,
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.25s ease',
                    display: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                  }}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: '2px', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '18px', height: '2px', borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => handleNav('contact')}
              className="lg-show"
              style={{
                display: 'none', alignItems: 'center', gap: '0.5rem',
                padding: '0.625rem 1.25rem', borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                color: 'white', fontWeight: 600, fontSize: '0.875rem',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                whiteSpace: 'nowrap', fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(139,92,246,0.45)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              Book Free Consultation <ArrowRight size={15} />
            </button>
            <button
              onClick={() => setOpen(!open)} aria-label="Toggle menu"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.5rem', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(7,11,20,0.98)', backdropFilter: 'blur(24px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}
          >
            <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.5rem', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={20} />
            </button>
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
              <Image
                src="/newlogo-tight-transparent.png"
                alt="WHS SoftTech"
                width={140}
                height={46}
                style={{ objectFit: 'contain', height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            {NAV_LINKS.map((link, i) => (
              <motion.button key={link.href}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => handleNav(link.href)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.875rem 2rem', color: active === link.href ? '#8B5CF6' : 'white', fontSize: '1.375rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', transition: 'color 0.2s', width: '100%', textAlign: 'center' }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: 0.45 }}
              onClick={() => handleNav('contact')}
              style={{ marginTop: '1.5rem', padding: '1rem 3rem', borderRadius: '0.875rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Book Free Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .lg-show { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
