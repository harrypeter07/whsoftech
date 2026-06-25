'use client';

import { useEffect, useRef } from 'react';

interface Pt3 { x: number; y: number; z: number }
interface Proj { sx: number; sy: number; depth: number }

export function ParticleSphere({ size = 420 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    /* Fibonacci sphere distribution for even point spread */
    const N = 160;
    const pts: Pt3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    const R = size / 2;
    const TILT_X = 0.28;
    const cosX = Math.cos(TILT_X);
    const sinX = Math.sin(TILT_X);
    let ry = 0;
    let animId: number;

    const project = (p: Pt3): Proj => {
      /* Y-axis rotation */
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      /* X-axis tilt */
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      /* Perspective */
      const fov = R * 2.6;
      const z3 = z2 + 2.8;
      return {
        sx: (x1 / z3) * fov + R,
        sy: (y2 / z3) * fov + R,
        depth: (z2 + 1) / 2,
      };
    };

    const CONN_DIST = R * 0.44;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ry += 0.0045;

      const proj = pts.map(project);

      /* Connection lines */
      for (let i = 0; i < proj.length; i++) {
        const a = proj[i];
        for (let j = i + 1; j < proj.length; j++) {
          const b = proj[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < CONN_DIST * CONN_DIST) {
            const t = 1 - Math.sqrt(dist2) / CONN_DIST;
            const alpha = t * t * 0.22 * Math.min(a.depth, b.depth);
            ctx.strokeStyle = `rgba(124,58,237,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      /* Dots — purple on front, cyan on back */
      proj.forEach(p => {
        const r = 1.0 + p.depth * 2.8;
        const alpha = 0.2 + p.depth * 0.8;
        if (p.depth > 0.55) {
          ctx.fillStyle = `rgba(167,139,250,${alpha.toFixed(2)})`;
        } else {
          ctx.fillStyle = `rgba(14,165,233,${(alpha * 0.75).toFixed(2)})`;
        }
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      /* Equator glow ring */
      const cx = R, cy = R;
      const ringRadius = R * 0.78;
      const grad = ctx.createRadialGradient(cx, cy, ringRadius * 0.85, cx, cy, ringRadius * 1.05);
      grad.addColorStop(0, 'rgba(124,58,237,0.04)');
      grad.addColorStop(0.5, 'rgba(124,58,237,0.08)');
      grad.addColorStop(1, 'rgba(124,58,237,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(cx, cy, ringRadius, ringRadius * 0.28, 0, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size, display: 'block' }}
    />
  );
}
