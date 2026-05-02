# Overlapping Hero and Feature Cards Layout

Build a responsive layout with a full-width hero that overlaps feature cards using CSS Grid and z-index, adapting structure and overlap depth across breakpoints.

## Problem description

Design a layout with:

- A `.hero` section spanning full width and overlapping the content area below it.
- Eight `.card` feature elements arranged in a grid inside a `.features` container beneath the hero.

### Breakpoint requirements

- **Mobile (< 600px):** `.hero` spans full width above a single-column card stack with no overlap.
- **Tablet (600px–900px):** Cards arrange into a 2×2 grid; the hero's bottom edge overlaps the top row of cards by `20px` using a negative `margin-top`.
- **Desktop (> 900px):** Cards arrange into a 4-column row; the hero overlaps the first row of cards by `40px`.

## Goal

Write CSS in `styles.css` to:

- Use `grid-template-areas` to define named `hero` and `features` areas.
- Apply `z-index` on `.hero` and `.features` so the hero always renders on top.
- Use negative `margin-top` on `.features` to pull the card grid up beneath the hero.
- Adjust `grid-template-columns` on `.features` via media queries.

## Constraints

- Use CSS Grid for layout.
- No JavaScript allowed.
- Use `z-index` and negative `margin-top` for the overlap effect.
- Set `gap` to `16px` on both `.layout` and `.features`.
- Background colors may be used in place of images.
