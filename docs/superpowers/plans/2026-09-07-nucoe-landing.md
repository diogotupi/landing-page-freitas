# NUCOE Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a local Next.js landing page for the NUCOE live formation that matches the approved IDV/spec and includes rich client-side motion.

**Architecture:** Single App Router page composed of section components; all copy/offer fields from `content/nucoe.ts`; brand tokens in CSS; client components for scroll/mouse/FAQ animation.

**Tech Stack:** Next.js App Router, TypeScript, CSS Modules + globals, client JS motion (IntersectionObserver, requestAnimationFrame, CSS custom properties) — no Tailwind.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-09-07-nucoe-landing-design.md`
- Palette: `#cc001e` `#231e1e` `#5e1818` `#cec6c6` `#f5f1f0`
- Fonts: Syne (display) + DM Sans (body)
- CTA → `checkoutUrl` with `#oferta` fallback
- Hero: centered brand + chevron; no Freitas in first viewport
- Rhythm: alternating dark/light; NUCOE = 3 columns
- Event: 2 nights × 4h; placeholders for date/price/media
- Respect `prefers-reduced-motion`
- User override: rich JS “frufru” (magnetic CTAs, scroll progress, reveal, parallax, chevron canvas) while keeping brand serious

---

### Task 1: Scaffold + brand assets

**Files:**
- Next.js app scaffold
- `public/brand/logo-negativo.png`, `public/brand/logo-positivo.png`
- `.gitignore` include `.superpowers/`

- [ ] Create Next.js TS app in project root
- [ ] Copy logos into `public/brand/`
- [ ] Add IDV CSS variables + fonts in `layout.tsx` / `globals.css`
- [ ] Verify `npm run dev` starts

### Task 2: Content module

**Files:**
- `src/content/nucoe.ts`

- [ ] Port Estrutura copy (PT-BR), FAQ, event, price, checkout placeholder, testimonials slots, guide bio
- [ ] Export typed `NucoeContent`

### Task 3: Primitives + motion utilities

**Files:**
- `src/components/CtaButton.tsx`
- `src/components/Reveal.tsx`
- `src/components/Magnetic.tsx`
- `src/components/ScrollProgress.tsx`
- `src/components/ChevronField.tsx`
- `src/components/StickyCta.tsx`
- `src/hooks/usePrefersReducedMotion.ts`

- [ ] Implement magnetic button, reveal-on-scroll, scroll progress bar, animated chevron canvas/field, mobile sticky CTA
- [ ] Wire reduced-motion short-circuits

### Task 4: Fourteen sections + page compose

**Files:**
- `src/components/sections/*.tsx`
- `src/app/page.tsx`
- `src/components/Header.tsx`
- `src/components/NucoeDiagram.tsx`
- `src/components/FaqAccordion.tsx`

- [ ] Build all 14 sections per spec order and rhythm
- [ ] Compose on `page.tsx`
- [ ] FAQ accordion accessible

### Task 5: Verify

- [ ] `npm run build` passes
- [ ] Smoke-check key sections in browser or build output

---

## Execution note

User requested immediate delivery with heavy JS polish. Implement tasks sequentially in one session; skip per-task git commits (repo not initialized / commits only on request).
