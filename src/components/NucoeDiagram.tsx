"use client";

import { useRef, type MouseEvent } from "react";
import { Reveal } from "@/components/Reveal";
import styles from "./NucoeDiagram.module.css";

type Pillar = {
  title: string;
  micro: string;
  detail: string;
};

type Props = {
  pillars: readonly Pillar[];
  closing: string;
};

export function NucoeDiagram({ pillars, closing }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
    card.dataset.index = String(index);
  };

  const onLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div className={styles.eq}>
        <span className={styles.brand}>NUCOE</span>
        <span className={styles.equals}>=</span>
        <span>Propósito</span>
        <span className={styles.plus}>+</span>
        <span>Valores</span>
        <span className={styles.plus}>+</span>
        <span>Princípios</span>
      </div>
      <div className={styles.grid}>
        {pillars.map((p, i) => (
          <Reveal key={p.title} delayMs={i * 120} className={styles.cardReveal}>
            <article
              className={styles.card}
              onMouseMove={(e) => onMove(e, i)}
              onMouseLeave={onLeave}
            >
              <div className={styles.accent} />
              <h3>{p.title}</h3>
              <p className={styles.micro}>{p.micro}</p>
              <p className={styles.detail}>{p.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className={styles.closing}>{closing}</p>
    </div>
  );
}
