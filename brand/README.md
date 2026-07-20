# Brand mark: "K" monogram

## The concept

Kufre is a software engineer, so the mark needed to be a "K" that also
said something about that, a pun only another developer would clock at
first. In CSS, `!important` is how you tell the browser "do this no
matter what," so `!` reads as *important*. And `<` is the first
character you type to open any HTML tag, so it reads as *start
something*. Put the two side by side and they trace the two halves of a
capital K: a vertical stroke with a dot under it, and a sideways V
pointing left.

A clever idea on paper doesn't automatically read as a logo, though. The
first version drew the `!` and `<` as literal, separate glyphs with a
gap between them, which meant it looked like two unrelated squiggles
unless you already knew the joke, and the thin, detailed shapes turned
to mush at favicon size.

The fix was structural, not decorative: instead of drawing a literal `!`
and `<`, `fused-k.svg` is built as an actual letterform: one straight
vertical bar (the spine of the K), a dot underneath it, and two angled
strokes meeting that spine at a point, which is just how you draw a K.
The same three shapes read two ways at once. From a distance it's
unmistakably a "K." Look closer and the exclamation mark (bar + dot) and
the angle bracket (the sharp V) are still there, hiding inside it. Spine
and arms touch, so it reads as K at any size, including 16px.

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
| `linkedin-cover.jpg` | 1584×396, LinkedIn's cover-photo dimensions. K mark up top, "Kufre Udoh \| Software Engineer" beneath it in Fraunces/Inter, concentric accent rings pushed to the edges (left, top-right, bottom-right) so they stay clear of both the centered lockup and the bottom-left corner where LinkedIn overlays the circular profile photo. No source file kept, rendered directly from an inline SVG string, regenerate by hand if it needs changes (see git history for the generating script). |

Text in `linkedin-cover.jpg` requires the actual Fraunces and Inter font
files to be installed locally (`~/Library/Fonts`) since the raster
renderer (`librsvg`, via `sharp`) resolves fonts through fontconfig, not
from `@font-face` data URIs the way a browser would. If regenerating on a
machine without them, grab the real TTFs (not woff2, this fontconfig
build can't parse it) from the legacy Google Fonts API:
`fonts.googleapis.com/css?family=Fraunces:600|Inter:400,600`.
