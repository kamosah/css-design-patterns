# Fluid-Width Responsive Grid with Aspect Ratio Elements

Given a `.fluid-grid` container holding five `.grid-item` elements, implement a responsive grid where columns adapt to the available space and each item holds a strict 16:9 aspect ratio.

## Goal

Write CSS in `styles.css` to configure `.fluid-grid` and `.grid-item` so the layout flows fluidly across viewport sizes without any item distortion.

## Constraints

- Use `repeat(auto-fit, minmax(200px, 1fr))` for columns
- Set `gap` to `1rem`
- Enforce a 16:9 aspect ratio on `.grid-item` using the `aspect-ratio` property
- Center item content both horizontally and vertically
