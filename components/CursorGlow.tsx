'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Smooth animation with RAF and lerp for performance
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 250}px, ${currentY - 250}px)`;
      }

      if (secondaryGlowRef.current) {
        // Secondary glow follows faster
        const secondaryX = currentX + (targetX - currentX) * 0.15;
        const secondaryY = currentY + (targetY - currentY) * 0.15;
        secondaryGlowRef.current.style.transform = `translate(${secondaryX - 100}px, ${secondaryY - 100}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow - optimized with CSS transforms and will-change */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-30 hidden md:block will-change-transform"
        style={{ transform: 'translate(-250px, -250px)' }}
      >
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-600/15 to-cyan-600/15 rounded-full blur-3xl" />
      </div>

      {/* Secondary smaller glow */}
      <div
        ref={secondaryGlowRef}
        className="pointer-events-none fixed top-0 left-0 z-30 hidden md:block will-change-transform"
        style={{ transform: 'translate(-100px, -100px)' }}
      >
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-2xl" />
      </div>
    </>
  );
}
