# Asymmetrical Magazine-Style Grid

Try to design a responsive magazine-style mosaic layout using CSS Grid areas, with adaptive structure across mobile, tablet, and desktop viewports.

## Problem description

Create a `.magazine` container with five article cards: `.feature`, `.primary1`, `.primary2`, `.secondary1`, and `.secondary2`.

The layout changes at each breakpoint:

- **Mobile (`<480px`):** Single-column flow in source order — feature → primary1 → primary2 → secondary1 → secondary2.
- **Tablet (`480px–767px`):** Two-column grid:
  - `.feature` spans full width on top.
  - Below, two equal columns with primary and secondary cards stacked vertically in each column.
- **Desktop (`≥768px`):** Asymmetrical mosaic:
  - `.feature` spans two columns and two rows.
  - `.primary1` and `.primary2` each occupy one column and one row alongside `.feature`.
  - `.secondary1` and `.secondary2` occupy smaller cells below, forming a visually interesting mosaic.

## Goal

Write CSS in `styles.css` using `grid-template-areas` and fractional units to define the asymmetric mosaic layout at each breakpoint without JavaScript.

## Constraints

- Use CSS Grid with named grid areas.
- Define two breakpoints: `480px` and `768px`.
- Set the `gap` to `16px`.
- The article cards are: `.feature`, `.primary1`, `.primary2`, `.secondary1`, and `.secondary2`.
