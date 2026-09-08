"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { subscribeReducedMotion } from "@/hooks/usePrefersReducedMotion";
import styles from "./CtaButton.module.css";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
  magnetic?: boolean;
};

export function CtaButton({
  children,
  className = "",
  variant = "primary",
  magnetic = true,
  href = "#",
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedRef = useRef(false);

  useEffect(() => subscribeReducedMotion((r) => {
    reducedRef.current = r;
  }), []);

  const onMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    if (!magnetic || reducedRef.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
  }, [magnetic]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={`${styles.btn} ${styles[variant]} ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      <span className={styles.shine} aria-hidden />
      <span className={styles.label}>{children}</span>
    </a>
  );
}
