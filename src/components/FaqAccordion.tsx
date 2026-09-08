"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/content/nucoe";
import styles from "./FaqAccordion.module.css";

type Props = {
  items: readonly FaqItem[];
};

export function FaqAccordion({ items }: Props) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-btn-${index}`;
        return (
          <div key={item.question} className={styles.item}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
            >
              <div className={styles.panelInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
