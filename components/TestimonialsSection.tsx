'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'Rajesh Sharma', role: 'Director', company: 'Sharma Multispecialty Clinic', text: 'WHS SoftTech transformed our clinic\'s digital presence completely. Our online appointments tripled within 3 months of launch. The team understood healthcare requirements perfectly.', rating: 5, avatar: 'RS', color: '#8B5CF6' },
  { name: 'Priya Mehta', role: 'Founder', company: 'LearnBridge Academy', text: 'Our LMS platform handles 5,000+ students seamlessly. The live class feature, assignment management, and progress tracking work flawlessly. Incredible work at a fair price.', rating: 5, avatar: 'PM', color: '#06B6D4' },
  { name: 'Arjun Patel', role: 'CEO', company: 'ShopMax Retail', text: 'Revenue doubled in 6 months after our e-commerce launch. The custom inventory system and analytics dashboard have been game-changers for our operations.', rating: 5, avatar: 'AP', color: '#10B981' },
  { name: 'Sunita Verma', role: 'Principal', company: 'Vidya International School', text: 'Our school website has completely modernized how we handle admissions. Online fee payment, parent portals, and the gallery showcase have received incredible feedback.', rating: 5, avatar: 'SV', color: '#F59E0B' },
  { name: 'Karan Malhotra', role: 'MD', company: 'PropVista Real Estate', text: 'The real estate platform with virtual tours and automated lead capture has been outstanding. We generate 150% more qualified leads than before. Highly recommended.', rating: 5, avatar: 'KM', color: '#EC4899' },
  { name: 'Deepak Joshi', role: 'Owner', company: 'AutoEdge Showroom', text: 'Our AI chatbot handles 200+ customer queries daily without any human intervention. Test drive bookings are up 80%. WHS SoftTech delivered beyond our expectations.', rating: 5, avatar: 'DJ', color: '#EF4444' },
];

const ALL = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const SPEED = 0.9; // Increased from 0.5

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 3;

    const animate = () => {
      if (!pausedRef.current && !isDragging.current) {
        posRef.current -= SPEED;
        if (Math.abs(posRef.current) >= totalWidth) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Drag / pointer handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 3;
    let next = dragStartPos.current + delta;
    // Wrap
    if (next > 0) next = -totalWidth + next;
    if (Math.abs(next) > totalWidth) next = 0;
    posRef.current = next;
    track.style.transform = `translateX(${next}px)`;
  };

  const onPointerUp = () => { isDragging.current = false; };

  return (
    <section style={{ background: 'rgba(16,24,39,0.25)', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', marginBottom: '3.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Client Reviews</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Loved by{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our Clients</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            Don&apos;t take our word for it — hear from the businesses we&apos;ve helped grow.
          </p>
        </motion.div>
      </div>

      {/* Drag hint */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span style={{ color: '#94A3B8', fontSize: '0.75rem', letterSpacing: '0.05em' }}>← Drag to scroll →</span>
      </div>

      {/* Scrolling carousel */}
      <div style={{ position: 'relative' }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, rgba(7,11,20,1), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, rgba(7,11,20,1), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ display: 'flex', overflow: 'hidden', padding: '1rem 0', cursor: 'grab', userSelect: 'none' }}>
          <div ref={trackRef} style={{ display: 'flex', gap: '1.25rem', willChange: 'transform' }}>
            {ALL.map((t, i) => (
              <div key={i} style={{ width: '340px', flexShrink: 0, background: 'rgba(16,24,39,0.9)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', padding: '1.75rem', pointerEvents: 'none' }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, si) => <Star key={si} size={14} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: `${t.color}20`, border: `1px solid ${t.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: t.color, flexShrink: 0 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
