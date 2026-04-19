# Shimmer Loading Placeholder

Given an HTML page containing a `<div class="shimmer-card"></div>` element, write CSS to create a continuously moving shimmer effect that mimics a content-loading skeleton.

## Goal

Style the placeholder card and use a `::before` pseudo-element with an animated gradient to produce the shimmer sweep.

## Constraints

- Use only CSS — no JavaScript
- `.shimmer-card` dimensions: `width: 300px; height: 200px`
- Background color of `.shimmer-card`: `#e0e0e0`
- `.shimmer-card` must have `position: relative` and `overflow: hidden`
- Pseudo-element must use `content: ''` and be positioned absolutely to cover the card (`top: 0; left: 0; right: 0; bottom: 0`)
- Shimmer gradient: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`
- `background-size` on the pseudo-element: `200% 100%`
- `@keyframes` name must be `shimmer`
- Keyframes: `0% { background-position: -200% 0 }` → `100% { background-position: 200% 0 }`
- Animation duration: `1.5s`
- Animation timing function: `ease-in-out`
- Animation iteration count: `infinite`
