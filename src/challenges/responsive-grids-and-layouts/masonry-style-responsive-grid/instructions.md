# Masonry-Style Responsive Grid

Given a `.masonry` container holding multiple `.item` elements, implement a responsive masonry-style layout using CSS Grid. Items have varying heights set via `grid-row: span N` inline styles.

Layout requirements:

- **Mobile (< 600px):** 2 columns
- **Tablet (600px – 900px):** 3 columns
- **Desktop (> 900px):** 5 columns

Items are densely packed to fill gaps left by taller items.

## Goal

Write CSS in `styles.css` to configure the `.masonry` grid container and `.item` styles for a masonry-style layout using CSS Grid only.

## Constraints

- Use CSS Grid with `grid-auto-flow: dense`
- Two media queries: `min-width: 600px` and `min-width: 900px`
- Gap of 10px between items
- Item heights vary via `grid-row: span N` inline styles on the HTML elements
