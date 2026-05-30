# Advanced Fluid Type Scale with Legacy Fallback

Create a CSS typographic scale for `<h1>`, `<h2>`, `<h3>`, and `<p>` that:

- Defines CSS custom properties:
  - `--min-root: 16px` and `--max-root: 24px`
  - Scale multipliers: `--scale-h1: 2.5`, `--scale-h2: 2`, `--scale-h3: 1.5`, `--scale-p: 1`
- Computes a fluid root font size `--fluid-root` using `clamp()` and a linear interpolation formula for viewport widths between 320px and 1440px.
- Applies fluid sizes via `calc()` and the scale multipliers:
  - `h1 { font-size: calc(var(--fluid-root) * var(--scale-h1)); }`
  - Similarly for `h2`, `h3`, and `p`.
- Implements a legacy fallback inside an `@supports not (font-size: clamp(1rem, 1vw + 1rem, 2rem))` block that assigns static font sizes equal to `16px` multiplied by each scale multiplier.
- Ensures all rules appear in an external `styles.css` file.

## Goal

Demonstrate advanced CSS techniques by building a fluid, modular type system with backwards compatibility.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support modern browsers with `clamp()` and legacy browsers via feature queries.
- Viewport range: **320px** to **1440px**.
- Custom properties:
  - `--min-root: 16px`
  - `--max-root: 24px`
  - `--scale-h1: 2.5`
  - `--scale-h2: 2`
  - `--scale-h3: 1.5`
  - `--scale-p: 1`
- Fluid interpolation must use a `calc()` formula inside `clamp()`.
