'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'Rajesh Sharma',  role: 'Director',  company: 'Sharma Multispecialty Clinic',  text: "WHS SoftTech transformed our clinic's digital presence completely. Our online appointments tripled within 3 months of launch. The team understood healthcare requirements perfectly.", rating: 5, avatar: 'RS', color: '#3b82f6' },
  { name: 'Priya Mehta',    role: 'Founder',   company: 'LearnBridge Academy',            text: 'Our LMS platform handles 5,000+ students seamlessly. The live class feature, assignment management, and progress tracking work flawlessly. Incredible work at a fair price.', rating: 5, avatar: 'PM', color: '#db2777' },
  { name: 'Arjun Patel',    role: 'CEO',       company: 'ShopMax Retail',                 text: 'Revenue doubled in 6 months after our e-commerce launch. The custom inventory system and analytics dashboard have been game-changers for our operations.', rating: 5, avatar: 'AP', color: '#10b981' },
  { name: 'Sunita Verma',   role: 'Principal', company: 'Vidya International School',     text: 'Our school website has completely modernized how we handle admissions. Online fee payment, parent portals, and the gallery showcase have received incredible feedback.', rating: 5, avatar: 'SV', color: '#f59e0b' },
  { name: 'Karan Malhotra', role: 'MD',        company: 'PropVista Real Estate',          text: 'The real estate platform with virtual tours and automated lead capture has been outstanding. We generate 150% more qualified leads than before. Highly recommended.', rating: 5, avatar: 'KM', color: '#f472b6' },
  { name: 'Deepak Joshi',   role: 'Owner',     company: 'AutoEdge Showroom',              text: 'Our AI chatbot handles 200+ customer queries daily without any human intervention. Test drive bookings are up 80%. WHS SoftTech delivered beyond our expectations.', rating: 5, avatar: 'DJ', color: '#06b6d4' },
];

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div style={{ width: '320px', flexShrink: 0, background: '#0f2341', border: `1px solid ${t.color}25`, borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', opacity: 0.08 }}>
        <Quote size={48} color={t.color} fill={t.color} />
      </div>
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.125rem' }}>
        {Array.from({ length: t.rating }).map((_, si) => <Star key={si} size={14} fill="#f59e0b" color="#f59e0b" />)}
      </div>
      <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: `${t.color}18`, border: `2px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: t.color, flexShrink: 0 }}>
          {t.avatar}
        </div>
        <div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#e2e8ff' }}>{t.name}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section style={{ background: '#0a1628', padding: '6rem 0', borderTop: '1px solid rgba(219,39,119,0.08)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label">Client Reviews</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#e2e8ff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Loved by <span className="grad">Our Clients</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto' }}>
            Don&apos;t take our word for it — hear from the businesses we&apos;ve helped grow.
          </p>
        </motion.div>
      </div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #0a1628, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #0a1628, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <motion.div style={{ display: 'flex', gap: '1.5rem', width: 'max-content', padding: '1rem 1.5rem' }}
          animate={{ x: ['0%', '-50%'] }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}>
          {doubled.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </motion.div>
      </div>
    </section>
  );
}
