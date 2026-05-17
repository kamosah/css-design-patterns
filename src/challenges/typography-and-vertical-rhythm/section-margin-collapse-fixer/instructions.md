## Problem: Section Margin Collapse Fixer

Use CSS to apply a 1.5rem rhythm and prevent section margin collapse for consistent vertical spacing.

## Problem description

You have multiple `<section>` elements in a document, each containing an `<h2>` and one or more `<p>` elements. Your task is to define a CSS custom property for a 1.5rem baseline rhythm and apply it to the `line-height` and bottom margin of each `<h2>` and `<p>`. Additionally, prevent margin collapsing between sections by using a CSS-only solution that preserves the vertical rhythm between section boundaries.

## Goal

Use only HTML and CSS to:

- Define `--rhythm` as `1.5rem` in `:root`.
- Apply `line-height: var(--rhythm)` and `margin-bottom: var(--rhythm)` to all `<h2>` and `<p>` elements.
- Prevent margin collapsing between adjacent `<section>` elements so that the space between any two sections remains exactly `1.5rem`.

## Constraints

- Only CSS is allowed.
- Use rem units and CSS variables.
- Do not modify the HTML structure or use JavaScript.
