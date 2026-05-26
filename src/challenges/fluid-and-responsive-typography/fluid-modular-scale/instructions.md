# Fluid Modular Scale with CSS Variables

Given a hero section with an `<h1>` and a `<p>`, write CSS rules to:

- Define CSS custom properties `--min-root` (16px) and `--max-root` (24px).
- Create a fluid root font size between these values for viewport widths from 360px to 1200px.
- Apply this fluid root size to the document's base (`body { font-size: var(--fluid-root); }`).
- Set the `<h1>` font size to `2.5rem` and `<p>` to `1rem` so they scale proportionally.

## Goal

Leverage CSS variables and `calc()` within `clamp()` to establish a base font size that scales fluidly, and use `rem` units to maintain typographic proportions.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support all modern browsers.
- Define custom properties: `--min-root: 16px;` and `--max-root: 24px;`.
- Apply the fluid range between viewport widths of **360px** and **1200px**.
- Style `<h1>` at `2.5rem` and `<p>` at `1rem`.
