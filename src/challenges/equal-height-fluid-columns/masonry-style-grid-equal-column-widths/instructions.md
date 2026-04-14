## Problem: Masonry-Style Grid with Equal Column Widths

Try to simulate a masonry layout using CSS Grid with equal-width columns, dense packing, and dynamic row spans to eliminate vertical gaps.

## Problem description

A `.grid` container holds multiple `.card` elements of varying heights. Each card has a `--span` CSS custom property (set inline) that controls how many row units it occupies. The task is to:

- Display cards in 3 equal-width columns that fill the container width.
- Pack grid items tightly (dense packing) so that variable-height cards create a masonry effect.
- Use `grid-row: span var(--span)` on each card so the `--span` variable controls its height.

## Goal

Implement a CSS-only masonry layout using Grid auto-placement and row-span calculations without JavaScript.

## Constraints

- Only CSS on the existing HTML may be used; no JavaScript or additional wrappers are allowed.
