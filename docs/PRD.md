# PRD — Kufre Udoh Portfolio Website

## 1. Overview

A personal portfolio website for **Kufre Udoh**, software engineer. It showcases past project contributions, current work, and a "sneak peek" into ongoing projects. The site should feel **calm, cozy, and modern** — interactive without being noisy. Dark-first design with a warm amber accent.

- **Owner:** Kufre Udoh (gentlekboy@gmail.com)
- **Status:** Greenfield. This folder is the project root; scaffold the app directly into it.
- **Companion doc:** `DESIGN_TOKENS.md` — the single source of truth for all visual values. Do not invent colors, fonts, spacing, or motion values; pull them from there.

## 2. Goals

1. Present Kufre's identity and skills within 5 seconds of landing.
2. Showcase 2–4 past/shipped projects with role, stack, and outcomes.
3. Give a distinct "Now / In Progress" section teasing ongoing work — this is a signature feature, visually differentiated from shipped work.
4. Feel calm and polished: subtle motion, generous whitespace, strong typography.
5. Be trivially updatable: adding a project = editing one data file.
6. Deploy free on Vercel; custom domain can be attached later without code changes.

### Non-goals (v1)

- No CMS, no database, no auth.
- No blog (structure should not preclude adding one later).
- No light mode (dark-first only; keep CSS variables so light mode is easy later).
- No analytics beyond whatever Vercel provides out of the box.

## 3. Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js (latest, App Router, TypeScript) |
| Styling | Tailwind CSS (v4), themed via CSS variables from `DESIGN_TOKENS.md` |
| Motion | Framer Motion (`motion` package) for reveals/hover; CSS for ambient effects |
| Fonts | `next/font/google` — see DESIGN_TOKENS.md §Typography |
| Content | Typed TypeScript data file (`content/projects.ts`). May migrate to MDX later |
| Hosting | Vercel, push-to-deploy from GitHub, on `*.vercel.app` for now |
| Package manager | npm |

## 4. Site structure

Single-page layout (`/`) with anchor-linked sections, plus optional per-project detail pages later. Sections in order:

### 4.1 Header / Nav
- Sticky, translucent with backdrop blur. Left: "Kufre Udoh" wordmark. Right: anchor links — Projects, Now, About, Contact.
- Collapses gracefully on mobile (links can remain inline if they fit; no hamburger needed for 4 links).

### 4.2 Hero
- Name: **Kufre Udoh** (display font, largest type on the page).
- One-liner: *"Software engineer crafting calm, dependable products — from resilient backends to interfaces that feel effortless."*
- Ambient background: slow-moving radial amber glow / gradient drift (CSS only, 20s+ loop, low opacity). Motion you feel, not notice.
- Quick links: GitHub, LinkedIn, Email — icon buttons with amber hover glow.
- A subtle "scroll" affordance at the bottom.

### 4.3 Projects (shipped work)
- Section label + short intro line.
- Responsive grid of project cards (1 col mobile, 2 col ≥768px).
- Each card: project name, role badge (e.g. "Core contributor"), 1–2 sentence outcome-focused blurb, stack tags, links (live / repo) where available.
- Hover: gentle lift + border warms toward amber (see DESIGN_TOKENS.md §Motion).

### 4.4 Now / In Progress (signature section)
- Visually distinct from Projects: cards use dashed or glowing borders, slightly translucent background, and a pulsing "WIP" status dot.
- Each entry: name, stage label (e.g. "Design phase", "Private beta"), teaser description, stack tags. No repo links required.
- Copy tone: intriguing but honest — a sneak peek, not a promise.

### 4.5 About
- Short bio (2–3 paragraphs), skills list grouped by area (e.g. Backend, Frontend, Infra/Tools), and what he's interested in working on next.

### 4.6 Contact / Footer
- Email CTA (mailto), GitHub, LinkedIn, résumé download link (placeholder `/resume.pdf`).
- Small print: © year, "Built with Next.js" or similar.

## 5. Content model

`content/projects.ts` exports typed arrays consumed by both Projects and Now sections:

```ts
type ProjectStatus = "shipped" | "ongoing";

interface Project {
  slug: string;
  title: string;
  role: string;            // "Core contributor" | "Built solo" | "Maintainer" | ...
  status: ProjectStatus;
  stage?: string;          // only for ongoing, e.g. "Private beta"
  blurb: string;           // 1–2 sentences, outcome-focused
  tags: string[];          // stack, e.g. ["Next.js", "PostgreSQL"]
  links?: { live?: string; repo?: string };
}
```

### 5.1 Mock content (v1 ships with these; Kufre replaces later)

Shipped:
1. **Ledgerline** — Built solo. "A personal-finance tracker that turns messy bank exports into clear monthly insights. 4k+ downloads." Tags: Next.js, TypeScript, PostgreSQL, Tailwind.
2. **Relay Health** — Core contributor. "Appointment and records platform for small clinics; cut patient check-in time by 60%." Tags: React, Node.js, Supabase.
3. **Forge CI** — Maintainer. "Open-source CI pipeline templates adopted by 30+ repos." Tags: GitHub Actions, Docker, Bash.

Ongoing (sneak peek):
1. **Wavelength** — Stage: Private beta. "A calmer way for remote teams to share status without meetings." Tags: Next.js, Realtime.
2. **Atlas Notes** — Stage: Design phase. "Local-first notes with a map-based canvas. More soon." Tags: Local-first, CRDTs.

All mock links may point to `#` or be omitted. Mark mock data with a comment: `// MOCK DATA — replace with real projects`.

## 6. Interaction & motion requirements

- Scroll-reveal: sections and cards fade + rise ~16px as they enter the viewport, staggered ~80ms per card. Once, not on every scroll.
- Hover states on all interactive elements per DESIGN_TOKENS.md.
- Smooth scroll for anchor navigation.
- **`prefers-reduced-motion: reduce` must disable all non-essential motion** (ambient hero, reveals, pulse). This is a hard requirement.

## 7. Quality requirements

- **Responsive:** flawless at 360px, 768px, 1024px, 1440px. No horizontal page scroll ever.
- **Accessibility:** semantic landmarks (`header/main/section/footer`), one `h1` (the name), visible focus rings (amber), alt text, color contrast ≥ 4.5:1 for body text (token palette already satisfies this).
- **SEO/meta:** title "Kufre Udoh — Software Engineer", meta description from the one-liner, Open Graph + Twitter card tags, favicon.
- **Performance:** no layout shift from fonts (use `next/font`), Lighthouse ≥ 95 across categories on the deployed site.

## 8. Build order

1. Scaffold Next.js + TypeScript + Tailwind + ESLint (App Router, no `src/` dir) into this folder.
2. Wire design tokens: fonts via `next/font`, CSS variables in `globals.css`, Tailwind theme mapping — all values from `DESIGN_TOKENS.md`.
3. `content/projects.ts` with the mock data above.
4. Layout shell: Nav + Footer + section scaffolding with anchors.
5. Hero with ambient background and links.
6. Projects grid + ProjectCard.
7. Now section + WIP card treatment.
8. About + Contact.
9. Motion pass (Framer Motion reveals, hover polish, reduced-motion guard).
10. Meta/SEO, favicon, OG image, responsive + a11y sweep, `npm run build` must pass clean.
11. Init git repo, push to GitHub, connect Vercel.

## 9. Acceptance checklist

- [ ] All six sections present and populated with mock content
- [ ] Visuals match `DESIGN_TOKENS.md` exactly (spot-check colors, type scale, radii)
- [ ] Reveals, hovers, ambient hero working; all disabled under reduced motion
- [ ] Responsive at the four breakpoints in §7 with no horizontal scroll
- [ ] `npm run build` succeeds with no errors or type warnings
- [ ] Deployed and reachable on a `*.vercel.app` URL
