"use client";

import { useEffect, useRef } from "react";
import { subscribeReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let reduced = false;
    const unsub = subscribeReducedMotion((r) => {
      reduced = r;
      if (r) el.style.transform = "scaleX(0)";
    });

    const onScroll = () => {
      if (reduced) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden />;
}
