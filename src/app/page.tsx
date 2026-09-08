import { CursorGlow } from "@/components/CursorGlow";
import { LandingSections } from "@/components/LandingSections";
import { MotionShell } from "@/components/MotionShell";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCta } from "@/components/StickyCta";
import { nucoe } from "@/content/nucoe";

export default function HomePage() {
  return (
    <MotionShell>
      <ScrollProgress />
      <CursorGlow />
      <SiteHeader checkoutUrl={nucoe.checkoutUrl} ctaLabel={nucoe.ctas.offer} />
      <main>
        <LandingSections />
      </main>
      <StickyCta checkoutUrl={nucoe.checkoutUrl} label={nucoe.ctas.offer} />
    </MotionShell>
  );
}
