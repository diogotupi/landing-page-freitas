"use client";

import { useEffect, useRef } from "react";
import { subscribeReducedMotion } from "@/hooks/usePrefersReducedMotion";
import styles from "./ChevronField.module.css";

type Props = {
  className?: string;
  density?: number;
};

export function ChevronField({ className = "", density = 18 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let reduced = false;
    let raf = 0;
    let w = 0;
    let h = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;
    const particles = Array.from({ length: density }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      s: 8 + Math.random() * 18,
      a: 0.08 + Math.random() * 0.22,
      sp: 0.00015 + Math.random() * 0.00035,
      phase: Math.random() * Math.PI * 2,
      side: i % 2 === 0 ? -1 : 1,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawChevron = (
      x: number,
      y: number,
      size: number,
      alpha: number,
      side: number,
    ) => {
      ctx.beginPath();
      ctx.moveTo(x - size * side, y - size * 0.35);
      ctx.lineTo(x, y + size * 0.55);
      ctx.lineTo(x + size * side, y - size * 0.35);
      ctx.strokeStyle = `rgba(204, 0, 30, ${alpha})`;
      ctx.lineWidth = Math.max(1.5, size * 0.08);
      ctx.stroke();
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduced) {
          p.y += p.sp;
          if (p.y > 1.1) p.y = -0.1;
          p.x += Math.sin(t * 0.0004 + p.phase) * 0.00025;
        }
        const px = p.x * w + (mouseX - 0.5) * 24 * p.side;
        const py = p.y * h + (mouseY - 0.5) * 18;
        drawChevron(px, py, p.s, p.a, p.side);
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / Math.max(rect.width, 1);
      mouseY = (e.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const unsub = subscribeReducedMotion((r) => {
      reduced = r;
    });

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      unsub();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${className}`.trim()}
      aria-hidden
    />
  );
}
