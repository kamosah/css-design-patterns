## Problem: Grid Gap Rhythm Layout

Use CSS Grid with a 1.5rem `row-gap` and `line-height` to create a clean, aligned two-column text layout.

## Problem description

You have a container element with class `.grid` that lays out child `<h2>` headings and `<p>` paragraphs in a two-column CSS Grid layout. Your task is to implement a consistent vertical rhythm by defining a CSS custom property, configuring the grid, and aligning text elements to the grid rows.

## Goal

Use only HTML and CSS to:

- Define `--rhythm` as `1.5rem` in `:root`.
- Apply `display: grid`, `grid-template-columns: repeat(2, 1fr)`, and `row-gap: var(--rhythm)` to the `.grid` container.
- Set `line-height: var(--rhythm)` and `margin: 0` on `.grid h2` and `.grid p` so each text element aligns perfectly with the grid rows.

## Constraints

- Only CSS is allowed.
- Use rem units and CSS variables.
- Do not modify the HTML structure or use JavaScript.
- Rely on grid `row-gap` for spacing; do not use element margins for vertical spacing.
