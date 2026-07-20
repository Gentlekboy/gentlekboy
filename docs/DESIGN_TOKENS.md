# Design Tokens — Kufre Udoh Portfolio

Single source of truth for every visual value in the project. Implement these as CSS custom properties in `globals.css` and map them into the Tailwind theme. **Do not invent values not listed here.**

Mood: **calm, cozy, modern**. Deep warm charcoal (never pure black), one amber accent used sparingly, generous space, typography doing the heavy lifting.

## 1. Color

### 1.1 Base (dark-first)

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0F0E0C` | Page background (warm near-black, brown undertone) |
| `--bg-elevated` | `#181613` | Cards, nav when scrolled |
| `--bg-subtle` | `#1F1C18` | Hover fill, tag chips, inset areas |
| `--border` | `#2A2620` | Default card/section borders (1px) |
| `--border-strong` | `#3A342B` | Hovered borders, dividers needing more presence |

### 1.2 Text

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `#EDE8E0` | Headings, primary copy (warm off-white) |
| `--text-secondary` | `#A89F92` | Body/supporting text |
| `--text-muted` | `#6E675C` | Meta info, small print, placeholder |

### 1.3 Accent — warm amber

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#E8A144` | Links, role badges, focus rings, key highlights |
| `--accent-hover` | `#F2B563` | Hover state of accent elements |
| `--accent-subtle` | `rgba(232, 161, 68, 0.10)` | Accent-tinted fills (badge backgrounds, glows) |
| `--accent-border` | `rgba(232, 161, 68, 0.35)` | Accent-tinted borders (hovered cards, WIP cards) |

### 1.4 Status

| Token | Value | Usage |
|---|---|---|
| `--status-wip` | `#7BC47F` | Pulsing "WIP" dot in the Now section |

Rules:
- Accent is seasoning, not sauce: ≤ 10% of any viewport should be amber.
- Body text on `--bg`: use `--text-secondary` or lighter (contrast ≥ 4.5:1 holds for all listed pairings).
- Never use pure `#000` or `#FFF` anywhere.

## 2. Typography

Load via `next/font/google` with `display: swap`.

| Token | Font | Usage |
|---|---|---|
| `--font-display` | **Fraunces** (opsz axis on, weights 400–600) | Name, section headings, project titles |
| `--font-body` | **Inter** (400, 500, 600) | Everything else |
| `--font-mono` | **JetBrains Mono** (400) | Stack tags, stage labels, small meta |

### 2.1 Type scale (rem; desktop → mobile where different)

| Token | Size | Line-height | Weight / font | Usage |
|---|---|---|---|---|
| `--text-hero` | 4.5rem → 2.75rem | 1.05 | 550 display | Name in hero |
| `--text-h2` | 2rem → 1.625rem | 1.15 | 500 display | Section headings |
| `--text-h3` | 1.25rem | 1.3 | 500 display | Card titles |
| `--text-lead` | 1.25rem → 1.125rem | 1.55 | 400 body | Hero one-liner, section intros |
| `--text-base` | 1rem | 1.65 | 400 body | Body copy |
| `--text-sm` | 0.875rem | 1.5 | 400–500 body | Card blurbs' meta, footer |
| `--text-xs` | 0.75rem | 1.4 | 400 mono, letter-spacing 0.08em, uppercase | Tags, badges, stage labels, section eyebrows |

Rules:
- Letter-spacing on display headings: `-0.02em`.
- Max text-column width: `65ch` for paragraphs.

## 3. Spacing & layout

Base unit **4px**; use the standard Tailwind scale. Key structural values:

| Token | Value | Usage |
|---|---|---|
| `--container` | max-width `1080px`, padding-inline `24px` (mobile) / `32px` (≥768px) | Page container, centered |
| `--section-gap` | `128px` desktop / `88px` mobile | Vertical rhythm between sections |
| `--card-pad` | `28px` | Card inner padding |
| `--card-gap` | `24px` | Grid gap between cards |

Breakpoints: Tailwind defaults (`sm 640` / `md 768` / `lg 1024` / `xl 1280`). Project grid: 1 column below `md`, 2 columns at `md+`.

## 4. Shape & elevation

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `6px` | Tag chips, badges |
| `--radius-md` | `12px` | Buttons, inputs |
| `--radius-lg` | `16px` | Cards |
| `--shadow-card` | `0 1px 2px rgba(0,0,0,0.4)` | Resting cards (barely-there) |
| `--shadow-card-hover` | `0 12px 32px -8px rgba(0,0,0,0.5), 0 0 0 1px var(--accent-border)` | Hovered cards |
| `--glow-accent` | `0 0 24px rgba(232,161,68,0.18)` | Hero links hover, WIP cards |

Depth comes mostly from background-color steps (`--bg` → `--bg-elevated` → `--bg-subtle`), not heavy shadows.

## 5. Motion

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | All entrances and hovers |
| `--duration-fast` | `150ms` | Color/border hover transitions |
| `--duration-base` | `300ms` | Card lift, link glows |
| `--duration-reveal` | `700ms` | Scroll-reveal fade/rise |
| Reveal distance | `16px` translate-y | Scroll reveals |
| Reveal stagger | `80ms` per sibling card | Grids |
| Card hover lift | `translateY(-4px)` | Project cards |
| Ambient hero loop | `≥ 20s`, opacity ≤ 0.15, CSS-only | Hero background drift |
| WIP pulse | 2.4s ease-in-out infinite, scale 1→1.35 + fade on a dot's halo | Now-section status dot |

Rules:
- Nothing autoplays fast; ambient motion must be ignorable.
- Reveals fire **once** per element (no re-animation on scroll-up).
- Under `prefers-reduced-motion: reduce`: kill ambient drift, pulses, and reveals (content simply visible), keep instant color hovers.

## 6. Component recipes

- **Nav:** transparent at top; after ~24px scroll, `--bg` at 80% opacity + `backdrop-blur(12px)` + bottom border `--border`. Height 64px. Links `--text-secondary` → `--text-primary` on hover, active section link gets `--accent`.
- **Buttons/links (primary):** `--accent-subtle` fill, `--accent` text, `--radius-md`; hover: `--accent-border` outline + `--glow-accent`.
- **Project card:** `--bg-elevated`, `--border`, `--radius-lg`, `--card-pad`; hover per §4/§5. Title in display font, role badge = accent-subtle chip (mono `--text-xs`), tags = `--bg-subtle` chips (mono `--text-xs`, `--text-muted`).
- **WIP card (Now section):** like project card but background at 70% opacity, **dashed** `--accent-border` border, `--glow-accent` at 50% strength, green pulsing status dot + mono stage label in the top-right.
- **Section heading pattern:** amber mono eyebrow (`--text-xs`, e.g. "01 — PROJECTS") above the display-font `--text-h2` heading, then optional `--text-lead` intro capped at `65ch`.
- **Focus:** `outline: 2px solid var(--accent); outline-offset: 2px` on every interactive element (`:focus-visible`).

## 7. Iconography & assets

- Icons: **Lucide** (`lucide-react`), stroke width 1.75, size 18–20px, colored `--text-secondary` (hover `--accent`).
- Favicon: simple "K" monogram, `--accent` on `--bg`.
- OG image (1200×630): `--bg` background, name in Fraunces `--text-primary`, one-liner in Inter `--text-secondary`, small amber accent element.
