"use client";

import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { resolveCheckoutHref } from "@/content/nucoe";
import { assetPath } from "@/lib/assetPath";
import styles from "./SiteHeader.module.css";

type Props = {
  checkoutUrl: string;
  ctaLabel: string;
};

export function SiteHeader({ checkoutUrl, ctaLabel }: Props) {
  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.brand} aria-label="Instituto 2630">
        <Image
          src={assetPath("/brand/logo-negativo-transparente.png")}
          alt="Instituto 26 30"
          width={120}
          height={120}
          className={styles.logo}
          priority
          unoptimized
        />
      </a>
      <CtaButton
        href={resolveCheckoutHref(checkoutUrl)}
        variant="ghost"
        className={styles.desktopCta}
        magnetic={false}
      >
        {ctaLabel}
      </CtaButton>
    </header>
  );
}
