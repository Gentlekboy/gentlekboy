# Handoff: Kufre Udoh Portfolio

Session summary for picking this project up with full context after a
fresh start. Read this first, then `docs/PRD.md` and
`docs/DESIGN_TOKENS.md` for the original spec (note: PRD's project
examples, Ledgerline/Relay Health/etc., are the original mock data and
are **stale**, real content now lives in `content/projects.ts`, see
below).

## What this project is

A personal portfolio site for Kufre Udoh (software engineer) at
`/Users/gentlekboy/Desktop/Projects/portfolio`. Next.js 16 (App Router,
Turbopack) + Tailwind CSS v4, single-page layout with anchor-linked
sections, dark-only theme (warm charcoal + amber accent). Built from
scratch this session, following `docs/PRD.md` and
`docs/DESIGN_TOKENS.md`, then iterated with real content and design
refinements.

**Not yet done:** no GitHub remote configured, not deployed to Vercel.
`git remote -v` is empty. When ready to ship: push to GitHub, connect
Vercel, optionally attach a custom domain (user has none yet).

## Stack quick reference

- Next.js 16.2.10, React 19, TypeScript, Tailwind v4, `next/font/google`
- Framer Motion (`motion` package) for scroll reveals
- `lucide-react` for icons. Note: this installed version dropped brand
  icons (no `Github`, `Linkedin`, `Apple`, etc. exports exist anymore).
  Custom inline SVGs for GitHub/LinkedIn live in `components/icons.tsx`.
  Check before assuming any lucide icon exists; verify with
  `node -e "console.log(Object.keys(require('lucide-react')))"`.
- Package manager: npm. Run `npm run dev`, `npm run build`,
  `npm run lint` from the project root.
- **AGENTS.md / CLAUDE.md** in the repo root warn that this Next.js
  version may differ from training data, check
  `node_modules/next/dist/docs/` before writing App Router code you're
  unsure about.

## Site structure (all real, all built)

- `components/Nav.tsx`: sticky nav, translucent + blur on scroll,
  scrollspy active-link highlighting via IntersectionObserver. Left
  side shows **only the K logo mark** (no wordmark text), links back to
  `#top`.
- `components/Hero.tsx`: big "Kufre Udoh" wordmark (via
  `components/Wordmark.tsx`, the literal letter "K" is replaced inline
  by the logo mark), one-liner, email/GitHub/LinkedIn icon links,
  ambient CSS glow plus concentric ring background accents, scroll-hint
  arrow.
- `components/Projects.tsx` + `ProjectCard.tsx`: shipped work, reads
  `shippedProjects` from `content/projects.ts`.
- `components/Now.tsx` + `WipCard.tsx`: in-progress work
  (`ongoingProjects`), dashed border plus pulsing status dot treatment.
- `components/About.tsx`: real bio reflecting actual project history
  (not generic placeholder), skills grouped as Frontend / Backend & Data
  / Shipping & Tools.
- `components/Footer.tsx`: contact card (email/GitHub/LinkedIn/résumé
  buttons) plus bottom bar with `© year Kufre Udoh` and a "Back to top"
  link. **No tech-stack credit line** (removed by request). **No
  availability-status badge** (added, then removed by request, do not
  re-add unless asked). Contact card has a subtle concentric-ring accent
  in the bottom-right corner (`.footer-rings` in `globals.css`).
- `app/icon.tsx`, `app/opengraph-image.tsx`: generated favicon and OG
  image using `next/og` `ImageResponse`, both render the fused-K SVG
  paths directly as JSX (confirmed Satori/`next/og` supports raw
  `<svg>`/`<path>`/`<circle>` elements, not just flexbox divs).

## Real project content (`content/projects.ts`)

All mock data has been replaced. Current entries, in order:

1. **Etnowe** (shipped), role "Contributor" (user fixed bugs, built
   order placement/refund features across the whole stack, did not
   build it solo). Links: website, App Store, Play Store, admin
   dashboard (`admin.etnowe.com`), merchant support portal
   (`support.etnowe.com`). **Open item:** could not find a distinct iOS
   listing for the merchant app (only "ETNOWE Merchant Hub" on Google
   Play turned up via search). If the user provides one, add it to the
   `links` object (the `Project` interface already supports arbitrary
   extra link types, currently `website/appStore/playStore/admin/
   merchantPortal`).
2. **Social Contract** (shipped), role "Frontend (solo)", design and
   backend by a small team. Links: website, App Store, Play Store.
3. **COC Odogunyan** (ongoing, "Active development"), full-stack solo,
   church platform (website plus admin secretariat portal plus offline
   Electron Bible quiz app). No links (internal/church tooling).
4. **Fikowo** (ongoing, "Early development"), full-stack solo, kakeibo
   budgeting app for young Nigerian professionals.
5. **Buxe** (ongoing, "Active development"), full-stack solo,
   ride-hailing app (rider and driver variants).
6. **Saroni** (ongoing, "Pre-launch"), frontend solo, design/backend by
   a small team, lupus/chronic-illness symptom tracker.

Yoked (a similar faith-based relationship app concept) was explicitly
**removed** from consideration, do not re-add unless asked.

Stage labels for ongoing projects ("Active development" /
"Early development" / "Pre-launch") were inferred from reading each
project's actual codebase during research this session, not confirmed
word-for-word by the user, flag if the user wants them changed.

## Brand / logo work

Concept: `!` (CSS "important") plus `<` (open tag) fused into a "K",
see `brand/README.md` for the full rationale, it's written out in
detail so don't re-derive it, just read it.

- `brand/svg/fused-k.svg`: the only logo file in active use. Used in
  `app/icon.tsx` (favicon), `app/opengraph-image.tsx`, and inline in
  `components/LogoMark.tsx` (standalone icon, used in Nav) and
  `components/Wordmark.tsx` (inline-kerned into the "K" of "Kufre Udoh"
  text, used in Hero).
- `brand/png/`: transparent and dark-bg PNGs at 512/1024px.
- `brand/jpg/`: dark-bg JPGs at 512/1024px (no transparency support in
  JPG).
- Two earlier logo iterations (`bracket-forward.svg`,
  `monoline-companion.svg`) and a LinkedIn cover photo
  (`linkedin-cover.jpg`) were designed, then **explicitly removed** by
  the user; only the fused-K SVG/PNG/JPG square-icon exports remain. Do
  not recreate these unless asked.
- Regenerating PNG/JPG exports requires `sharp` (already a project
  dependency), see `brand/README.md` for the exact commands and a
  gotcha about SVG text rendering (if ever regenerating something with
  text baked in): `sharp`'s bundled `librsvg` resolves fonts via
  fontconfig, not `@font-face` data URIs, so any real font needs to be
  installed to `~/Library/Fonts` first, and must be a real TTF (not
  woff2, this fontconfig build can't parse it, pull TTFs from the
  legacy Google Fonts API `fonts.googleapis.com/css?family=...`).

## Design decisions and house rules established this session

- **No em dashes anywhere in site-facing copy.** Swept and enforced
  across every component, `app/layout.tsx`, `content/projects.ts`, CSS
  comments, and `brand/README.md`. Use commas, colons, or split
  sentences instead. This rule was explicit and repeated by the user;
  respect it in all future copy, including internal docs like this one
  (the untouched `docs/PRD.md` and `docs/DESIGN_TOKENS.md` still
  contain em dashes since they're historical planning docs written
  before the rule existed, use judgment if asked to edit those).
- **Header shows logo only, no wordmark text.** Only the Hero's large
  heading shows the full "Kufre Udoh" name.
- **Footer:** no tech-stack credit, no availability-status badge, no
  location (security preference, explicitly declined).
- **Concentric ring motif:** baked into the site background as pure CSS
  (`.hero-rings`, `.footer-rings` utility classes in `app/globals.css`,
  stacked `radial-gradient` layers, no image assets). Originally
  prototyped for a LinkedIn cover photo that was later deleted, but the
  ring motif itself stays in the live site; it's a separate decision
  from the deleted banner file.
- **Real GitHub** (`github.com/Gentlekboy`) **and LinkedIn**
  (`linkedin.com/in/gentlekboy/`) links are wired into Hero and Footer.
- **Résumé link is still a placeholder** (`/resume.pdf`, file doesn't
  exist). Ask the user for a real résumé file if this comes up.

## Known rough edges and things to watch

- `git commit` in this environment prints a warning that author identity
  was auto-detected from username/hostname (`Kufreabasi Udoh
  <gentlekboy@Kufreabasis-MacBook-Pro.local>`). Not fixed, hasn't been
  flagged as a problem by the user, but worth knowing if commit history
  ever needs cleanup before a real push.
- Mobile viewport testing this session was unreliable: the Chrome
  automation's `resize_window` didn't always produce the requested
  pixel dimensions (got 455px or 1091px when 375px was requested), and
  the browser extension disconnected entirely at one point. Screenshots
  taken during those tests still showed correct responsive behavior
  (single-column card grids, no horizontal scroll), but a fresh session
  should re-verify real mobile breakpoints (360/768/1024/1440 per the
  PRD's quality bar) once the extension is stable; this was never
  cleanly confirmed at an exact 375px width.
- The `favicon.ico` that `create-next-app` scaffolds by default was
  deleted in favor of the generated `app/icon.tsx`, don't regenerate it.
- `public/` is empty (starter SVGs removed as unused).

## Verification status

Every change this session was checked with `npm run lint` and
`npm run build` before committing (both consistently clean), plus
visual verification via the Chrome extension for anything UI-facing.
All work is committed to the local `main` branch (13+ commits, see
`git log --oneline`); nothing is pushed anywhere.
