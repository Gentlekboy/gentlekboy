# Brand mark — "K" monogram

Concept: `!` (CSS "important") + `<` (opening a tag) fused into the letter
"K", the first letter of Kufre's name. Spine and arms touch, so it reads
as K at any size.

| File | Use |
|---|---|
| `fused-k.svg` | **In active use.** Used as the site favicon/app icon (`app/icon.tsx`) and the nav wordmark icon (`components/Nav.tsx`). |

Flat `#E8A144` (the site's `--accent` token) on a transparent background,
no gradients, so it drops onto any surface in the design system without
adjustment.

## PNG exports

Rasterized from `fused-k.svg` for use outside the codebase (social profile
photos, decks, anywhere that won't take an SVG):

| File | Background |
|---|---|
| `fused-k-1024.png` / `fused-k-512.png` | Transparent |
| `fused-k-1024-dark-bg.png` / `fused-k-512-dark-bg.png` | Site's dark ground (`#0F0E0C`), for surfaces that need an opaque square (e.g. app icon uploaders that reject transparency) |

Re-export at any size with `sharp` if you need a different resolution:
`sharp('fused-k.svg', { density: 600 }).resize(W, H).png().toFile(...)`.

## JPG exports

JPG has no alpha channel, so these are pre-composited onto the dark brand
background (`#0F0E0C`) rather than transparent:

| File | Use |
|---|---|
| `fused-k-1024.jpg` / `fused-k-512.jpg` | Square icon, opaque background. Same content as the PNG dark-bg versions, just re-encoded. |
| `linkedin-cover.jpg` | 1584×396, LinkedIn's cover-photo dimensions. K mark up top, "Kufre Udoh \| Software Engineer" beneath it in Fraunces/Inter, concentric accent rings pushed to the edges (left, top-right, bottom-right) so they stay clear of both the centered lockup and the bottom-left corner where LinkedIn overlays the circular profile photo. No source file kept, rendered directly from an inline SVG string, regenerate by hand if it needs changes — see git history for the generating script. |

Text in `linkedin-cover.jpg` requires the actual Fraunces and Inter font
files to be installed locally (`~/Library/Fonts`) since the raster
renderer (`librsvg`, via `sharp`) resolves fonts through fontconfig, not
from `@font-face` data URIs the way a browser would. If regenerating on a
machine without them, grab the real TTFs (not woff2 — this fontconfig
build can't parse it) from the legacy Google Fonts API:
`fonts.googleapis.com/css?family=Fraunces:600|Inter:400,600`.
