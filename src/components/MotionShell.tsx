"use client";

import { useEffect } from "react";
import { subscribeReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MotionShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    return subscribeReducedMotion((reduced) => {
      document.documentElement.classList.toggle("reduce-motion", reduced);
    });
  }, []);

  return <>{children}</>;
}
