'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Plus, Trash2, Edit3, LogOut, Save, X, Eye,
  BarChart2, Users, Globe, Star, Phone, Briefcase, ChevronDown
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const ADMIN_PASSWORD = 'whsadmin2024';
const INDUSTRIES_LIST = ['Healthcare', 'Education', 'E-Commerce', 'Real Estate', 'Restaurant', 'Automobile', 'Manufacturing', 'Salon & Spa', 'Gym & Fitness', 'Travel Agency', 'Corporate', 'Legal', 'School', 'College', 'Coaching', 'Builder'];

// ─── Shared styles ───
const inp = {
  width: '100%', padding: '0.75rem 0.875rem', borderRadius: '0.625rem',
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
  color: 'white', fontSize: '0.9rem', fontFamily: 'inherit', outline: 'none',
};
const lbl = {
  display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8',
  marginBottom: '0.375rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em',
};
const card = {
  background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '1rem', padding: '1.5rem',
};

// ─── Interfaces ───
interface Project { id: string; title: string; description: string; industry: string; tags: string[]; image: string; results: string; featured: boolean; size: 'large'|'medium'|'small'; }
interface Testimonial { id: string; name: string; role: string; company: string; text: string; rating: number; avatar: string; color: string; }
interface Service { id: string; icon: string; title: string; desc: string; color: string; gradient: string; featured: boolean; tags: string[]; }
interface HeroData { headline: string; headlineAccent: string; headlineSuffix: string; subtext: string; badge: string; stats: Array<{value:number;suffix:string;label:string}>; }
interface ContactData { phone: string; email: string; location: string; hours: string; whatsapp: string; }
interface Analytics { totalVisits: number; dailyVisits: Record<string,number>; recentVisits: Array<{ts:string;page:string}>; }

// ─── Login Screen ───
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) { onLogin(); }
    else { setErr(true); setTimeout(() => setErr(false), 2000); }
  };
  return (
    <div style={{ minHeight: '100vh', background: '#070B14', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '420px', background: 'rgba(16,24,39,0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.5rem', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
            <Image src="/newlogo-tight.png" alt="WHS SoftTech" width={160} height={56} style={{ objectFit: 'contain', height: '52px', width: 'auto' }} />
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Admin Panel</h1>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Site Management</p>
        </div>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={lbl}>Admin Password</label>
            <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Enter password"
              style={{ ...inp, border: `1px solid ${err ? '#EF4444' : 'rgba(255,255,255,0.1)'}` }} />
            {err && <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>Incorrect password.</p>}
          </div>
          <button type="submit" style={{ padding: '0.9375rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            Login to Admin Panel
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// ─── Visitors Tab ───
function VisitorsTab() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  useEffect(() => {
    fetch('/api/analytics').then(r => r.json()).then(setAnalytics).catch(() => {});
  }, []);

  const last7 = (() => {
    const days: Array<{date:string;visits:number}> = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      days.push({ date: key.slice(5), visits: analytics?.dailyVisits?.[key] || 0 });
    }
    return days;
  })();

  return (
    <div>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>Visitor Analytics</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Total Visits', value: analytics?.totalVisits ?? '—', color: '#8B5CF6' },
          { label: "Today's Visits", value: analytics?.dailyVisits?.[new Date().toISOString().split('T')[0]] ?? 0, color: '#06B6D4' },
          { label: 'Last 7 Days', value: last7.reduce((a, d) => a + d.visits, 0), color: '#10B981' },
        ].map(s => (
          <div key={s.label} style={card}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.25rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ ...card, marginBottom: '2rem' }}>
        <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>Daily Visits — Last 7 Days</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={last7}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="date" tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip contentStyle={{ background: '#101827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
            <Bar dataKey="visits" fill="#8B5CF6" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={card}>
        <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>Recent Visits</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {(analytics?.recentVisits || []).slice(0, 20).map((v, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
              <span style={{ color: '#60A5FA' }}>{v.page}</span>
              <span style={{ color: '#94A3B8' }}>{new Date(v.ts).toLocaleString()}</span>
            </div>
          ))}
          {!analytics?.recentVisits?.length && <p style={{ color: '#94A3B8', textAlign: 'center', padding: '1rem' }}>No visits recorded yet.</p>}
        </div>
      </div>
    </div>
  );
}

// ─── Hero Tab ───
function HeroTab() {
  const [data, setData] = useState<HeroData>({ headline:'We Build Software', headlineAccent:'That Transforms', headlineSuffix:'Your Business', subtext:'WHS SoftTech delivers custom websites, mobile apps, AI systems, and automation.', badge:'Available for new projects · India', stats:[{value:50,suffix:'+',label:'Projects Delivered'},{value:16,suffix:'+',label:'Industries Served'},{value:40,suffix:'+',label:'Happy Clients'},{value:98,suffix:'%',label:'Satisfaction Rate'}] });
  const [saving, setSaving] = useState(false);
  useEffect(() => { fetch('/api/admin/hero').then(r=>r.json()).then(setData).catch(()=>{}); }, []);

  const save = async () => {
    setSaving(true);
    await fetch('/api/admin/hero', { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
    setSaving(false);
    alert('Hero section saved!');
  };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
        <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.25rem', fontWeight:700, color:'white' }}>Hero Section</h2>
        <button onClick={save} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.625rem 1.25rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:600, fontSize:'0.875rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          <Save size={16} /> {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
        <div style={card}>
          <h3 style={{ color:'white', fontWeight:600, marginBottom:'1rem', fontSize:'0.95rem' }}>Headline Text</h3>
          <div style={{ display:'grid', gap:'0.875rem' }}>
            {(['headline','headlineAccent','headlineSuffix'] as const).map(field => (
              <div key={field}>
                <label style={lbl}>{field === 'headline' ? 'Line 1' : field === 'headlineAccent' ? 'Line 2 (Gradient)' : 'Line 3'}</label>
                <input style={inp} value={data[field]} onChange={e => setData({...data, [field]: e.target.value})} />
              </div>
            ))}
          </div>
        </div>
        <div style={card}>
          <h3 style={{ color:'white', fontWeight:600, marginBottom:'1rem', fontSize:'0.95rem' }}>Subtext & Badge</h3>
          <div style={{ display:'grid', gap:'0.875rem' }}>
            <div>
              <label style={lbl}>Badge Text</label>
              <input style={inp} value={data.badge} onChange={e => setData({...data, badge: e.target.value})} />
            </div>
            <div>
              <label style={lbl}>Subtext</label>
              <textarea style={{ ...inp, resize:'vertical', minHeight:'80px' }} value={data.subtext} onChange={e => setData({...data, subtext: e.target.value})} />
            </div>
          </div>
        </div>
        <div style={card}>
          <h3 style={{ color:'white', fontWeight:600, marginBottom:'1rem', fontSize:'0.95rem' }}>Stats</h3>
          <div style={{ display:'grid', gap:'0.875rem' }}>
            {data.stats.map((s, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'2fr 1fr 2fr', gap:'0.5rem' }}>
                <div><label style={lbl}>Value</label><input style={inp} type="number" value={s.value} onChange={e => { const stats=[...data.stats]; stats[i]={...s,value:+e.target.value}; setData({...data,stats}); }} /></div>
                <div><label style={lbl}>Suffix</label><input style={inp} value={s.suffix} onChange={e => { const stats=[...data.stats]; stats[i]={...s,suffix:e.target.value}; setData({...data,stats}); }} /></div>
                <div><label style={lbl}>Label</label><input style={inp} value={s.label} onChange={e => { const stats=[...data.stats]; stats[i]={...s,label:e.target.value}; setData({...data,stats}); }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Services Tab ───
function ServicesTab() {
  const [services, setServices] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Service | null>(null);
  const [adding, setAdding] = useState(false);
  const EMPTY_SVC: Omit<Service,'id'> = { icon:'Globe', title:'', desc:'', color:'#3b82f6', gradient:'', featured:false, tags:[] };
  const [form, setForm] = useState<Omit<Service,'id'> & {id?:string}>(EMPTY_SVC);
  const [tagInput, setTagInput] = useState('');

  const load = () => fetch('/api/admin/services').then(r=>r.json()).then(setServices).catch(()=>{});
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!form.title) { alert('Title required'); return; }
    if (form.id) await fetch('/api/admin/services', { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
    else await fetch('/api/admin/services', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
    await load(); setAdding(false); setEditing(null); setForm(EMPTY_SVC);
  };

  const del = async (id: string) => {
    if (!confirm('Delete service?')) return;
    await fetch(`/api/admin/services?id=${id}`, { method:'DELETE' });
    await load();
  };

  const startEdit = (s: Service) => { setEditing(s); setAdding(true); setForm(s); };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
        <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.25rem', fontWeight:700, color:'white' }}>Services</h2>
        <button onClick={() => { setAdding(true); setEditing(null); setForm(EMPTY_SVC); }}
          style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.625rem 1.25rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:600, fontSize:'0.875rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          <Plus size={16} /> Add Service
        </button>
      </div>

      {adding && (
        <div style={{ ...card, border:'1px solid rgba(139,92,246,0.3)', marginBottom:'1.5rem' }}>
          <h3 style={{ color:'white', fontWeight:700, marginBottom:'1.25rem' }}>{editing ? 'Edit Service' : 'Add Service'}</h3>
          <div style={{ display:'grid', gap:'0.875rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
              <div><label style={lbl}>Title</label><input style={inp} value={form.title} onChange={e=>setForm({...form,title:e.target.value})} /></div>
              <div><label style={lbl}>Icon Name</label><input style={inp} value={form.icon} onChange={e=>setForm({...form,icon:e.target.value})} placeholder="Globe, Brain, Zap..." /></div>
            </div>
            <div><label style={lbl}>Description</label><textarea style={{...inp,resize:'vertical',minHeight:'70px'}} value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} /></div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
              <div><label style={lbl}>Color</label><input style={inp} value={form.color} onChange={e=>setForm({...form,color:e.target.value})} placeholder="#3b82f6" /></div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', paddingTop:'1.5rem' }}>
                <button type="button" onClick={() => setForm({...form,featured:!form.featured})}
                  style={{ width:'44px', height:'24px', borderRadius:'9999px', background:form.featured?'#8B5CF6':'rgba(255,255,255,0.1)', border:'none', cursor:'pointer', position:'relative', transition:'background 0.2s', flexShrink:0 }}>
                  <div style={{ position:'absolute', top:'2px', width:'20px', height:'20px', borderRadius:'50%', background:'white', transition:'left 0.2s', left:form.featured?'22px':'2px' }} />
                </button>
                <span style={{ color:'#CBD5E1', fontSize:'0.85rem' }}>Featured</span>
              </div>
            </div>
            <div>
              <label style={lbl}>Tags</label>
              <div style={{ display:'flex', gap:'0.5rem', marginBottom:'0.5rem' }}>
                <input style={{...inp,flex:1}} value={tagInput} onChange={e=>setTagInput(e.target.value)}
                  onKeyDown={e=>{ if(e.key==='Enter'){ e.preventDefault(); if(tagInput.trim()){ setForm({...form,tags:[...form.tags,tagInput.trim()]}); setTagInput(''); } }}} placeholder="Add tag, press Enter" />
                <button type="button" onClick={()=>{ if(tagInput.trim()){ setForm({...form,tags:[...form.tags,tagInput.trim()]}); setTagInput(''); }}}
                  style={{ padding:'0.75rem 1rem', borderRadius:'0.625rem', background:'rgba(139,92,246,0.2)', border:'1px solid rgba(139,92,246,0.3)', color:'#8B5CF6', cursor:'pointer' }}>Add</button>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.375rem' }}>
                {form.tags.map(t=>(
                  <span key={t} style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', padding:'0.2rem 0.625rem', borderRadius:'0.375rem', background:'rgba(139,92,246,0.15)', border:'1px solid rgba(139,92,246,0.25)', color:'#8B5CF6', fontSize:'0.8rem' }}>
                    {t}<button type="button" onClick={()=>setForm({...form,tags:form.tags.filter(x=>x!==t)})} style={{ background:'none', border:'none', cursor:'pointer', color:'#8B5CF6', padding:0 }}><X size={12}/></button>
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display:'flex', gap:'0.75rem' }}>
              <button onClick={save} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.5rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:700, fontSize:'0.9rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
                <Save size={16} /> Save
              </button>
              <button onClick={()=>{setAdding(false);setEditing(null);setForm(EMPTY_SVC);}} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.25rem', borderRadius:'0.625rem', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#94A3B8', fontWeight:600, fontSize:'0.9rem', cursor:'pointer', fontFamily:'inherit' }}>
                <X size={16}/> Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
        {services.map((s,i)=>(
          <motion.div key={s.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*0.04}}
            style={{ ...card, display:'flex', alignItems:'center', gap:'1rem' }}>
            <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:`${s.color}20`, border:`1px solid ${s.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span style={{ color:s.color, fontSize:'0.75rem', fontWeight:700 }}>{s.icon.slice(0,2)}</span>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ color:'white', fontWeight:700, fontSize:'0.9rem' }}>{s.title}</div>
              <div style={{ color:'#94A3B8', fontSize:'0.8rem', marginTop:'0.2rem' }}>{s.desc.slice(0,80)}...</div>
            </div>
            <div style={{ display:'flex', gap:'0.5rem' }}>
              <button onClick={()=>startEdit(s)} style={{ width:'34px', height:'34px', borderRadius:'0.5rem', background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.2)', color:'#8B5CF6', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><Edit3 size={14}/></button>
              <button onClick={()=>del(s.id)} style={{ width:'34px', height:'34px', borderRadius:'0.5rem', background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)', color:'#EF4444', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><Trash2 size={14}/></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Testimonials Tab ───
function TestimonialsTab() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const EMPTY: Omit<Testimonial,'id'> = { name:'', role:'', company:'', text:'', rating:5, avatar:'', color:'#3b82f6' };
  const [form, setForm] = useState<Omit<Testimonial,'id'> & {id?:string}>(EMPTY);

  const load = () => fetch('/api/admin/testimonials').then(r=>r.json()).then(setItems).catch(()=>{});
  useEffect(()=>{ load(); },[]);

  const save = async () => {
    if (!form.name || !form.text) { alert('Name and text required'); return; }
    if (form.id) await fetch('/api/admin/testimonials', { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
    else await fetch('/api/admin/testimonials', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form, avatar:form.name.split(' ').map((n:string)=>n[0]).join('').slice(0,2).toUpperCase()}) });
    await load(); setAdding(false); setEditing(null); setForm(EMPTY);
  };

  const del = async (id: string) => {
    if (!confirm('Delete testimonial?')) return;
    await fetch(`/api/admin/testimonials?id=${id}`, { method:'DELETE' });
    await load();
  };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
        <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.25rem', fontWeight:700, color:'white' }}>Testimonials</h2>
        <button onClick={()=>{ setAdding(true); setEditing(null); setForm(EMPTY); }}
          style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.625rem 1.25rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:600, fontSize:'0.875rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          <Plus size={16}/> Add Testimonial
        </button>
      </div>

      {adding && (
        <div style={{ ...card, border:'1px solid rgba(139,92,246,0.3)', marginBottom:'1.5rem' }}>
          <h3 style={{ color:'white', fontWeight:700, marginBottom:'1.25rem' }}>{editing ? 'Edit' : 'Add'} Testimonial</h3>
          <div style={{ display:'grid', gap:'0.875rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'0.75rem' }}>
              <div><label style={lbl}>Name</label><input style={inp} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
              <div><label style={lbl}>Role</label><input style={inp} value={form.role} onChange={e=>setForm({...form,role:e.target.value})} /></div>
              <div><label style={lbl}>Company</label><input style={inp} value={form.company} onChange={e=>setForm({...form,company:e.target.value})} /></div>
            </div>
            <div><label style={lbl}>Testimonial Text</label><textarea style={{...inp,resize:'vertical',minHeight:'80px'}} value={form.text} onChange={e=>setForm({...form,text:e.target.value})} /></div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
              <div><label style={lbl}>Accent Color</label><input style={inp} value={form.color} onChange={e=>setForm({...form,color:e.target.value})} placeholder="#3b82f6" /></div>
              <div><label style={lbl}>Rating (1-5)</label><input style={inp} type="number" min={1} max={5} value={form.rating} onChange={e=>setForm({...form,rating:+e.target.value})} /></div>
            </div>
            <div style={{ display:'flex', gap:'0.75rem' }}>
              <button onClick={save} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.5rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:700, fontSize:'0.9rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
                <Save size={16}/> Save
              </button>
              <button onClick={()=>{setAdding(false);setEditing(null);setForm(EMPTY);}} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.25rem', borderRadius:'0.625rem', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#94A3B8', fontWeight:600, fontSize:'0.9rem', cursor:'pointer', fontFamily:'inherit' }}>
                <X size={16}/> Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
        {items.map((t,i)=>(
          <motion.div key={t.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*0.04}}
            style={{ ...card, display:'flex', alignItems:'flex-start', gap:'1rem' }}>
            <div style={{ width:'40px', height:'40px', borderRadius:'50%', background:`${t.color}20`, border:`2px solid ${t.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:t.color, fontWeight:700, fontSize:'0.85rem' }}>{t.avatar}</div>
            <div style={{ flex:1 }}>
              <div style={{ color:'white', fontWeight:700, fontSize:'0.9rem' }}>{t.name}</div>
              <div style={{ color:'#94A3B8', fontSize:'0.75rem' }}>{t.role} · {t.company}</div>
              <div style={{ color:'#CBD5E1', fontSize:'0.82rem', marginTop:'0.375rem', lineHeight:1.5 }}>{t.text.slice(0,100)}...</div>
            </div>
            <div style={{ display:'flex', gap:'0.5rem' }}>
              <button onClick={()=>{ setEditing(t); setAdding(true); setForm(t); }} style={{ width:'34px', height:'34px', borderRadius:'0.5rem', background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.2)', color:'#8B5CF6', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><Edit3 size={14}/></button>
              <button onClick={()=>del(t.id)} style={{ width:'34px', height:'34px', borderRadius:'0.5rem', background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)', color:'#EF4444', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><Trash2 size={14}/></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Tab ───
function ContactTab() {
  const [data, setData] = useState<ContactData>({ phone:'', email:'', location:'', hours:'', whatsapp:'' });
  const [saving, setSaving] = useState(false);
  useEffect(()=>{ fetch('/api/admin/contact').then(r=>r.json()).then(setData).catch(()=>{}); },[]);

  const save = async () => {
    setSaving(true);
    await fetch('/api/admin/contact', { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    setSaving(false);
    alert('Contact info saved!');
  };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
        <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.25rem', fontWeight:700, color:'white' }}>Contact Information</h2>
        <button onClick={save} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.625rem 1.25rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:600, fontSize:'0.875rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          <Save size={16}/> {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
      <div style={{ ...card, display:'grid', gap:'1rem' }}>
        {([['phone','Phone Number','+91 98765 43210'],['email','Email Address','whsofttech26@gmail.com'],['location','Location / Office','India (Remote-First Team)'],['hours','Business Hours','Mon–Sat, 9 AM – 7 PM IST'],['whatsapp','WhatsApp Number (with country code)','918208065506']] as const).map(([field,label,ph])=>(
          <div key={field}>
            <label style={lbl}>{label}</label>
            <input style={inp} value={(data as Record<string, string>)[field] || ''} onChange={e=>setData({...data,[field]:e.target.value})} placeholder={ph} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Portfolio Tab (existing logic moved here) ───
interface ProjectFormProps { initial?: Project; onSave: (p: Omit<Project,'id'> & {id?:string}) => void; onCancel: () => void; }
function ProjectForm({ initial, onSave, onCancel }: ProjectFormProps) {
  const EMPTY_P: Omit<Project,'id'> = { title:'', description:'', industry:'', tags:[], image:'', results:'', featured:false, size:'medium' };
  const [data, setData] = useState<Omit<Project,'id'> & {id?:string}>(initial || EMPTY_P);
  const [tagInput, setTagInput] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const addTag = () => {
    if (tagInput.trim() && !data.tags.includes(tagInput.trim())) {
      setData({...data, tags:[...data.tags, tagInput.trim()]}); setTagInput('');
    }
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const fd = new FormData(); fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method:'POST', body:fd });
    const { url } = await res.json();
    setData({...data, image: url});
    setUploading(false);
  };

  return (
    <div style={{ ...card, border:'1px solid rgba(139,92,246,0.3)', marginBottom:'1.5rem' }}>
      <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.1rem', fontWeight:700, color:'white', marginBottom:'1.5rem' }}>{initial ? 'Edit Project' : 'Add New Project'}</h3>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }}>
        <div><label style={lbl}>Project Title *</label><input style={inp} value={data.title} onChange={e=>setData({...data,title:e.target.value})} placeholder="HealthSync — Clinic Platform" /></div>
        <div><label style={lbl}>Industry *</label>
          <select style={{...inp,cursor:'pointer'}} value={data.industry} onChange={e=>setData({...data,industry:e.target.value})}>
            <option value="">Select industry...</option>
            {INDUSTRIES_LIST.map(i=><option key={i} value={i} style={{background:'#101827'}}>{i}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom:'1rem' }}><label style={lbl}>Description *</label><textarea style={{...inp,resize:'vertical',minHeight:'80px'}} rows={3} value={data.description} onChange={e=>setData({...data,description:e.target.value})} placeholder="Brief description..." /></div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }}>
        <div><label style={lbl}>Results / Impact</label><input style={inp} value={data.results} onChange={e=>setData({...data,results:e.target.value})} placeholder="300% more appointments" /></div>
        <div><label style={lbl}>Card Size</label>
          <select style={{...inp,cursor:'pointer'}} value={data.size} onChange={e=>setData({...data,size:e.target.value as 'large'|'medium'|'small'})}>
            <option value="large" style={{background:'#101827'}}>Large</option>
            <option value="medium" style={{background:'#101827'}}>Medium</option>
            <option value="small" style={{background:'#101827'}}>Small</option>
          </select>
        </div>
      </div>
      {/* Image Upload */}
      <div style={{ marginBottom:'1rem' }}>
        <label style={lbl}>Project Image</label>
        <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
          <input style={{...inp,flex:1}} value={data.image} onChange={e=>setData({...data,image:e.target.value})} placeholder="URL or upload below" />
          <button type="button" onClick={()=>fileRef.current?.click()} style={{ padding:'0.75rem 1rem', borderRadius:'0.625rem', background:'rgba(139,92,246,0.2)', border:'1px solid rgba(139,92,246,0.3)', color:'#8B5CF6', cursor:'pointer', whiteSpace:'nowrap', fontFamily:'inherit', fontSize:'0.85rem' }}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          <input ref={fileRef} type="file" accept="image/*" style={{display:'none'}} onChange={uploadImage} />
        </div>
        {data.image && <img src={data.image} alt="" style={{ marginTop:'0.5rem', width:'80px', height:'60px', objectFit:'cover', borderRadius:'0.5rem', border:'1px solid rgba(255,255,255,0.1)' }} />}
      </div>
      {/* Tags */}
      <div style={{ marginBottom:'1rem' }}>
        <label style={lbl}>Tech Stack Tags</label>
        <div style={{ display:'flex', gap:'0.5rem', marginBottom:'0.5rem' }}>
          <input style={{...inp,flex:1}} value={tagInput} onChange={e=>setTagInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();addTag();}}} placeholder="e.g. React, Next.js..." />
          <button type="button" onClick={addTag} style={{ padding:'0.75rem 1rem', borderRadius:'0.625rem', background:'rgba(139,92,246,0.2)', border:'1px solid rgba(139,92,246,0.3)', color:'#8B5CF6', fontWeight:600, cursor:'pointer' }}>Add</button>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.375rem' }}>
          {data.tags.map(t=>(
            <span key={t} style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', padding:'0.25rem 0.625rem', borderRadius:'0.375rem', background:'rgba(139,92,246,0.15)', border:'1px solid rgba(139,92,246,0.25)', color:'#8B5CF6', fontSize:'0.8rem' }}>
              {t}<button type="button" onClick={()=>setData({...data,tags:data.tags.filter(x=>x!==t)})} style={{background:'none',border:'none',cursor:'pointer',color:'#8B5CF6',padding:0}}><X size={12}/></button>
            </span>
          ))}
        </div>
      </div>
      {/* Featured toggle */}
      <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
        <button type="button" onClick={()=>setData({...data,featured:!data.featured})} style={{ width:'44px', height:'24px', borderRadius:'9999px', background:data.featured?'#8B5CF6':'rgba(255,255,255,0.1)', border:'none', cursor:'pointer', position:'relative', transition:'background 0.2s', flexShrink:0 }}>
          <div style={{ position:'absolute', top:'2px', width:'20px', height:'20px', borderRadius:'50%', background:'white', transition:'left 0.2s', left:data.featured?'22px':'2px' }} />
        </button>
        <span style={{ color:'#CBD5E1', fontSize:'0.9rem', fontWeight:500 }}>Mark as Featured Project</span>
      </div>
      <div style={{ display:'flex', gap:'0.75rem' }}>
        <button type="button" onClick={()=>onSave(data)} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.5rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:700, fontSize:'0.9rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          <Save size={16}/> {initial ? 'Save Changes' : 'Add Project'}
        </button>
        <button type="button" onClick={onCancel} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.25rem', borderRadius:'0.625rem', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#94A3B8', fontWeight:600, fontSize:'0.9rem', cursor:'pointer', fontFamily:'inherit' }}>
          <X size={16}/> Cancel
        </button>
      </div>
    </div>
  );
}

function PortfolioTab() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try { const res = await fetch('/api/admin/projects'); setProjects(await res.json()); } catch {}
    setLoading(false);
  };
  useEffect(()=>{ load(); },[]);

  const saveProject = async (data: Omit<Project,'id'> & {id?:string}) => {
    if (!data.title || !data.industry || !data.description) { alert('Fill all required fields'); return; }
    if (data.id) await fetch('/api/admin/projects', { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    else await fetch('/api/admin/projects', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    await load(); setAdding(false); setEditing(null);
  };

  const del = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    await fetch(`/api/admin/projects?id=${id}`, { method:'DELETE' });
    await load();
  };

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
        <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.25rem', fontWeight:700, color:'white' }}>Portfolio Projects</h2>
        <button onClick={()=>{setAdding(true);setEditing(null);}} style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.625rem 1.25rem', borderRadius:'0.625rem', background:'linear-gradient(135deg, #8B5CF6, #6366F1)', color:'white', fontWeight:600, fontSize:'0.875rem', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          <Plus size={16}/> Add Project
        </button>
      </div>

      {(adding||editing) && <ProjectForm initial={editing||undefined} onSave={saveProject} onCancel={()=>{setAdding(false);setEditing(null);}} />}

      {loading ? <div style={{ textAlign:'center', padding:'3rem', color:'#94A3B8' }}>Loading...</div> :
        <div style={{ display:'flex', flexDirection:'column', gap:'0.875rem' }}>
          {projects.map((p,i)=>(
            <motion.div key={p.id} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.04}}
              style={{ ...card, display:'flex', alignItems:'center', gap:'1.25rem' }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(139,92,246,0.25)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.07)';}}>
              <div style={{ width:'48px', height:'48px', borderRadius:'0.75rem', background:'rgba(139,92,246,0.12)', border:'1px solid rgba(139,92,246,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.375rem', flexShrink:0 }}>
                {p.industry==='Healthcare'?'🏥':p.industry==='Education'?'🎓':p.industry==='E-Commerce'?'🛒':p.industry==='Real Estate'?'🏠':'💼'}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.625rem', marginBottom:'0.25rem', flexWrap:'wrap' }}>
                  <h4 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'0.975rem', fontWeight:700, color:'white', margin:0 }}>{p.title}</h4>
                  {p.featured && <span style={{ padding:'0.125rem 0.5rem', borderRadius:'9999px', background:'rgba(139,92,246,0.15)', border:'1px solid rgba(139,92,246,0.3)', color:'#8B5CF6', fontSize:'0.65rem', fontWeight:700 }}>FEATURED</span>}
                </div>
                <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                  <span style={{ fontSize:'0.8rem', color:'#06B6D4' }}>{p.industry}</span>
                  {p.results && <span style={{ fontSize:'0.8rem', color:'#10B981' }}>📈 {p.results}</span>}
                  <div style={{ display:'flex', gap:'0.25rem', flexWrap:'wrap' }}>
                    {p.tags.slice(0,3).map(t=><span key={t} style={{ padding:'0.125rem 0.5rem', borderRadius:'0.25rem', background:'rgba(255,255,255,0.05)', color:'#94A3B8', fontSize:'0.7rem' }}>{t}</span>)}
                  </div>
                </div>
              </div>
              <div style={{ display:'flex', gap:'0.625rem', flexShrink:0 }}>
                <button onClick={()=>{setEditing(p);setAdding(false);}} style={{ width:'36px', height:'36px', borderRadius:'0.5rem', background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.2)', color:'#8B5CF6', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><Edit3 size={15}/></button>
                <button onClick={()=>del(p.id)} style={{ width:'36px', height:'36px', borderRadius:'0.5rem', background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)', color:'#EF4444', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><Trash2 size={15}/></button>
              </div>
            </motion.div>
          ))}
        </div>
      }
    </div>
  );
}

// ─── Main Admin Page ───
type Tab = 'visitors'|'hero'|'services'|'testimonials'|'contact'|'portfolio';

const TABS: Array<{id:Tab; label:string; icon: React.ElementType}> = [
  { id:'visitors', label:'Visitors', icon:BarChart2 },
  { id:'hero', label:'Hero', icon:Globe },
  { id:'services', label:'Services', icon:Briefcase },
  { id:'testimonials', label:'Testimonials', icon:Star },
  { id:'contact', label:'Contact', icon:Phone },
  { id:'portfolio', label:'Portfolio', icon:Users },
];

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState<Tab>('visitors');

  useEffect(() => {
    const stored = sessionStorage.getItem('whs_admin');
    if (stored === 'true') setLoggedIn(true);
  }, []);

  const handleLogin = () => { setLoggedIn(true); sessionStorage.setItem('whs_admin', 'true'); };
  const handleLogout = () => { setLoggedIn(false); sessionStorage.removeItem('whs_admin'); };

  if (!loggedIn) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div style={{ minHeight:'100vh', background:'#070B14', fontFamily:'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ background:'rgba(16,24,39,0.97)', borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'0.875rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100, backdropFilter:'blur(20px)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
          <Image src="/newlogo-tight.png" alt="WHS SoftTech" width={140} height={46} style={{ objectFit:'contain', height:'36px', width:'auto', filter:'brightness(0) invert(1)' }} />
          <span style={{ color:'rgba(255,255,255,0.25)', fontSize:'1rem' }}>|</span>
          <span style={{ color:'#94A3B8', fontSize:'0.85rem', fontWeight:500 }}>Admin Panel</span>
        </div>
        <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
          <a href="/" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', padding:'0.5rem 0.875rem', borderRadius:'0.5rem', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#94A3B8', fontSize:'0.8rem', fontWeight:500, textDecoration:'none' }}>
            <Eye size={14}/> View Site
          </a>
          <button onClick={handleLogout} style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', padding:'0.5rem 0.875rem', borderRadius:'0.5rem', background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.2)', color:'#EF4444', fontSize:'0.8rem', fontWeight:600, cursor:'pointer', fontFamily:'inherit' }}>
            <LogOut size={14}/> Logout
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ background:'rgba(16,24,39,0.7)', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'0 2rem', display:'flex', gap:'0', overflowX:'auto' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.875rem 1.25rem', background:'none', border:'none', borderBottom:`2px solid ${tab===t.id?'#8B5CF6':'transparent'}`, color:tab===t.id?'#8B5CF6':'#64748b', fontWeight:tab===t.id?700:500, fontSize:'0.85rem', cursor:'pointer', fontFamily:'inherit', whiteSpace:'nowrap', transition:'all 0.2s' }}>
            <t.icon size={15}/> {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'2.5rem 1.5rem' }}>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.2}}>
            {tab==='visitors' && <VisitorsTab />}
            {tab==='hero' && <HeroTab />}
            {tab==='services' && <ServicesTab />}
            {tab==='testimonials' && <TestimonialsTab />}
            {tab==='contact' && <ContactTab />}
            {tab==='portfolio' && <PortfolioTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
