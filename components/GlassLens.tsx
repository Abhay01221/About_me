'use client';

import { useEffect, useRef } from 'react';

export default function GlassLens({ dark }: { dark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let width = 0;
    let height = 0;
    let x = 0.57;
    let y = 0.48;
    let targetX = x;
    let targetY = y;
    let disposed = false;

    function draw() {
      if (!canvas || !ctx || disposed) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, width, height);
      x += (targetX - x) * (motion.matches ? 1 : 0.12);
      y += (targetY - y) * (motion.matches ? 1 : 0.12);
      const cx = width * x;
      const cy = height * y;
      const rx = Math.min(width * 0.2, 180);
      const ry = rx * 0.75;
      const ink = dark ? '#f4f3ef' : '#242522';
      const accent = dark ? '#bcb5a8' : '#7f7b71';

      function type(scale = 1) {
        if (!ctx) return;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);
        ctx.translate(-cx, -cy);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = ink;
        ctx.font = `400 ${Math.min(width * 0.112, 142)}px "Portfolio Serif", Georgia, serif`;
        ctx.fillText('ABHAY SAWALE', width / 2, height * 0.37);
        ctx.fillStyle = accent;
        ctx.font = `italic 400 ${Math.min(width * 0.088, 110)}px "Portfolio Serif", Georgia, serif`;
        ctx.fillText('Software & AI Systems', width / 2, height * 0.64);
        ctx.restore();
      }

      type();
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, -0.2, 0, Math.PI * 2);
      ctx.shadowColor = dark ? '#0009' : '#37332928';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 16;
      ctx.fillStyle = dark ? '#ffffff05' : '#ffffff18';
      ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.clip();
      ctx.clearRect(cx - rx - 20, cy - ry - 20, rx * 2 + 40, ry * 2 + 40);
      type(1.22);
      const gradient = ctx.createRadialGradient(cx - rx * 0.3, cy - ry * 0.4, 5, cx, cy, rx);
      gradient.addColorStop(0, dark ? '#ffffff12' : '#ffffff50');
      gradient.addColorStop(0.7, '#ffffff00');
      gradient.addColorStop(0.9, dark ? '#bdd9f51a' : '#dbedff55');
      gradient.addColorStop(1, dark ? '#ffffff65' : '#fffffff2');
      ctx.fillStyle = gradient;
      ctx.fillRect(cx - rx - 20, cy - ry - 20, rx * 2 + 40, ry * 2 + 40);
      ctx.restore();
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, -0.2, 0, Math.PI * 2);
      ctx.strokeStyle = dark ? '#ffffff55' : '#ffffffe8';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      frame = 0;
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.0005) frame = requestAnimationFrame(draw);
    }

    function schedule() {
      if (!frame && !disposed) frame = requestAnimationFrame(draw);
    }
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      schedule();
    }
    function move(event: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetX = Math.min(0.86, Math.max(0.14, (event.clientX - rect.left) / width));
      targetY = Math.min(0.74, Math.max(0.25, (event.clientY - rect.top) / height));
      schedule();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener('pointermove', move);
    document.fonts.ready.then(schedule);
    resize();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener('pointermove', move);
    };
  }, [dark]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
