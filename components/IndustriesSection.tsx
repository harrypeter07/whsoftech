'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, TrendingUp, ArrowRight, Globe2 } from 'lucide-react';

const industries = [
  { id: 'healthcare',    emoji: '🏥', name: 'Healthcare',    color: '#ef4444', title: 'Why Doctors & Clinics Need a Professional Website',  description: "In today's digital age, patients research online before booking. A professional website builds trust and fills your appointment calendar automatically.",       benefits: ['Online appointment booking system','Showcase specializations & services','Display patient testimonials & reviews','Emergency contact & GPS location','Medical blog for patient education','Insurance & payment information'],         outcomes: ['3x more appointments','Better patient trust & credibility','Higher local visibility on Google'] },
  { id: 'hotel',         emoji: '🏨', name: 'Hotel',         color: '#f59e0b', title: 'Why Hotels Need a Direct Booking Website',            description: 'Stop paying OTA commissions. A direct booking website gives you full control of revenue, guest data, and brand experience.',                                   benefits: ['Direct room booking engine','Virtual room tours & gallery','Restaurant & amenities showcase','Event & wedding inquiry forms','Loyalty program integration','Multi-language & currency support'],                                   outcomes: ['40% reduction in OTA commission','More direct bookings daily','Better guest satisfaction scores'] },
  { id: 'ecommerce',     emoji: '🛒', name: 'E-Commerce',    color: '#10b981', title: 'Why E-Commerce Businesses Need a Custom Store',       description: 'Own your customer relationships. A custom store gives you better margins, data ownership, and unlimited growth potential.',                                    benefits: ['Full-featured online store','Inventory management system','Multiple payment gateways (UPI, card, EMI)','Customer loyalty & rewards programs','Advanced analytics dashboard','SEO & marketing automation'],                          outcomes: ['2x revenue growth in 6 months','Higher profit margins','Reduced marketplace dependency'] },
  { id: 'restaurant',    emoji: '🍽️', name: 'Restaurant',    color: '#f97316', title: 'Why Restaurants Need a Digital Presence',            description: 'From online ordering to table reservations — a restaurant website transforms your dining business and increases revenue significantly.',                       benefits: ['Online ordering & delivery system','Table reservation management','Digital menu with food photos','Customer review showcase','Special offers & event promotions','WhatsApp ordering integration'],                                  outcomes: ['40% more online orders','Reduced no-shows significantly','Increased customer loyalty & repeats'] },
  { id: 'school',        emoji: '🏫', name: 'School',        color: '#06b6d4', title: 'Why Schools Need a Modern Website',                  description: 'Parents choose schools that look professional and trustworthy online. A modern website builds credibility and simplifies administration.',                     benefits: ['Online admission & enrollment forms','Student & parent portals','Academic calendar & event updates','Fee payment integration','Gallery & achievement showcase','Staff & faculty profiles'],                                        outcomes: ['More admission inquiries','Better parent engagement','Streamlined school administration'] },
  { id: 'college',       emoji: '🎓', name: 'College',       color: '#8b5cf6', title: 'Why Colleges Need a Premium Website',                description: 'Students compare colleges online before applying. A professional website significantly improves your enrollment rate.',                                       benefits: ['Online application & admission portal','Course & program catalog','Virtual campus tours','Alumni network integration','Placement record showcase','Research & publication display'],                                              outcomes: ['Higher enrollment rate','Better student retention','Stronger institutional brand'] },
  { id: 'coaching',      emoji: '📚', name: 'Coaching',      color: '#3b82f6', title: 'Why Coaching Institutes Need a Website',             description: 'Parents research coaching institutes before enrolling. A professional website showcasing results dramatically increases enrollments.',                        benefits: ['Online enrollment & registration','Live & recorded class access','Study material download portal','Result & success stories display','Batch schedule & fee structure','Demo class booking system'],                                outcomes: ['More enrollments & leads','Better student retention rates','Premium brand perception'] },
  { id: 'lawyer',        emoji: '⚖️', name: 'Legal',         color: '#f59e0b', title: 'Why Lawyers & Law Firms Need a Website',            description: 'Clients facing legal issues search online first. A professional legal website builds authority and generates qualified client inquiries.',                     benefits: ['Practice area showcasing','Consultation booking system','Legal blog & resource articles','Client testimonials display','Attorney profiles & credentials','Emergency legal help contact'],                                         outcomes: ['More qualified consultations','Better case value & quality','Stronger legal authority online'] },
  { id: 'builder',       emoji: '🏗️', name: 'Builder',       color: '#f97316', title: 'Why Builders & Contractors Need a Website',         description: 'Showcase your completed projects and build trust with potential clients. A professional website is your best sales tool in construction.',                    benefits: ['Portfolio & project showcase','Client testimonials & reviews','Quote & estimate request forms','Material & service catalog','Before/after project galleries','Safety certifications display'],                                    outcomes: ['More project inquiries','Higher average project value','Stronger contractor brand'] },
  { id: 'realestate',    emoji: '🏠', name: 'Real Estate',   color: '#10b981', title: 'Why Real Estate Agents Need a Website',              description: 'Property buyers start their search online. A real estate website with listings and virtual tours dramatically increases sales.',                              benefits: ['Property listing management','Virtual property tours (3D)','Mortgage calculator tools','Neighborhood & locality info','Buyer & seller resources','Automated lead capture forms'],                                                 outcomes: ['150% more qualified leads','Faster property closings','Better buyer engagement'] },
  { id: 'manufacturing', emoji: '🏭', name: 'Manufacturing', color: '#8b5cf6', title: 'Why Manufacturers Need a Digital Presence',          description: 'B2B buyers research manufacturers extensively online. A professional website wins large contracts over competitors.',                                          benefits: ['Digital product & parts catalog','Certification & compliance display','Bulk inquiry & RFQ system','Manufacturing capability showcase','Partner & distributor portal','Quality assurance information'],                            outcomes: ['More B2B inquiries & RFQs','Larger enterprise contract wins','Better supplier credibility'] },
  { id: 'automobile',    emoji: '🚗', name: 'Automobile',    color: '#06b6d4', title: 'Why Auto Businesses Need a Website',                 description: 'Car buyers research extensively online before visiting. A professional auto website drives more showroom walk-ins.',                                         benefits: ['Vehicle inventory showcase','EMI calculator integration','Test drive booking system','Service appointment scheduling','Vehicle comparison tools','Finance & insurance inquiry forms'],                                            outcomes: ['More showroom walk-ins','Better lead quality','Higher vehicle sales numbers'] },
  { id: 'salon',         emoji: '💆', name: 'Salon & Spa',   color: '#ec4899', title: 'Why Salons & Spas Need a Website',                  description: 'Customers choose salons based on portfolio and reviews. A modern salon website fills your calendar and reduces no-shows.',                                    benefits: ['Online appointment booking','Service menu & pricing display','Before/after transformation gallery','Staff specialist profiles','Loyalty program integration','Gift voucher & package sales'],                                    outcomes: ['Fully booked appointment calendar','Significant reduction in no-shows','Higher average spend per client'] },
  { id: 'gym',           emoji: '💪', name: 'Gym & Fitness', color: '#10b981', title: 'Why Gyms & Fitness Centers Need a Website',         description: 'Fitness customers compare gyms online before joining. A professional website with class schedules drives more signups.',                                    benefits: ['Membership plan management','Class & schedule booking system','Trainer profiles & credentials','Progress tracking portal','Diet & workout resources','Challenge & fitness event marketing'],                                     outcomes: ['More memberships sold monthly','Better member retention rates','Higher lifetime member value'] },
  { id: 'travel',        emoji: '✈️', name: 'Travel Agency', color: '#3b82f6', title: 'Why Travel Agencies Need a Website',                description: 'Travelers research and book trips entirely online. A travel website with package showcases captures high-intent customers.',                                  benefits: ['Tour package showcase & catalog','Online booking & payment processing','Destination guides & travel blogs','Customer itinerary tracking portal','Group travel inquiry system','Visa information & resources'],                   outcomes: ['More online tour bookings','Higher average package value','Better customer loyalty & referrals'] },
  { id: 'corporate',     emoji: '🏢', name: 'Corporate',     color: '#db2777', title: 'Why Corporates Need a Premium Website',              description: 'Enterprise clients judge capability by your digital presence. A premium corporate website builds credibility and opens high-value doors.',                   benefits: ['Company profile & capabilities','Service portfolio showcase','Case studies & measurable results','Leadership team profiles','Investor relations section','Career portal & HR integration'],                                      outcomes: ['Better enterprise deal wins','Stronger employer brand','More partnership opportunities'] },
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
    <section id="industries" style={{ background: '#0a1628', padding: '6rem 0', borderTop: '1px solid rgba(59,130,246,0.08)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label"><Globe2 size={12} /> Industries We Serve</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#e2e8ff', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Solutions for <span className="grad-blue">Every Industry</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Click your industry to see exactly how we transform businesses like yours.
          </p>
        </motion.div>

        {/* Industry cell grid */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.625rem' }}>
            {industries.map((ind, i) => (
              <motion.button
                key={ind.id}
                onClick={() => handleSelect(ind)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, type: 'spring', stiffness: 300, damping: 24 }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '0.4rem', padding: '1rem 0.5rem', borderRadius: '14px',
                  background: selected.id === ind.id ? `${ind.color}18` : 'rgba(15,35,65,0.75)',
                  border: selected.id === ind.id ? `1.5px solid ${ind.color}60` : '1px solid rgba(59,130,246,0.18)',
                  cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
                  boxShadow: selected.id === ind.id ? `0 4px 20px ${ind.color}20` : 'none',
                }}
              >
                <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{ind.emoji}</span>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.3,
                  color: selected.id === ind.id ? ind.color : '#94a3b8',
                  transition: 'color 0.2s', letterSpacing: '0.01em',
                }}>
                  {ind.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content card */}
        <div ref={contentRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              style={{
                background: 'linear-gradient(145deg, rgba(15,35,65,0.95) 0%, rgba(6,12,28,0.95) 100%)',
                border: `1px solid ${selected.color}35`,
                borderRadius: '22px', padding: '2.5rem',
                position: 'relative', overflow: 'hidden',
                boxShadow: `0 0 60px ${selected.color}10, 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Top color accent bar */}
              <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '2px', background: `linear-gradient(90deg, transparent, ${selected.color}, transparent)`, borderRadius: '99px' }} />
              {/* Bg glow blob */}
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: `radial-gradient(circle, ${selected.color}10, transparent 70%)`, pointerEvents: 'none' }} />

              {/* Icon + name row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px', flexShrink: 0,
                  background: `${selected.color}18`, border: `1.5px solid ${selected.color}45`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem',
                  boxShadow: `0 8px 24px ${selected.color}20`,
                }}>
                  {selected.emoji}
                </div>
                <div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: selected.color, letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Industry Focus</div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#e2e8ff', letterSpacing: '-0.02em' }}>{selected.name}</div>
                </div>
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#c7d2fe', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {selected.title}
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '2rem' }}>
                {selected.description}
              </p>

              {/* Features + Outcomes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.65rem', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>Key Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {selected.benefits.map((b) => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        <CheckCircle2 size={13} style={{ color: selected.color, flexShrink: 0, marginTop: '2px' }} />{b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f472b6', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>Business Outcomes</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {selected.outcomes.map((o) => (
                      <div key={o} style={{
                        display: 'flex', alignItems: 'center', gap: '0.625rem',
                        padding: '0.625rem 0.875rem', borderRadius: '10px',
                        background: `${selected.color}0e`, border: `1px solid ${selected.color}22`,
                      }}>
                        <TrendingUp size={13} style={{ color: selected.color, flexShrink: 0 }} />
                        <span style={{ color: '#e2e8ff', fontSize: '0.83rem', fontWeight: 600 }}>{o}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      width: '100%', padding: '0.8rem 1.25rem', borderRadius: '12px',
                      background: `linear-gradient(135deg, ${selected.color}, ${selected.color}cc)`,
                      color: 'white', fontWeight: 700, fontSize: '0.875rem',
                      border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      transition: 'all 0.25s ease', boxShadow: `0 6px 24px ${selected.color}38`,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${selected.color}50`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 24px ${selected.color}38`; }}
                  >
                    Get a Solution for {selected.name} <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
