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
and `<`, `svg/fused-k.svg` is built as an actual letterform: one straight
vertical bar (the spine of the K), a dot underneath it, and two angled
strokes meeting that spine at a point, which is just how you draw a K.
The same three shapes read two ways at once. From a distance it's
unmistakably a "K." Look closer and the exclamation mark (bar + dot) and
the angle bracket (the sharp V) are still there, hiding inside it. Spine
and arms touch, so it reads as K at any size, including 16px.

| File | Use |
|---|---|
| `svg/fused-k.svg` | **In active use.** Used as the site favicon/app icon (`app/icon.tsx`) and the nav wordmark icon (`components/Nav.tsx`). |

Flat `#E8A144` (the site's `--accent` token) on a transparent background,
no gradients, so it drops onto any surface in the design system without
adjustment.

## PNG exports

Rasterized from `svg/fused-k.svg` for use outside the codebase (social profile
photos, decks, anywhere that won't take an SVG):

| File | Background |
|---|---|
| `png/fused-k-1024.png` / `png/fused-k-512.png` | Transparent |
| `png/fused-k-1024-dark-bg.png` / `png/fused-k-512-dark-bg.png` | Site's dark ground (`#0F0E0C`), for surfaces that need an opaque square (e.g. app icon uploaders that reject transparency) |

Re-export at any size with `sharp` if you need a different resolution
(run from `brand/`):
`sharp('svg/fused-k.svg', { density: 600 }).resize(W, H).png().toFile('png/...')`.

## JPG exports

JPG has no alpha channel, so these are pre-composited onto the dark brand
background (`#0F0E0C`) rather than transparent:

| File | Use |
|---|---|
| `jpg/fused-k-1024.jpg` / `jpg/fused-k-512.jpg` | Square icon, opaque background. Same content as the PNG dark-bg versions, just re-encoded. |
