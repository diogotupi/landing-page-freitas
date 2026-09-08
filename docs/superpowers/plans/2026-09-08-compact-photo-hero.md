# Compact Photo Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the oversized text-only hero with a compact split hero featuring Freitas.

**Architecture:** Keep the existing landing component and content config. Change only hero content, markup, and responsive CSS. Reuse `/images/freitas-speaking.jpg`.

**Tech Stack:** Next.js, TypeScript, CSS Modules, Node test runner.

## Global Constraints

- Headline is exactly `Sua empresa sabe quem é?`
- Subheadline is exactly `Construa Propósito, Valores e Princípios para orientar pessoas e decisões.`
- Desktop hero uses text left and Freitas photo right.
- Desktop hero target height is approximately `76svh`.
- Mobile hero uses the photo as a right-side background with a dark gradient.
- Remove the large lower hero mark.
- Keep CTA, event microcopy, Rift headings, reduced-motion support, and accessible image alt text.

---

### Task 1: Compact photo hero

**Files:**
- Modify: `tests/brand-refresh.test.mjs`
- Modify: `src/content/nucoe.ts`
- Modify: `src/components/LandingSections.tsx`
- Modify: `src/components/LandingSections.module.css`

**Interfaces:**
- Consumes: `nucoe.hero.headline`, `nucoe.hero.subheadline`, `/images/freitas-speaking.jpg`
- Produces: responsive split hero at `#hero`

- [ ] Add regression assertions for exact copy, photo source, split class, maximum height, and removed `HeroMark`.
- [ ] Run `node --test tests/brand-refresh.test.mjs` and confirm failure.
- [ ] Update hero copy in `src/content/nucoe.ts`.
- [ ] Add the decorative Freitas image and split wrappers in `LandingSections.tsx`.
- [ ] Implement the compact desktop and mobile compositions in the CSS module.
- [ ] Run tests, lint, build, and browser visual checks.
