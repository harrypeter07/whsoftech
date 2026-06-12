'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/* ─── Isometric 3-D cube (pure SVG) ─── */
function IsoCube({ size = 160 }: { size?: number }) {
  const s = size;
  const hw = s * 0.5, qh = s * 0.28, fh = s * 0.72;
  const top = `${hw},${s * 0.1} ${s * 0.96},${qh} ${hw},${s * 0.46} ${s * 0.04},${qh}`;
  const left = `${s * 0.04},${qh} ${hw},${s * 0.46} ${hw},${fh} ${s * 0.04},${s * 0.56}`;
  const right = `${hw},${s * 0.46} ${s * 0.96},${qh} ${s * 0.96},${s * 0.56} ${hw},${fh}`;
  return (
    <svg viewBox={`0 0 ${s} ${s}`} width={s} height={s} overflow="visible">
      <defs>
        <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5b21b6" /><stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="cubeGlow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="4" /><feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#cubeGlow)">
        <polygon points={top} fill="url(#cubeTop)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <polygon points={left} fill="url(#cubeLeft)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <polygon points={right} fill="url(#cubeRight)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </g>
    </svg>
  );
}

/* ─── Isometric checkmark (2 connected blocks) ─── */
function IsoCheck({ size = 200 }: { size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} overflow="visible">
      <defs>
        <linearGradient id="chkTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="chkLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#059669" /><stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="chkRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#047857" /><stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="chkGlow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
          <feOffset dx="0" dy="6" /><feComponentTransfer><feFuncA type="linear" slope="0.35" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#chkGlow)">
        {/* Vertical block */}
        <polygon points="30,60 90,30 90,100 30,130" fill="url(#chkLeft)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        <polygon points="30,60 90,30 150,60 90,90" fill="url(#chkTop)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        <polygon points="90,90 150,60 150,130 90,160" fill="url(#chkRight)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        {/* Diagonal block */}
        <polygon points="90,110 150,80 170,100 110,130" fill="url(#chkTop)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        <polygon points="90,110 110,130 110,170 90,150" fill="url(#chkLeft)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
        <polygon points="110,130 170,100 170,140 110,170" fill="url(#chkRight)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
      </g>
    </svg>
  );
}

/* ─── Star / cross asterisk ─── */
function StarShape({ size = 80, color = 'white' }: { size?: number; color?: string }) {
  const r = size / 2;
  const arm = r * 0.35;
  const path = `
    M ${r} ${r - r * 0.9}
    Q ${r + arm * 0.2} ${r - arm} ${r + r * 0.9} ${r}
    Q ${r + arm} ${r + arm * 0.2} ${r} ${r + r * 0.9}
    Q ${r - arm * 0.2} ${r + arm} ${r - r * 0.9} ${r}
    Q ${r - arm} ${r - arm * 0.2} ${r} ${r - r * 0.9}
    Z
  `;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <path d={path} fill={color} />
    </svg>
  );
}

/* ─── SVG curved path that "draws itself" ─── */
function DrawPath({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const dashOffset = useTransform(progress, [0, 1], [900, 0]);
  return (
    <svg viewBox="0 0 800 200" width="100%" height="200" style={{ overflow: 'visible', position: 'absolute', bottom: '-60px', left: 0 }}>
      <motion.path
        d="M -50 150 C 100 50, 200 180, 350 100 S 550 20, 700 120 S 850 200, 950 80"
        fill="none" stroke="url(#pathGrad)" strokeWidth="2.5" strokeLinecap="round"
        style={{ pathLength: 1, strokeDasharray: 900, strokeDashoffset: dashOffset }}
      />
      <defs>
        <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="30%" stopColor="#8B5CF6" />
          <stop offset="70%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Morph blob ─── */
function MorphBlob({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const d1 = "M160,60 C200,0 280,0 300,60 C320,120 280,180 220,180 C160,180 120,140 160,60Z";
  const d2 = "M140,40 C200,-20 320,20 320,90 C320,160 240,210 180,180 C120,150 80,100 140,40Z";
  const d3 = "M170,50 C220,-10 300,10 310,80 C320,150 260,200 200,190 C140,180 100,120 170,50Z";

  const pathD = useTransform(progress, [0, 0.5, 1], [d1, d2, d3]);

  return (
    <svg viewBox="0 0 400 240" width="360" height="240" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id="blobGrad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
          <stop offset="60%" stopColor="rgba(99,102,241,0.3)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
        </radialGradient>
        <filter id="blobBlur">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <motion.path style={{ d: pathD as any }} fill="url(#blobGrad)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── WORDS that appear one by one ─── */
const STORY_LINES = [
  { words: ['We', 'Build'], accent: [] },
  { words: ['Custom', 'Software'], accent: ['Custom', 'Software'] },
  { words: ['AI', 'Systems'], accent: ['AI'] },
  { words: ['&', 'Digital', 'Products'], accent: ['Digital', 'Products'] },
  { words: ['That', 'Transform'], accent: [] },
  { words: ['Your', 'Business.'], accent: ['Your', 'Business.'] },
];

function ScrollWord({ word, isAccent, progress, index, total }: { word: string; isAccent: boolean; progress: ReturnType<typeof useSpring>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const y = useTransform(progress, [start, end], [24, 0]);
  const color = useTransform(progress, [start, start + 0.1], isAccent ? ['rgba(139,92,246,0.2)', '#8B5CF6'] : ['rgba(255,255,255,0.1)', 'white']);

  return (
    <motion.span style={{ opacity, y, color, display: 'inline-block', marginRight: '0.35em' }}>
      {word}
    </motion.span>
  );
}

/* ─── Main Section ─── */
export function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 18 });

  // Transform scroll ranges for various elements
  const cube1X = useTransform(smooth, [0, 0.4], [200, -40]);
  const cube1Y = useTransform(smooth, [0, 0.4], [-60, 30]);
  const cube1Rotate = useTransform(smooth, [0, 1], [0, 120]);
  const cube1Scale = useTransform(smooth, [0, 0.3, 0.6], [0.3, 1, 0.8]);

  const checkX = useTransform(smooth, [0.3, 0.8], [300, 0]);
  const checkY = useTransform(smooth, [0.3, 0.8], [100, -20]);
  const checkRotate = useTransform(smooth, [0.3, 1], [30, -15]);
  const checkScale = useTransform(smooth, [0.3, 0.7, 1], [0, 1, 0.85]);

  const starRotate1 = useTransform(smooth, [0, 1], [0, 360]);
  const star1X = useTransform(smooth, [0, 0.5, 1], [-80, 40, -20]);
  const star1Y = useTransform(smooth, [0, 0.5, 1], [20, -40, 80]);
  const star1Scale = useTransform(smooth, [0, 0.3, 0.7, 1], [0, 1, 1.2, 0.7]);

  const starRotate2 = useTransform(smooth, [0, 1], [180, -180]);
  const star2X = useTransform(smooth, [0, 0.5, 1], [80, -30, 60]);
  const star2Scale = useTransform(smooth, [0.4, 0.7, 1], [0, 1, 0.8]);

  const blobRotate = useTransform(smooth, [0, 1], [-20, 40]);
  const blobX = useTransform(smooth, [0, 1], [-100, 60]);
  const blobOpacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0, 0.8, 0.8, 0]);

  const bgProgress = useTransform(smooth, [0, 1], [0, 1]);

  // Flatten all words with their line index for staggered reveal
  const allWords: { word: string; isAccent: boolean }[] = [];
  STORY_LINES.forEach((line) => {
    line.words.forEach((w) => allWords.push({ word: w, isAccent: line.accent.includes(w) }));
  });

  return (
    <div ref={containerRef} style={{ height: '350vh', position: 'relative' }}>
      {/* Sticky canvas */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background grid glow */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* ── SVG draw path ── */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <DrawPath progress={smooth} />
        </div>

        {/* ── Morph blob (background) ── */}
        <motion.div style={{ position: 'absolute', top: '15%', left: '5%', opacity: blobOpacity, x: blobX, rotate: blobRotate, pointerEvents: 'none', mixBlendMode: 'screen' }}>
          <MorphBlob progress={smooth} />
        </motion.div>

        {/* ── Isometric Cube 1 ── */}
        <motion.div style={{ position: 'absolute', top: '12%', right: '8%', x: cube1X, y: cube1Y, rotate: cube1Rotate, scale: cube1Scale, filter: 'drop-shadow(0 20px 40px rgba(139,92,246,0.4))' }}>
          <IsoCube size={180} />
        </motion.div>

        {/* ── Isometric Checkmark ── */}
        <motion.div style={{ position: 'absolute', bottom: '12%', right: '6%', x: checkX, y: checkY, rotate: checkRotate, scale: checkScale, filter: 'drop-shadow(0 20px 40px rgba(16,185,129,0.4))' }}>
          <IsoCheck size={200} />
        </motion.div>

        {/* ── Star 1 (white) ── */}
        <motion.div style={{ position: 'absolute', top: '20%', left: '12%', x: star1X, y: star1Y, rotate: starRotate1, scale: star1Scale }}>
          <StarShape size={64} color="rgba(255,255,255,0.85)" />
        </motion.div>

        {/* ── Star 2 (purple) ── */}
        <motion.div style={{ position: 'absolute', bottom: '22%', left: '18%', x: star2X, rotate: starRotate2, scale: star2Scale }}>
          <StarShape size={42} color="#8B5CF6" />
        </motion.div>

        {/* ── Small floating cubes (decorative) ── */}
        <motion.div style={{ position: 'absolute', top: '55%', left: '6%', rotate: useTransform(smooth, [0,1], [0, -90]), scale: useTransform(smooth, [0, 0.5, 1], [0.2, 0.7, 0.5]), opacity: useTransform(smooth, [0.2, 0.5], [0, 1]) }}>
          <IsoCube size={80} />
        </motion.div>
        <motion.div style={{ position: 'absolute', top: '30%', right: '22%', rotate: useTransform(smooth, [0,1], [0, 60]), scale: useTransform(smooth, [0.1, 0.5, 1], [0, 0.5, 0.4]), opacity: useTransform(smooth, [0.3, 0.6], [0, 0.7]) }}>
          <IsoCube size={60} />
        </motion.div>

        {/* ── Dashed circle orbit ── */}
        <motion.div
          style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', border: '1.5px dashed rgba(139,92,246,0.2)', top: '50%', left: '50%', marginLeft: '-190px', marginTop: '-190px', rotate: useTransform(smooth, [0, 1], [0, 180]) }}
        />

        {/* ── Text reveal ── */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5.5vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.03em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.1em 0' }}>
            {STORY_LINES.map((line, li) => (
              <div key={li} style={{ width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {line.words.map((word, wi) => {
                  const globalIdx = STORY_LINES.slice(0, li).reduce((a, l) => a + l.words.length, 0) + wi;
                  return (
                    <ScrollWord
                      key={wi}
                      word={word}
                      isAccent={line.accent.includes(word)}
                      progress={smooth}
                      index={globalIdx}
                      total={allWords.length}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Sub-text fades in near end */}
          <motion.p style={{ marginTop: '2rem', color: '#94A3B8', fontSize: '1.1rem', opacity: useTransform(smooth, [0.7, 1], [0, 1]), y: useTransform(smooth, [0.7, 1], [20, 0]) }}>
            Scroll-driven, AI-powered, results-obsessed software for every business.
          </motion.p>
        </div>

        {/* ── Progress bar at bottom ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.05)' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)', transformOrigin: 'left', scaleX: smooth }} />
        </div>

        {/* ── Scroll hint ── */}
        <motion.div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', x: '-50%', opacity: useTransform(smooth, [0, 0.1], [1, 0]) }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <svg width="30" height="40" viewBox="0 0 30 40">
              <rect x="5" y="3" width="20" height="34" rx="10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <motion.rect x="12.5" y="9" width="5" height="8" rx="2.5" fill="rgba(139,92,246,0.8)"
                animate={{ y: [9, 18, 9] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
