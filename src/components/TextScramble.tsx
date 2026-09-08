"use client";

import { useEffect, useRef, useState } from "react";
import { subscribeReducedMotion } from "@/hooks/usePrefersReducedMotion";
import styles from "./TextScramble.module.css";

const GLYPHS = "26◼︎30▲◆◼︎NUCOE◼︎";

type Props = {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  trigger?: boolean;
};

export function TextScramble({
  text,
  as: Tag = "h1",
  className = "",
  trigger = true,
}: Props) {
  const [out, setOut] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    let reduced = false;
    const unsub = subscribeReducedMotion((r) => {
      reduced = r;
    });
    if (reduced) {
      unsub();
      return;
    }

    started.current = true;
    let frame = 0;
    const total = Math.max(18, text.length + 8);
    let raf = 0;

    const tick = () => {
      frame += 1;
      const progress = frame / total;
      const keep = Math.floor(progress * text.length);
      let next = text.slice(0, keep);
      for (let i = keep; i < text.length; i += 1) {
        if (text[i] === " " || text[i] === "|" || text[i] === "•") {
          next += text[i];
        } else {
          next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "◼︎";
        }
      }
      setOut(next);
      if (frame < total) raf = requestAnimationFrame(tick);
      else setOut(text);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      unsub();
      cancelAnimationFrame(raf);
    };
  }, [text, trigger]);

  return <Tag className={`${styles.root} ${className}`.trim()}>{out}</Tag>;
}
