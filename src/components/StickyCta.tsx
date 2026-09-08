"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { resolveCheckoutHref } from "@/content/nucoe";

type Props = {
  label: string;
  checkoutUrl: string;
};

export function StickyCta({ label, checkoutUrl }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const offer = document.getElementById("oferta");
      if (!hero) return;
      const pastHero = window.scrollY > hero.offsetHeight * 0.65;
      const offerTop = offer?.getBoundingClientRect().top ?? 9999;
      const nearOffer = offerTop < window.innerHeight * 0.85;
      setVisible(pastHero && !nearOffer);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "is-visible" : ""}`}>
      <CtaButton href={resolveCheckoutHref(checkoutUrl)}>{label}</CtaButton>
    </div>
  );
}
