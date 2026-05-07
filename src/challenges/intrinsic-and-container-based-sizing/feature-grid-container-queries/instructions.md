# Feature Grid with Container Queries

Use CSS Container Queries to build a responsive feature grid that adjusts its column count based on the **container's** inline size — not the viewport.

## Problem description

You have a `<div class="features">` containing six `<div class="feature">` items. Write CSS so the grid:

- Shows **1 column** when the container's inline size is less than `500px`.
- Shows **2 columns** when the inline size is at least `500px` but less than `800px`.
- Shows **4 columns** when the inline size is `800px` or more.

## Goal

Implement CSS in `styles.css` to:

1. Declare `container-type: inline-size` on the `.features` container.
2. Use `@container` queries at `500px` and `800px` to set `grid-template-columns` accordingly.
3. Ensure seamless reflow as the container resizes.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- Breakpoints must be exactly at `500px` and `800px`.
- Column counts must switch precisely at those thresholds.
