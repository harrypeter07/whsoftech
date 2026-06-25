'use client';

import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, TrendingUp, X, Globe2, ArrowRight, Zap } from 'lucide-react';

const GlobeGL = dynamic(() => import('react-globe.gl'), { ssr: false });

interface Industry {
  id: string; name: string; emoji: string; lat: number; lng: number; color: string;
  title: string; description: string; benefits: string[]; outcomes: string[];
}
interface GlobePoint { lat: number; lng: number; id: string; name: string; emoji: string; color: string; industry: Industry; }
interface RingDatum  { lat: number; lng: number; maxR: number; propagationSpeed: number; repeatPeriod: number; color: string; }
interface ArcDatum   { startLat: number; startLng: number; endLat: number; endLng: number; color: string[]; stroke: number; }

const INDUSTRIES: Industry[] = [
  { id: 'healthcare',   name: 'Healthcare',    emoji: '🏥', lat: 28.6,  lng: 77.2, color: '#ef4444', title: 'Why Healthcare Needs a Digital Presence',        description: 'Patients now search for doctors and clinics online before visiting. A robust healthcare platform builds trust, drives appointments, and streamlines operations.',            benefits: ['Online appointment booking','Patient record management','Telemedicine integration','Prescription & lab reports portal','Doctor profile pages','Health blog & SEO content'],            outcomes: ['300% more appointments','Paperless patient flow','Higher patient trust'] },
  { id: 'education',   name: 'Education',     emoji: '🎓', lat: 19.0,  lng: 72.8, color: '#3b82f6', title: 'Why Education Needs a Digital Presence',           description: 'Students and parents choose institutions based on online presence. A powerful EdTech platform increases enrollments and enhances learning outcomes.',                            benefits: ['Live & recorded classes','Student progress dashboard','Fee payment portal','Assignment submission','Parent communication portal','Certificate generation'],                      outcomes: ['10,000+ students managed','40% more enrollments','Paperless operations'] },
  { id: 'ecommerce',   name: 'E-Commerce',    emoji: '🛒', lat: 12.9,  lng: 77.6, color: '#10b981', title: 'Why E-Commerce Needs a Digital Presence',          description: 'Online shopping is growing 30% annually. A feature-rich store with smooth checkout converts browsers into buyers and keeps them coming back.',                                  benefits: ['Custom product catalog','Multiple payment gateways','Inventory management','Order tracking system','Customer loyalty program','Mobile-first shopping'],                         outcomes: ['4x revenue growth','Cart abandonment reduced','Faster order processing'] },
  { id: 'realestate',  name: 'Real Estate',   emoji: '🏠', lat: 22.5,  lng: 88.3, color: '#f59e0b', title: 'Why Real Estate Needs a Digital Presence',         description: 'Property buyers start their search online. A real estate website with listings and virtual tours dramatically increases sales and lead quality.',                              benefits: ['Property listing management','Virtual property tours','Mortgage calculator','Neighborhood info','Buyer & seller resources','Automated lead capture'],                           outcomes: ['150% more qualified leads','Faster property closings','Better buyer engagement'] },
  { id: 'restaurant',  name: 'Restaurant',    emoji: '🍽️', lat: 17.4,  lng: 78.5, color: '#f97316', title: 'Why Restaurants Need a Digital Presence',          description: 'Food lovers discover restaurants online. A great restaurant website with online ordering increases footfall, delivery orders, and repeat visits.',                             benefits: ['Online menu management','Table reservation system','Home delivery integration','Loyalty & offers system','Review management','QR code menu'],                                   outcomes: ['60% more online orders','Zero no-shows','Better review score'] },
  { id: 'automobile',  name: 'Automobile',    emoji: '🚗', lat: 13.1,  lng: 80.3, color: '#06b6d4', title: 'Why Automobile Businesses Need a Digital Presence', description: 'Car buyers research extensively online before visiting a showroom. A digital platform with inventory, EMI calculators, and AI chat closes deals faster.',                    benefits: ['Vehicle inventory display','EMI calculator','Test drive booking','Service appointment portal','AI chatbot for queries','Insurance & finance tools'],                             outcomes: ['80% queries handled by AI','Higher showroom visits','2x faster decisions'] },
  { id: 'manufacturing',name: 'Manufacturing', emoji: '🏭', lat: 23.0, lng: 72.6, color: '#8b5cf6', title: 'Why Manufacturers Need a Digital Presence',         description: 'B2B buyers research manufacturers extensively online. A professional website wins large contracts over competitors without one.',                                               benefits: ['Digital product catalog','Certification display','B2B inquiry forms','Distributor portal','ISO & quality docs','Factory virtual tour'],                                          outcomes: ['More B2B inquiries','Faster contract closings','Pan-India reach'] },
  { id: 'salon',       name: 'Salon & Spa',   emoji: '💆', lat: 15.5,  lng: 73.8, color: '#ec4899', title: 'Why Salons & Spas Need a Digital Presence',        description: 'Customers look for top-rated salons online. A booking-enabled website with gallery and reviews fills your appointment slots automatically.',                                    benefits: ['Online appointment booking','Service menu showcase','Before/after gallery','Loyalty rewards program','Staff profiles & specialties','Automated reminders'],                     outcomes: ['60% drop in no-shows','24/7 booking capability','Loyal clientele growth'] },
  { id: 'gym',         name: 'Gym & Fitness', emoji: '💪', lat: 18.5,  lng: 73.9, color: '#10b981', title: 'Why Gyms & Fitness Studios Need a Digital Presence',description: 'Fitness enthusiasts choose gyms based on online reputation. A feature-rich platform with class scheduling retains members and attracts new ones.',                                benefits: ['Class schedule & booking','Member progress tracking','Personal trainer profiles','Diet plan portal','Fee & renewal management','Workout video library'],                          outcomes: ['Higher member retention','2x new member sign-ups','Streamlined operations'] },
  { id: 'travel',      name: 'Travel Agency', emoji: '✈️', lat: 26.9,  lng: 75.8, color: '#3b82f6', title: 'Why Travel Agencies Need a Digital Presence',       description: 'Travelers plan and book entirely online. A travel platform with packages, live pricing, and instant booking converts casual browsers into confirmed clients.',               benefits: ['Holiday package showcase','Real-time availability','Online booking & payment','Travel itinerary generator','Visa assistance portal','Customer testimonials'],                    outcomes: ['Direct booking increase','Less manual coordination','Higher average order value'] },
  { id: 'corporate',   name: 'Corporate',     emoji: '🏢', lat: 28.5,  lng: 77.1, color: '#db2777', title: 'Why Corporates Need a Digital Presence',            description: 'Enterprise clients judge companies by their digital presence. A professional corporate website establishes credibility, attracts talent, and wins B2B deals.',                 benefits: ['Company portfolio & case studies','Investor relations page','Career portal & job listings','Press & media section','Client portal login','Annual report downloads'],             outcomes: ['Higher brand authority','Top talent acquisition','Faster B2B conversions'] },
  { id: 'legal',       name: 'Legal',         emoji: '⚖️', lat: 23.2,  lng: 77.4, color: '#f59e0b', title: 'Why Law Firms Need a Digital Presence',             description: 'People search for lawyers online when they need legal help. A professional legal website builds trust, showcases expertise, and generates qualified leads.',                   benefits: ['Practice area pages','Attorney profiles','Case consultation form','Legal blog & resources','Client testimonials','Secure document portal'],                                      outcomes: ['More qualified leads','Higher client trust','Lower acquisition cost'] },
  { id: 'school',      name: 'School',        emoji: '🏫', lat: 30.7,  lng: 76.7, color: '#06b6d4', title: 'Why Schools Need a Digital Presence',               description: 'Parents choose schools based on online reputation and transparency. A school portal enhances parent engagement and simplifies administration.',                                  benefits: ['Admission enquiry portal','Fee payment system','Homework & notices board','Parent-teacher communication','Student performance tracker','Event gallery & calendar'],               outcomes: ['40% more admissions','Paperless admin','Stronger parent trust'] },
  { id: 'college',     name: 'College',       emoji: '🎒', lat: 26.8,  lng: 80.9, color: '#8b5cf6', title: 'Why Colleges Need a Digital Presence',              description: 'Students choose colleges based on online visibility. A robust college website with virtual tours and placements data wins the best students.',                                   benefits: ['Course & fee structure','Online admission form','Placement records portal','Faculty profiles','Campus virtual tour','Alumni network page'],                                     outcomes: ['More applications','Higher placement rate','Better rankings'] },
  { id: 'coaching',    name: 'Coaching',      emoji: '📚', lat: 25.4,  lng: 81.8, color: '#ef4444', title: 'Why Coaching Institutes Need a Digital Presence',   description: 'Students research coaching institutes extensively before enrolling. A powerful platform with demo classes and results attracts the best students.',                            benefits: ['Demo class videos','Batch & schedule info','Online test platform','Student result showcase','Fee & enrollment portal','Study material library'],                                 outcomes: ['3x more enrollments','Higher student success','Pan-India reach'] },
  { id: 'builder',     name: 'Builder',       emoji: '🏗️', lat: 20.0,  lng: 73.8, color: '#f97316', title: 'Why Builders Need a Digital Presence',              description: 'Home buyers research builders online before trusting them with crores. A credibility-building website with project portfolios converts serious buyers.',                       benefits: ['Project portfolio showcase','Unit availability & floor plans','Construction progress updates','RERA compliance display','EMI & loan calculator','Site visit booking'],           outcomes: ['More site visits booked','Higher buyer confidence','Faster project sell-out'] },
];

const INDIA = { lat: 20.5937, lng: 78.9629 };

export function GlobeIndustriesSection() {
  const globeRef  = useRef(null);
  const [selected,   setSelected]   = useState<Industry | null>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [globeSize,  setGlobeSize]  = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024)     setGlobeSize(Math.min(580, Math.floor(w * 0.44)));
      else if (w >= 640) setGlobeSize(Math.min(480, Math.floor(w * 0.82)));
      else               setGlobeSize(Math.min(370, Math.floor(w * 0.94)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const points = useMemo<GlobePoint[]>(() =>
    INDUSTRIES.map(ind => ({ lat: ind.lat, lng: ind.lng, id: ind.id, name: ind.name, emoji: ind.emoji, color: ind.color, industry: ind })), []);

  const ringsData = useMemo<RingDatum[]>(() => {
    if (!selected) return [];
    return [{ lat: selected.lat, lng: selected.lng, maxR: 5, propagationSpeed: 2, repeatPeriod: 900, color: selected.color }];
  }, [selected]);

  const arcsData = useMemo<ArcDatum[]>(() => {
    if (!selected) return [];
    return [{ startLat: INDIA.lat, startLng: INDIA.lng, endLat: selected.lat, endLng: selected.lng, color: ['rgba(255,255,255,0.05)', selected.color], stroke: 1.5 }];
  }, [selected]);

  const handlePointClick = useCallback((point: object) => {
    const p = point as GlobePoint;
    setSelected(p.industry);
    if (globeRef.current) (globeRef.current as { pointOfView: (o: object, d: number) => void }).pointOfView({ lat: p.lat, lng: p.lng, altitude: 1.5 }, 900);
  }, []);

  const handleGlobeReady = useCallback(() => {
    setGlobeReady(true);
    if (globeRef.current) (globeRef.current as { pointOfView: (o: object, d: number) => void }).pointOfView({ lat: 22, lng: 80, altitude: 2.1 }, 0);
  }, []);

  const selectIndustry = useCallback((ind: Industry) => {
    setSelected(ind);
    if (globeRef.current) (globeRef.current as { pointOfView: (o: object, d: number) => void }).pointOfView({ lat: ind.lat, lng: ind.lng, altitude: 1.5 }, 900);
  }, []);

  return (
    <section id="industries" style={{ background: '#060f1e', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background: dot grid + radial gradients */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(59,130,246,0.12) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(37,99,235,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 70% 50%, rgba(219,39,119,0.05) 0%, transparent 60%)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="s-label"><Globe2 size={12} /> Industries We Serve</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 800, color: '#e2e8ff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            <span className="grad-blue">16 Industries,</span>{' '}
            <span style={{ color: '#e2e8ff' }}>One Trusted Partner</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '530px', margin: '0 auto', lineHeight: 1.75 }}>
            Click any glowing marker on the globe to discover how WHS SoftTech builds tailored digital platforms for every sector.
          </p>
        </motion.div>

        {/* ── Globe + Panel layout ── */}
        <div className="globe-layout">

          {/* ── Globe side ── */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: `${globeSize || 480}px` }}>

            {/* Outer orbital ring 1 */}
            {globeSize > 0 && (
              <div style={{
                position: 'absolute', pointerEvents: 'none',
                width: `${globeSize * 1.28}px`, height: `${globeSize * 1.28}px`,
                borderRadius: '50%', border: '1px solid rgba(56,189,248,0.1)',
                animation: 'spin-slow 28s linear infinite',
              }}>
                <div style={{
                  position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'radial-gradient(circle, #7dd3fc, #0ea5e9)',
                  boxShadow: '0 0 10px #38bdf8, 0 0 20px rgba(56,189,248,0.5)',
                }} />
              </div>
            )}

            {/* Outer orbital ring 2 */}
            {globeSize > 0 && (
              <div style={{
                position: 'absolute', pointerEvents: 'none',
                width: `${globeSize * 1.52}px`, height: `${globeSize * 1.52}px`,
                borderRadius: '50%', border: '1px solid rgba(219,39,119,0.07)',
                animation: 'spin-slow 45s linear infinite reverse',
              }}>
                <div style={{
                  position: 'absolute', bottom: '-4px', right: '20%',
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'radial-gradient(circle, #f9a8d4, #db2777)',
                  boxShadow: '0 0 8px #db2777, 0 0 16px rgba(219,39,119,0.4)',
                }} />
              </div>
            )}

            {/* Dynamic glow behind globe */}
            <div style={{
              position: 'absolute',
              width: globeSize > 0 ? `${globeSize * 0.85}px` : '400px',
              height: globeSize > 0 ? `${globeSize * 0.85}px` : '400px',
              borderRadius: '50%',
              background: selected
                ? `radial-gradient(circle, ${selected.color}18 0%, rgba(37,99,235,0.08) 45%, transparent 70%)`
                : 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(37,99,235,0.07) 40%, transparent 70%)',
              transition: 'background 0.6s ease',
              pointerEvents: 'none',
            }} />

            {/* Loading overlay */}
            {(globeSize === 0 || !globeReady) && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', zIndex: 2 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '3px solid rgba(56,189,248,0.15)', borderTopColor: '#38bdf8', animation: 'spin-slow 0.75s linear infinite' }} />
                <p style={{ color: '#64748b', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Initializing Globe...</p>
              </div>
            )}

            {/* Globe */}
            {globeSize > 0 && (
              <div style={{ width: `${globeSize}px`, height: `${globeSize}px`, position: 'relative', zIndex: 1 }}>
                <GlobeGL
                  ref={globeRef as never}
                  width={globeSize}
                  height={globeSize}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  backgroundColor="rgba(0,0,0,0)"
                  atmosphereColor="#38bdf8"
                  atmosphereAltitude={0.28}

                  pointsData={points}
                  pointColor={(d: object) => (d as GlobePoint).color}
                  pointAltitude={0.07}
                  pointRadius={0.62}
                  pointResolution={16}
                  pointLabel={(d: object) => {
                    const p = d as GlobePoint;
                    return `<div style="background:rgba(6,12,28,0.93);border:1px solid ${p.color};border-radius:10px;padding:8px 14px;color:#fff;font-family:Inter,sans-serif;font-size:13px;font-weight:700;white-space:nowrap;backdrop-filter:blur(12px);box-shadow:0 8px 32px rgba(0,0,0,0.5),0 0 0 1px ${p.color}20">${p.emoji}&nbsp;<span style="color:${p.color}">${p.name}</span></div>`;
                  }}
                  onPointClick={handlePointClick}

                  ringsData={ringsData}
                  ringColor={(d: object) => (d as RingDatum).color}
                  ringMaxRadius={(d: object) => (d as RingDatum).maxR}
                  ringPropagationSpeed={(d: object) => (d as RingDatum).propagationSpeed}
                  ringRepeatPeriod={(d: object) => (d as RingDatum).repeatPeriod}

                  arcsData={arcsData}
                  arcColor={(d: object) => (d as ArcDatum).color}
                  arcAltitude={0.28}
                  arcStroke={(d: object) => (d as ArcDatum).stroke}
                  arcDashLength={0.45}
                  arcDashGap={0.12}
                  arcDashAnimateTime={1600}

                  labelsData={points}
                  labelLat={(d: object) => (d as GlobePoint).lat}
                  labelLng={(d: object) => (d as GlobePoint).lng}
                  labelText={(d: object) => (d as GlobePoint).emoji}
                  labelSize={1.5}
                  labelColor={() => 'rgba(255,255,255,0.88)'}
                  labelAltitude={0.09}
                  labelResolution={3}

                  autoRotate
                  autoRotateSpeed={0.45}
                  onGlobeReady={handleGlobeReady}
                />
              </div>
            )}

            {/* Hint badge */}
            {!selected && globeReady && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
                style={{
                  position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(6,12,28,0.88)', border: '1px solid rgba(56,189,248,0.22)',
                  borderRadius: '99px', padding: '0.45rem 1.1rem',
                  color: '#94a3b8', fontSize: '0.78rem', whiteSpace: 'nowrap',
                  backdropFilter: 'blur(16px)',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  zIndex: 3,
                }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', flexShrink: 0, animation: 'dot-blink 1.6s ease-in-out infinite' }} />
                Tap any glowing marker to explore
              </motion.div>
            )}
          </motion.div>

          {/* ── Info Panel side ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.15 }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '520px' }}>

            <AnimatePresence mode="wait">

              {/* ── Idle: industry grid ── */}
              {!selected && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                  style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.625rem', borderBottom: '1px solid rgba(59,130,246,0.15)' }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Select an Industry</p>
                    <span style={{ color: '#64748b', fontSize: '0.72rem', fontWeight: 600 }}>16 sectors</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
                    {INDUSTRIES.map((ind, i) => (
                      <motion.button
                        key={ind.id}
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.025, type: 'spring', stiffness: 320, damping: 24 }}
                        onClick={() => selectIndustry(ind)}
                        style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                          padding: '0.875rem 0.4rem', borderRadius: '12px',
                          background: 'rgba(15,40,80,0.7)',
                          border: '1px solid rgba(59,130,246,0.22)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                          cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease',
                          color: '#94a3b8', fontSize: '0.68rem', fontWeight: 600,
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = ind.color + '70';
                          el.style.background = `${ind.color}18`;
                          el.style.color = '#e2e8ff';
                          el.style.transform = 'translateY(-3px)';
                          el.style.boxShadow = `0 10px 28px ${ind.color}35, inset 0 1px 0 rgba(255,255,255,0.08)`;
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = 'rgba(59,130,246,0.22)';
                          el.style.background = 'rgba(15,40,80,0.7)';
                          el.style.color = '#94a3b8';
                          el.style.transform = 'translateY(0)';
                          el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)';
                        }}
                      >
                        <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{ind.emoji}</span>
                        <span style={{ textAlign: 'center', lineHeight: 1.3 }}>{ind.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Selected: info card ── */}
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

                  {/* Card */}
                  <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    background: 'linear-gradient(145deg, rgba(15,35,65,0.97) 0%, rgba(6,12,28,0.97) 100%)',
                    border: `1px solid ${selected.color}38`,
                    borderRadius: '22px', padding: '1.875rem',
                    backdropFilter: 'blur(28px)',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: `0 0 80px ${selected.color}14, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)`,
                  }}>

                    {/* Top color accent bar */}
                    <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: `linear-gradient(90deg, transparent, ${selected.color}, transparent)`, borderRadius: '99px' }} />

                    {/* Bg glow blob */}
                    <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: `radial-gradient(circle, ${selected.color}10, transparent 70%)`, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '-40px', left: '-30px', width: '160px', height: '160px', borderRadius: '50%', background: `radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)`, pointerEvents: 'none' }} />

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '58px', height: '58px', borderRadius: '16px', flexShrink: 0,
                          background: `${selected.color}18`, border: `1.5px solid ${selected.color}45`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.75rem',
                          boxShadow: `0 8px 32px ${selected.color}22, inset 0 1px 0 rgba(255,255,255,0.08)`,
                        }}>
                          {selected.emoji}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.62rem', fontWeight: 700, color: selected.color, letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                            INDUSTRY FOCUS
                          </div>
                          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.45rem', fontWeight: 800, color: '#e2e8ff', margin: 0, letterSpacing: '-0.025em' }}>
                            {selected.name}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelected(null)}
                        style={{ width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.35)'; (e.currentTarget as HTMLElement).style.color = '#ef4444'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.color = '#64748b'; }}>
                        <X size={14} />
                      </button>
                    </div>

                    <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9375rem', fontWeight: 700, color: '#c7d2fe', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                      {selected.title}
                    </h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                      {selected.description}
                    </p>

                    {/* Features + Outcomes 2-col */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>

                      {/* Features */}
                      <div>
                        <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Zap size={10} /> Features
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.48rem' }}>
                          {selected.benefits.map((b) => (
                            <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.45 }}>
                              <CheckCircle size={12} style={{ color: selected.color, flexShrink: 0, marginTop: '1px' }} />
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#f472b6', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <TrendingUp size={10} /> Results
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {selected.outcomes.map((o) => (
                            <div key={o} style={{
                              padding: '0.5rem 0.875rem', borderRadius: '10px',
                              background: `${selected.color}0e`,
                              border: `1px solid ${selected.color}22`,
                              fontSize: '0.79rem', color: '#e2e8ff', fontWeight: 600,
                              display: 'flex', alignItems: 'center', gap: '0.5rem',
                            }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: selected.color, flexShrink: 0, boxShadow: `0 0 6px ${selected.color}` }} />
                              {o}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        width: '100%', padding: '0.9rem 1.5rem', borderRadius: '12px', marginTop: 'auto',
                        background: `linear-gradient(135deg, ${selected.color} 0%, ${selected.color}cc 100%)`,
                        color: 'white', fontWeight: 700, fontSize: '0.9375rem',
                        border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        transition: 'all 0.25s ease',
                        boxShadow: `0 8px 28px ${selected.color}40`,
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 44px ${selected.color}55`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${selected.color}40`; }}
                    >
                      Build My {selected.name} Platform
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
