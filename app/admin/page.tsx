'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus, Trash2, Edit3, LogOut, Save, X, Eye } from 'lucide-react';

const ADMIN_PASSWORD = 'whsadmin2024';

interface Project {
  id: string;
  title: string;
  description: string;
  industry: string;
  tags: string[];
  image: string;
  results: string;
  featured: boolean;
  size: 'large' | 'medium' | 'small';
}

const EMPTY: Omit<Project, 'id'> = {
  title: '', description: '', industry: '', tags: [], image: '', results: '', featured: false, size: 'medium',
};

const INDUSTRIES_LIST = ['Healthcare', 'Education', 'E-Commerce', 'Real Estate', 'Restaurant', 'Automobile', 'Manufacturing', 'Salon & Spa', 'Gym & Fitness', 'Travel Agency', 'Corporate', 'Legal', 'School', 'College', 'Coaching', 'Builder'];

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
            <Image
              src="/newlogo-tight.png"
              alt="WHS SoftTech"
              width={160}
              height={56}
              style={{ objectFit: 'contain', height: '52px', width: 'auto' }}
            />
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Admin Panel</h1>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Portfolio Management</p>
        </div>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Admin Password</label>
            <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Enter password"
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', border: `1px solid ${err ? '#EF4444' : 'rgba(255,255,255,0.1)'}`, color: 'white', fontSize: '1rem', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }} />
            {err && <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>Incorrect password. Try again.</p>}
          </div>
          <button type="submit" style={{ padding: '0.9375rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            Login to Admin Panel
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function ProjectForm({ initial, onSave, onCancel }: { initial?: Project; onSave: (p: Omit<Project, 'id'> & { id?: string }) => void; onCancel: () => void }) {
  const [data, setData] = useState<Omit<Project, 'id'> & { id?: string }>(initial || EMPTY);
  const [tagInput, setTagInput] = useState('');

  const addTag = () => {
    if (tagInput.trim() && !data.tags.includes(tagInput.trim())) {
      setData({ ...data, tags: [...data.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const inp = { width: '100%', padding: '0.75rem 0.875rem', borderRadius: '0.625rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '0.9rem', fontFamily: 'inherit', outline: 'none' };
  const lbl = { display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', marginBottom: '0.375rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em' };

  return (
    <div style={{ background: 'rgba(16,24,39,0.95)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '1.25rem', padding: '2rem', marginBottom: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>{initial ? 'Edit Project' : 'Add New Project'}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={lbl}>Project Title *</label>
          <input style={inp} value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="HealthSync — Clinic Platform" />
        </div>
        <div>
          <label style={lbl}>Industry *</label>
          <select style={{ ...inp, cursor: 'pointer' }} value={data.industry} onChange={(e) => setData({ ...data, industry: e.target.value })}>
            <option value="">Select industry...</option>
            {INDUSTRIES_LIST.map((i) => <option key={i} value={i} style={{ background: '#101827' }}>{i}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={lbl}>Description *</label>
        <textarea style={{ ...inp, resize: 'vertical', minHeight: '80px' }} rows={3} value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} placeholder="Brief description of the project..." />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={lbl}>Results / Impact</label>
          <input style={inp} value={data.results} onChange={(e) => setData({ ...data, results: e.target.value })} placeholder="300% more appointments" />
        </div>
        <div>
          <label style={lbl}>Card Size</label>
          <select style={{ ...inp, cursor: 'pointer' }} value={data.size} onChange={(e) => setData({ ...data, size: e.target.value as 'large' | 'medium' | 'small' })}>
            <option value="large" style={{ background: '#101827' }}>Large</option>
            <option value="medium" style={{ background: '#101827' }}>Medium</option>
            <option value="small" style={{ background: '#101827' }}>Small</option>
          </select>
        </div>
      </div>
      {/* Tags */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={lbl}>Tech Stack Tags</label>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <input style={{ ...inp, flex: 1 }} value={tagInput} onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
            placeholder="e.g. React, Next.js..." />
          <button type="button" onClick={addTag} style={{ padding: '0.75rem 1rem', borderRadius: '0.625rem', background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>Add</button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {data.tags.map((t) => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.625rem', borderRadius: '0.375rem', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)', color: '#8B5CF6', fontSize: '0.8rem', fontWeight: 500 }}>
              {t}
              <button type="button" onClick={() => setData({ ...data, tags: data.tags.filter((x) => x !== t) })} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8B5CF6', lineHeight: 1, padding: 0 }}><X size={12} /></button>
            </span>
          ))}
        </div>
      </div>
      {/* Featured toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button type="button" onClick={() => setData({ ...data, featured: !data.featured })}
          style={{ width: '44px', height: '24px', borderRadius: '9999px', background: data.featured ? '#8B5CF6' : 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
          <div style={{ position: 'absolute', top: '2px', width: '20px', height: '20px', borderRadius: '50%', background: 'white', transition: 'left 0.2s', left: data.featured ? '22px' : '2px' }} />
        </button>
        <span style={{ color: '#CBD5E1', fontSize: '0.9rem', fontWeight: 500 }}>Mark as Featured Project</span>
      </div>
      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button type="button" onClick={() => onSave(data)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '0.625rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          <Save size={16} /> {initial ? 'Save Changes' : 'Add Project'}
        </button>
        <button type="button" onClick={onCancel}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', borderRadius: '0.625rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'inherit' }}>
          <X size={16} /> Cancel
        </button>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) loadProjects();
  }, [loggedIn]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/projects');
      const data = await res.json();
      setProjects(data);
    } catch { /* handle */ }
    setLoading(false);
  };

  const saveProject = async (data: Omit<Project, 'id'> & { id?: string }) => {
    if (!data.title || !data.industry || !data.description) { alert('Please fill in all required fields.'); return; }
    try {
      if (data.id) {
        await fetch('/api/admin/projects', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      } else {
        await fetch('/api/admin/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      }
      await loadProjects();
      setAdding(false);
      setEditing(null);
    } catch { alert('Error saving project.'); }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
    await loadProjects();
  };

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  return (
    <div style={{ minHeight: '100vh', background: '#070B14', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ background: 'rgba(16,24,39,0.95)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image
            src="/newlogo-tight-transparent.png"
            alt="WHS SoftTech"
            width={140}
            height={46}
            style={{ objectFit: 'contain', height: '38px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>|</span>
          <span style={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 500 }}>Admin Panel</span>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 0.875rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}>
            <Eye size={14} /> View Site
          </a>
          <button onClick={() => setLoggedIn(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 0.875rem', borderRadius: '0.5rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Total Projects', value: projects.length, color: '#8B5CF6' },
            { label: 'Featured', value: projects.filter((p) => p.featured).length, color: '#06B6D4' },
            { label: 'Industries', value: [...new Set(projects.map((p) => p.industry))].length, color: '#10B981' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Projects header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: 'white', margin: 0 }}>Portfolio Projects</h2>
          <button onClick={() => { setAdding(true); setEditing(null); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', borderRadius: '0.625rem', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', color: 'white', fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            <Plus size={16} /> Add Project
          </button>
        </div>

        {/* Add/Edit form */}
        {(adding || editing) && (
          <ProjectForm
            initial={editing || undefined}
            onSave={saveProject}
            onCancel={() => { setAdding(false); setEditing(null); }}
          />
        )}

        {/* Projects list */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>Loading projects...</div>
        ) : projects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8', background: 'rgba(16,24,39,0.6)', borderRadius: '1rem', border: '1px dashed rgba(255,255,255,0.08)' }}>
            <p style={{ marginBottom: '1rem' }}>No projects yet. Add your first project!</p>
            <button onClick={() => setAdding(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', borderRadius: '0.625rem', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit' }}>
              <Plus size={16} /> Add First Project
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {projects.map((project, i) => (
              <motion.div key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                style={{ background: 'rgba(16,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '1.375rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}>
                {/* Industry emoji */}
                <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.375rem', flexShrink: 0 }}>
                  {project.industry === 'Healthcare' ? '🏥' : project.industry === 'Education' ? '🎓' : project.industry === 'E-Commerce' ? '🛒' : project.industry === 'Real Estate' ? '🏠' : '💼'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.975rem', fontWeight: 700, color: 'white', margin: 0 }}>{project.title}</h4>
                    {project.featured && <span style={{ padding: '0.125rem 0.5rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontSize: '0.65rem', fontWeight: 700 }}>FEATURED</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', color: '#06B6D4' }}>{project.industry}</span>
                    {project.results && <span style={{ fontSize: '0.8rem', color: '#10B981' }}>📈 {project.results}</span>}
                    <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                      {project.tags.slice(0, 3).map((t) => <span key={t} style={{ padding: '0.125rem 0.5rem', borderRadius: '0.25rem', background: 'rgba(255,255,255,0.05)', color: '#94A3B8', fontSize: '0.7rem' }}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
                  <button onClick={() => { setEditing(project); setAdding(false); }}
                    style={{ width: '36px', height: '36px', borderRadius: '0.5rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#8B5CF6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                    title="Edit">
                    <Edit3 size={15} />
                  </button>
                  <button onClick={() => deleteProject(project.id)}
                    style={{ width: '36px', height: '36px', borderRadius: '0.5rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                    title="Delete">
                    <Trash2 size={15} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
