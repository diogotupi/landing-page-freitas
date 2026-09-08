# Design: Landing Page NUCOE — Instituto 2630

**Date:** 2026-09-07  
**Status:** Approved for implementation planning  
**Product:** Formação ao vivo e online — NUCOE (Núcleo Organizacional da Empresa)

## 1. Goal

Build a local-first marketing landing page that sells the paid live NUCOE formation as the national entry product for Instituto 2630. The page must follow the Estrutura briefing (14 sections), StoryBrand narrative (entrepreneur as hero; Freitas/Instituto as guide), and the official IDV (logo, palette, geometric language).

Success criteria:

- Visitor understands in ~10s that the page is about *them* (culture/essence problem).
- In ~30s they see a clear method (NUCOE = Propósito + Valores + Princípios).
- Primary CTA always points to an external checkout URL (placeholder until real link exists).
- Copy, date, schedule, price, and checkout URL are editable from one content config file.
- Brand-compliant on desktop and mobile without looking like a military site.

## 2. Scope

### In scope

- Next.js (App Router) + TypeScript single-page landing at `/`
- Central content module (`content/nucoe.ts`) for all marketing copy and offer fields
- 14 sections in the order defined below
- Brand assets: positive and negative logos
- Placeholder slots for Freitas photo and 3–5 testimonials
- External checkout CTAs
- Light scroll / FAQ motion (2–3 intentional animations)
- Local `npm run dev` workflow; deployable later (e.g. Vercel)

### Out of scope (this iteration)

- Real checkout / payment integration beyond a URL
- CMS, analytics, email capture forms
- Real photos, video testimonials, finalized price/date
- Institutional multi-page site / home redesign from the broader StoryBrand plan
- Full School of Skull depth (only introduce practices as bridge)

## 3. Decisions locked

| Topic | Decision |
|--------|----------|
| Stack | Next.js App Router + TypeScript |
| CTA | External payment link (`checkoutUrl` placeholder) |
| Media | Placeholder slots; assets arrive later |
| Event format | 2 consecutive nights × 4 hours |
| Hero | Compact split layout with Freitas photo on the right |
| Page rhythm | Alternating dark / light contrast blocks |
| NUCOE diagram | Three columns with short microcopy |
| Architecture | Single page + `content/nucoe.ts` config |

## 4. Brand system (IDV)

### Colors

| Token | Hex | Use |
|--------|-----|-----|
| `--red` | `#cc001e` | CTAs, accents, section markers |
| `--near-black` | `#231e1e` | Dark section backgrounds, strong text on light |
| `--dark-red` | `#5e1818` | Secondary dark accents, subtle borders |
| `--grey` | `#cec6c6` | Secondary text on dark; proof section surface |
| `--off-white` | `#f5f1f0` | Light section backgrounds, text on dark |

### Logo

- Dark backgrounds → negative logo (light wordmark + red chevron)
- Light backgrounds → positive logo (dark wordmark + red chevron)
- Do not distort, recolor, rotate, add shadows, or place on low-contrast backgrounds

### Typography

- Display / headlines: **Rift** (Adobe Fonts)
- Body / UI: **Manrope**
- Generous tracking on small uppercase labels (eyebrow style like “INSTITUTO”)
- First occurrence of NUCOE must expand: **Núcleo Organizacional da Empresa**
- CTA labels: primary `QUERO CONSTRUIR O NUCOE DA MINHA EMPRESA`; secondary `GARANTIR MINHA VAGA NA FORMAÇÃO AO VIVO` / short `GARANTIR MINHA VAGA` on offer

### Visual tone

- High contrast; black / white / red
- Corporate audience first; Operações Especiais = origin and metaphor, not costume
- Prefer faces, leadership, teams, decisions over weapons/tactical clichés
- Chevron motif sparingly (hero + occasional section accent), not decoration spam

## 5. Information architecture (14 sections)

1. **Hero (dark)** — Compact split composition. Left: eyebrow, headline “Sua empresa sabe quem é?”, one-line subheadline, primary CTA and event microcopy. Right: real Freitas photo from the approved Drive assets. Target height is about 76vh on desktop, with no large chevron mark below the CTA. On mobile, the photo becomes a right-side background with a protective gradient.
2. **Pattern interrupt (light)** — “SEM CULTURA, VOCÊ SE TORNA FUNCIONÁRIO DO SEU COLABORADOR.” + explanatory copy.
3. **Problem (light)** — Training without essence starts at the end.
4. **Core idea / NUCOE (dark)** — Three columns: Propósito (dá sentido), Valores (orientam), Princípios (protegem). Closing line: essence stays; practices evolve.
5. **Special ops bridge (dark)** — BOPE metaphor for identity and decision under pressure; translate to business, do not militarize.
6. **Deliverables (light)** — List of what the participant starts building + CTA.
7. **Method (light)** — Linear flow: Quem somos → Como lideramos → Como decidimos → Como criamos práticas → Como crescemos sem perder a essência.
8. **Who it’s for (light)** — Two columns: É para / Não é para.
9. **Guide (dark)** — Freitas photo placeholder + short bio (BOPE → entrepreneurship → Instituto 2630). Authority, not full biography.
10. **Proof (grey)** — 3–5 testimonial placeholders (quote, name, role); prefer specificity over “foi incrível”.
11. **Offer (dark)** — 2×4h Zoom format; hours; materials; NUCOE tool; price placeholder; CTA “Garantir minha vaga” → `checkoutUrl`.
12. **Bonus (dark, continuous with offer)** — Recorded course after live participation as continuity library, not main product.
13. **FAQ (light)** — Accordion covering objections from Estrutura.
14. **Close (dark)** — Closing headline + final CTA.

Repeat primary/secondary CTAs after: hero, problem cluster, method/deliverables, guide, offer, close.

## 6. Content configuration

Single source of truth, e.g. `content/nucoe.ts`, exporting:

- All section headlines and body copy (Portuguese, from Estrutura)
- `checkoutUrl` (placeholder string)
- `event`: format description, nights, hours, timezone label, `dateLabel`, `timeLabel`, `seatsLabel`
- `priceLabel` (placeholder)
- `testimonials[]` placeholder objects
- `guide` bio + `imageSrc` placeholder path
- FAQ Q&A array

UI components must not hardcode offer fields.

## 7. Technical shape

```
app/
  layout.tsx          # fonts, metadata, global CSS variables
  page.tsx            # composes sections
  globals.css         # IDV tokens, base type, section utilities
components/
  Header.tsx          # logo only in hero; mobile sticky CTA bar after scroll past hero
  sections/           # one file per major section (or grouped)
  NucoeDiagram.tsx
  CtaButton.tsx       # links to checkoutUrl
  FaqAccordion.tsx
  TestimonialSlot.tsx
  GuidePortrait.tsx
content/
  nucoe.ts
public/
  brand/              # logo positivo / negativo
```

- Mobile-first CSS; large tap targets for CTAs
- Semantic HTML; accessible accordion (keyboard + `aria-expanded`)
- No card chrome in hero; avoid decorative multi-shadow / purple-glow AI defaults
- Prefer CSS transitions / small IntersectionObserver fades over heavy animation libraries unless already justified

## 8. Motion

1. Section content fade-up on enter viewport (subtle, once)
2. Hero chevron entrance
3. FAQ open/close height transition

Respect `prefers-reduced-motion`.

## 9. Error / empty states

- Missing Freitas image → branded placeholder block (no broken icon)
- Empty testimonials → show labeled slots so layout stays stable when real quotes arrive
- Invalid/missing `checkoutUrl` → still render buttons pointing to `#oferta` fallback until URL is set (document in config comments)

## 10. Testing / verification

Before calling the page “done”:

- `npm run build` succeeds
- Manual pass: mobile (~375px) and desktop (~1280px) — hero, NUCOE diagram, offer, FAQ, all CTAs
- Spot-check contrast on dark and light sections
- Confirm first NUCOE occurrence is expanded
- Confirm no hardcoded price/date outside `content/nucoe.ts`

## 11. Message mother (campaign alignment)

> A cultura começa quando a empresa descobre quem é.  
> NUCOE = Propósito + Valores + Princípios  
> Construa a essência. Treine a liderança. Preserve o que importa. Fomente o progresso.

Positioning line for subheads where useful:  
“Construa a essência da sua empresa para que sua cultura não dependa da sua presença.”
