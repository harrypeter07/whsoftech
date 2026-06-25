'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle, Mail } from 'lucide-react';

export function FloatingCallButton() {
  const [open, setOpen] = useState(false);
  const cardStyle = (borderColor: string): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: '0.625rem',
    padding: '0.625rem 1rem', borderRadius: '0.75rem',
    background: 'rgba(15,35,65,0.96)', border: `1px solid ${borderColor}`,
    color: '#e2e8ff', fontSize: '0.85rem', fontWeight: 600,
    textDecoration: 'none', backdropFilter: 'blur(16px)',
    whiteSpace: 'nowrap' as const, boxShadow: '0 8px 30px rgba(219,39,119,0.12)',
  });

  return (
    <div style={{ position: 'fixed', bottom: '1.75rem', left: '1.75rem', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.625rem' }}>
      <AnimatePresence>
        {open && (
          <>
            <motion.a href="mailto:whsofttech26@gmail.com"
              initial={{ opacity: 0, x: -20, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ delay: 0.05, duration: 0.25 }} style={cardStyle('rgba(219,39,119,0.25)')}>
              <Mail size={16} color="#f472b6" /> whsofttech26@gmail.com
            </motion.a>
            <motion.a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ delay: 0.1, duration: 0.25 }} style={cardStyle('rgba(37,211,102,0.3)')}>
              <MessageCircle size={16} color="#25D366" /> WhatsApp Us
            </motion.a>
            <motion.a href="tel:+919876543210"
              initial={{ opacity: 0, x: -20, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ delay: 0.15, duration: 0.25 }} style={cardStyle('rgba(59,130,246,0.25)')}>
              <Phone size={16} color="#60a5fa" /> +91 98765 43210
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setOpen(!open)} animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        style={{ width: '52px', height: '52px', borderRadius: '50%', background: open ? 'rgba(219,39,119,0.08)' : 'linear-gradient(135deg, #db2777, #be185d)', border: open ? '1px solid rgba(219,39,119,0.3)' : 'none', boxShadow: open ? 'none' : '0 4px 20px rgba(219,39,119,0.5)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Contact options">
        {open ? <X size={22} color="#f472b6" /> : <Phone size={22} />}
      </motion.button>

      {!open && (
        <motion.div animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          style={{ position: 'absolute', bottom: 0, left: 0, width: '52px', height: '52px', borderRadius: '50%', border: '2px solid rgba(219,39,119,0.4)', pointerEvents: 'none' }} />
      )}
    </div>
  );
}
