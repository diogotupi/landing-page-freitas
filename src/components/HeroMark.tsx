"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroMark.module.css";

export function HeroMark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bars = el.querySelectorAll<HTMLElement>("[data-bar]");
    bars.forEach((bar, i) => {
      bar.style.setProperty("--i", String(i));
      bar.classList.add(styles.in);
    });
  }, []);

  return (
    <div ref={ref} className={styles.mark} aria-hidden>
      <span data-bar className={`${styles.bar} ${styles.l1}`} />
      <span data-bar className={`${styles.bar} ${styles.l2}`} />
      <span data-bar className={`${styles.bar} ${styles.l3}`} />
      <span data-bar className={`${styles.bar} ${styles.r1}`} />
      <span data-bar className={`${styles.bar} ${styles.r2}`} />
      <span data-bar className={`${styles.bar} ${styles.r3}`} />
    </div>
  );
}
