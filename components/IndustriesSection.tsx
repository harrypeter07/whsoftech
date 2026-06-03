'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

const industries = [
  { id: 'doctor', emoji: '🏥', name: 'Healthcare', title: 'Why Doctors & Clinics Need a Professional Website', description: "In today's digital age, patients research online before booking. A professional website builds trust and fills your appointment calendar automatically.", benefits: ['Online appointment booking system', 'Showcase specializations & services', 'Display patient testimonials & reviews', 'Emergency contact & GPS location', 'Medical blog for patient education', 'Insurance & payment information'], outcomes: ['3x more appointments', 'Better patient trust & credibility', 'Higher local visibility on Google'] },
  { id: 'hotel', emoji: '🏨', name: 'Hotel', title: 'Why Hotels Need a Direct Booking Website', description: 'Stop paying OTA commissions. A direct booking website gives you full control of revenue, guest data, and brand experience.', benefits: ['Direct room booking engine', 'Virtual room tours & gallery', 'Restaurant & amenities showcase', 'Event & wedding inquiry forms', 'Loyalty program integration', 'Multi-language & currency support'], outcomes: ['40% reduction in OTA commission', 'More direct bookings daily', 'Better guest satisfaction scores'] },
  { id: 'ecommerce', emoji: '🛒', name: 'E-Commerce', title: 'Why E-Commerce Businesses Need a Custom Store', description: 'Own your customer relationships. A custom store gives you better margins, data ownership, and unlimited growth potential.', benefits: ['Full-featured online store', 'Inventory management system', 'Multiple payment gateways (UPI, card, EMI)', 'Customer loyalty & rewards programs', 'Advanced analytics dashboard', 'SEO & marketing automation'], outcomes: ['2x revenue growth in 6 months', 'Higher profit margins', 'Reduced marketplace dependency'] },
  { id: 'restaurant', emoji: '🍽', name: 'Restaurant', title: 'Why Restaurants Need a Digital Presence', description: 'From online ordering to table reservations — a restaurant website transforms your dining business and increases revenue significantly.', benefits: ['Online ordering & delivery system', 'Table reservation management', 'Digital menu with food photos', 'Customer review showcase', 'Special offers & event promotions', 'WhatsApp ordering integration'], outcomes: ['40% more online orders', 'Reduced no-shows significantly', 'Increased customer loyalty & repeats'] },
  { id: 'school', emoji: '🏫', name: 'School', title: 'Why Schools Need a Modern Website', description: 'Parents choose schools that look professional and trustworthy online. A modern website builds credibility and simplifies administration.', benefits: ['Online admission & enrollment forms', 'Student & parent portals', 'Academic calendar & event updates', 'Fee payment integration', 'Gallery & achievement showcase', 'Staff & faculty profiles'], outcomes: ['More admission inquiries', 'Better parent engagement', 'Streamlined school administration'] },
  { id: 'college', emoji: '🎓', name: 'College', title: 'Why Colleges Need a Premium Website', description: 'Students compare colleges online before applying. A professional website significantly improves your enrollment rate.', benefits: ['Online application & admission portal', 'Course & program catalog', 'Virtual campus tours', 'Alumni network integration', 'Placement record showcase', 'Research & publication display'], outcomes: ['Higher enrollment rate', 'Better student retention', 'Stronger institutional brand'] },
  { id: 'coaching', emoji: '📚', name: 'Coaching', title: 'Why Coaching Institutes Need a Website', description: 'Parents research coaching institutes before enrolling. A professional website showcasing results dramatically increases enrollments.', benefits: ['Online enrollment & registration', 'Live & recorded class access', 'Study material download portal', 'Result & success stories display', 'Batch schedule & fee structure', 'Demo class booking system'], outcomes: ['More enrollments & leads', 'Better student retention rates', 'Premium brand perception'] },
  { id: 'lawyer', emoji: '⚖', name: 'Lawyer', title: 'Why Lawyers & Law Firms Need a Website', description: 'Clients facing legal issues search online first. A professional legal website builds authority and generates qualified client inquiries.', benefits: ['Practice area showcasing', 'Consultation booking system', 'Legal blog & resource articles', 'Client testimonials display', 'Attorney profiles & credentials', 'Emergency legal help contact'], outcomes: ['More qualified consultations', 'Better case value & quality', 'Stronger legal authority online'] },
  { id: 'builder', emoji: '🏗', name: 'Builder', title: 'Why Builders & Contractors Need a Website', description: 'Showcase your completed projects and build trust with potential clients. A professional website is your best sales tool in construction.', benefits: ['Portfolio & project showcase', 'Client testimonials & reviews', 'Quote & estimate request forms', 'Material & service catalog', 'Before/after project galleries', 'Safety certifications display'], outcomes: ['More project inquiries', 'Higher average project value', 'Stronger contractor brand'] },
  { id: 'realestate', emoji: '🏠', name: 'Real Estate', title: 'Why Real Estate Agents Need a Website', description: 'Property buyers start their search online. A real estate website with listings and virtual tours dramatically increases sales.', benefits: ['Property listing management', 'Virtual property tours (3D)', 'Mortgage calculator tools', 'Neighborhood & locality info', 'Buyer & seller resources', 'Automated lead capture forms'], outcomes: ['150% more qualified leads', 'Faster property closings', 'Better buyer engagement'] },
  { id: 'manufacturing', emoji: '🏭', name: 'Manufacturing', title: 'Why Manufacturers Need a Digital Presence', description: 'B2B buyers research manufacturers extensively online. A professional website wins large contracts over competitors.', benefits: ['Digital product & parts catalog', 'Certification & compliance display', 'Bulk inquiry & RFQ system', 'Manufacturing capability showcase', 'Partner & distributor portal', 'Quality assurance information'], outcomes: ['More B2B inquiries & RFQs', 'Larger enterprise contract wins', 'Better supplier credibility'] },
  { id: 'automobile', emoji: '🚗', name: 'Automobile', title: 'Why Auto Businesses Need a Website', description: 'Car buyers research extensively online before visiting. A professional auto website drives more showroom walk-ins.', benefits: ['Vehicle inventory showcase', 'EMI calculator integration', 'Test drive booking system', 'Service appointment scheduling', 'Vehicle comparison tools', 'Finance & insurance inquiry forms'], outcomes: ['More showroom walk-ins', 'Better lead quality', 'Higher vehicle sales numbers'] },
  { id: 'salon', emoji: '💇', name: 'Salon & Spa', title: 'Why Salons & Spas Need a Website', description: 'Customers choose salons based on portfolio and reviews. A modern salon website fills your calendar and reduces no-shows.', benefits: ['Online appointment booking', 'Service menu & pricing display', 'Before/after transformation gallery', 'Staff specialist profiles', 'Loyalty program integration', 'Gift voucher & package sales'], outcomes: ['Fully booked appointment calendar', 'Significant reduction in no-shows', 'Higher average spend per client'] },
  { id: 'gym', emoji: '🏋', name: 'Gym & Fitness', title: 'Why Gyms & Fitness Centers Need a Website', description: 'Fitness customers compare gyms online before joining. A professional website with class schedules drives more signups.', benefits: ['Membership plan management', 'Class & schedule booking system', 'Trainer profiles & credentials', 'Progress tracking portal', 'Diet & workout resources', 'Challenge & fitness event marketing'], outcomes: ['More memberships sold monthly', 'Better member retention rates', 'Higher lifetime member value'] },
  { id: 'travel', emoji: '✈', name: 'Travel Agency', title: 'Why Travel Agencies Need a Website', description: 'Travelers research and book trips entirely online. A travel website with package showcases captures high-intent customers.', benefits: ['Tour package showcase & catalog', 'Online booking & payment processing', 'Destination guides & travel blogs', 'Customer itinerary tracking portal', 'Group travel inquiry system', 'Visa information & resources'], outcomes: ['More online tour bookings', 'Higher average package value', 'Better customer loyalty & referrals'] },
  { id: 'corporate', emoji: '🏢', name: 'Corporate', title: 'Why Corporates Need a Premium Website', description: 'Enterprise clients judge capability by your digital presence. A premium corporate website builds credibility and opens high-value doors.', benefits: ['Company profile & capabilities', 'Service portfolio showcase', 'Case studies & measurable results', 'Leadership team profiles', 'Investor relations section', 'Career portal & HR integration'], outcomes: ['Better enterprise deal wins', 'Stronger employer brand', 'More partnership opportunities'] },
];

export function IndustriesSection() {
  const [selected, setSelected] = useState(industries[0]);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelect = (ind: typeof industries[0]) => {
    setSelected(ind);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  };

  return (
    <section id="industries" style={{ background: '#070B14', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', color: '#06B6D4', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Industries We Serve
          </span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Solutions for <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Every Industry</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto' }}>
            Click your industry to see exactly how we transform businesses like yours.
          </p>
        </motion.div>

        {/* Layout: Industry pills (top on mobile, left on desktop) + Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

          {/* Industry grid */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {industries.map((ind) => (
                <motion.button key={ind.id} onClick={() => handleSelect(ind)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: '0.375rem', padding: '0.875rem 0.5rem', borderRadius: '0.875rem',
                    background: selected.id === ind.id ? 'rgba(139,92,246,0.14)' : 'rgba(16,24,39,0.8)',
                    border: selected.id === ind.id ? '1.5px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}>
                  <span style={{ fontSize: '1.375rem', lineHeight: 1 }}>{ind.emoji}</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: selected.id === ind.id ? '#8B5CF6' : '#94A3B8', textAlign: 'center', lineHeight: 1.3, transition: 'color 0.2s' }}>{ind.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content area */}
          <div ref={contentRef}>
            <AnimatePresence mode="wait">
              <motion.div key={selected.id}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ background: 'rgba(16,24,39,0.85)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                {/* BG glow */}
                <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(139,92,246,0.07), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '0.875rem', background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.15))', border: '1px solid rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.625rem', flexShrink: 0 }}>{selected.emoji}</div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#8B5CF6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Industry Focus</div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>{selected.name}</div>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.35rem', fontWeight: 700, color: 'white', marginBottom: '0.875rem', lineHeight: 1.3 }}>{selected.title}</h3>
                <p style={{ color: '#94A3B8', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9375rem' }}>{selected.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                  {/* Benefits */}
                  <div>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Key Features</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {selected.benefits.map((b) => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: '#CBD5E1', fontSize: '0.875rem', lineHeight: 1.5 }}>
                          <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Outcomes */}
                  <div>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#06B6D4', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Business Outcomes</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {selected.outcomes.map((o) => (
                        <div key={o} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem', borderRadius: '0.625rem', background: 'rgba(6,182,212,0.07)', border: '1px solid rgba(6,182,212,0.15)' }}>
                          <TrendingUp size={15} color="#06B6D4" />
                          <span style={{ color: '#E2E8F0', fontSize: '0.875rem', fontWeight: 500 }}>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 600, fontSize: '0.9375rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'inherit' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(139,92,246,0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                  Get a Solution for {selected.name} <ArrowRight size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
