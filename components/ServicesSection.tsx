'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Smartphone, Brain, Zap, Palette, ShoppingCart, Search, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: Globe,        title: 'Website Development',   desc: 'High-performance, SEO-optimized websites that convert visitors into clients. Custom designs built to scale with your business.',      color: '#3b82f6', gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #0369a1 100%)', featured: true,  tags: ['Custom Design','SEO Optimized','CMS Integration','Fast Loading'] },
  { icon: Layers,       title: 'Web Applications',      desc: 'Complex web platforms, SaaS products, dashboards and enterprise applications built for real-world scale.',                              color: '#06b6d4', gradient: '', featured: false, tags: ['React / Next.js','Real-time Data','API Integration','Cloud Hosted'] },
  { icon: Smartphone,   title: 'Mobile App Development',desc: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',                                  color: '#10b981', gradient: '', featured: false, tags: ['iOS & Android','React Native','Offline Mode'] },
  { icon: Brain,        title: 'AI Solutions',          desc: 'Custom AI chatbots, ML models, recommendation systems and intelligent automation powered by cutting-edge AI.',                          color: '#f59e0b', gradient: '', featured: false, tags: ['ChatGPT API','Custom Models','AI Automation'] },
  { icon: Zap,          title: 'Business Automation',   desc: 'Eliminate manual tasks with intelligent workflow automation. Connect tools, automate processes, save hours every day.',                 color: '#ef4444', gradient: '', featured: false, tags: ['Workflow Automation','CRM Automation','Analytics'] },
  { icon: Palette,      title: 'UI/UX Design',          desc: 'Research-driven design that balances aesthetics with usability — from wireframes to pixel-perfect interfaces.',                        color: '#ec4899', gradient: '', featured: false, tags: ['User Research','Wireframing','Design Systems'] },
  { icon: ShoppingCart, title: 'E-Commerce Solutions',  desc: 'Complete online stores with inventory management, payment processing, and multi-channel selling capabilities.',                         color: '#8b5cf6', gradient: '', featured: false, tags: ['Custom Store','Payment Gateway','Inventory Mgmt'] },
  { icon: Search,       title: 'SEO & Digital Growth',  desc: 'Data-driven SEO strategies and digital campaigns that drive qualified traffic and leads.',                                              color: '#06b6d4', gradient: '', featured: false, tags: ['On-Page SEO','Technical SEO','Content Strategy'] },
];

function TiltCard({ children, color, featured }: { children: React.ReactNode; color: string; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -8;
    const ry = ((x - rect.width / 2) / rect.width) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    el.style.borderColor = `${color}45`;
    el.style.boxShadow = `0 24px 60px ${color}20`;
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    el.style.borderColor = featured ? 'rgba(59,130,246,0.2)' : 'rgba(59,130,246,0.1)';
    el.style.boxShadow = 'none';
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="tilt-card"
      style={{ border: `1px solid ${featured ? 'rgba(59,130,246,0.2)' : 'rgba(59,130,246,0.1)'}`, borderRadius: '18px', overflow: 'hidden', height: '100%', cursor: 'default', transition: 'transform 0.12s ease, box-shadow 0.3s, border-color 0.25s' }}>
      {children}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" style={{ background: '#07071e', padding: '6rem 0', borderTop: '1px solid rgba(59,130,246,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="s-label">Our Services</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: '#e2e8ff', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
            Everything You Need to{' '}
            <span className="grad">Grow Faster</span>
          </h2>
          <p style={{ color: '#7b8db0', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
            End-to-end digital solutions designed for businesses that want to outgrow their competition.
          </p>
        </motion.div>

        <motion.div className="services-bento" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {SERVICES.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard color={s.color} featured={s.featured}>
                {s.featured ? (
                  /* Featured large card with gradient bg */
                  <div style={{ background: s.gradient, padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative circles */}
                    <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
                    <div>
                      <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <s.icon size={26} color="white" />
                      </div>
                      <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.875rem' }}>{s.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{s.desc}</p>
                    </div>
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ padding: '0.25rem 0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', fontWeight: 600 }}>{t}</span>
                        ))}
                      </div>
                      <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'}
                      >
                        Get Started <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Regular card */
                  <div style={{ background: '#0e0e2a', padding: '1.75rem', height: '100%', position: 'relative', overflow: 'hidden' }}>
                    {/* Top accent line */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`, opacity: 0.6 }} />
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: `${s.color}15`, border: `1px solid ${s.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.1rem' }}>
                      <s.icon size={20} color={s.color} />
                    </div>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9375rem', fontWeight: 700, color: '#e2e8ff', marginBottom: '0.5rem' }}>{s.title}</h3>
                    <p style={{ color: '#7b8db0', fontSize: '0.8375rem', lineHeight: 1.65, marginBottom: '1rem' }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {s.tags.map(t => (
                        <span key={t} style={{ padding: '0.2rem 0.55rem', borderRadius: '5px', background: `${s.color}10`, border: `1px solid ${s.color}1e`, color: s.color, fontSize: '0.65rem', fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
            Discuss Your Project <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
