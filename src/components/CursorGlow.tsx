"use client";

import { useEffect, useRef } from "react";
import { subscribeReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let reduced = false;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const unsub = subscribeReducedMotion((r) => {
      reduced = r;
      el.classList.toggle("is-on", false);
    });

    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      if (reduced) return;
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add("is-on");
    };

    const onLeave = () => el.classList.remove("is-on");

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      unsub();
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden />;
}
