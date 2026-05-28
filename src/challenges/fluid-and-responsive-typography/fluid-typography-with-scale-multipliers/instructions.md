# Fluid Typography with Scale Multipliers

## Problem

Use CSS variables and scale multipliers to apply fluid typography that proportionally sizes headings and paragraphs across viewport widths.

## Goal

Given a `.content` section containing `<h2>` and `<p>`, write CSS rules to:

1. Define CSS custom properties `--min-root` (`16px`) and `--max-root` (`20px`).
2. Compute `--fluid-root` using `clamp()` to interpolate between these values for viewport widths from `320px` to `1440px`.
3. Define multipliers: `--scale-2: 1.5` and `--scale-1: 1.2`.
4. Apply fluid typography:
   - `h2 { font-size: calc(var(--fluid-root) * var(--scale-2)); }`
   - `p { font-size: calc(var(--fluid-root) * var(--scale-1)); }`

Use CSS variables, `clamp()`, and `calc()` multiplication to build a fluid modular scale that adjusts typography proportionally.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support all modern browsers.
- Viewport range should be between `320px` and `1440px`.
- The root font size must have a minimum of `16px` and a maximum of `20px`.
- Define multipliers as `--scale-2: 1.5` and `--scale-1: 1.2`.
