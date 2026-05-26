# Fluid Modular Scale with CSS Variables

Given a hero section with an `<h1>` and a `<p>`, write CSS rules to establish a fluid root font size driven entirely by CSS custom properties.

## Goal

Leverage CSS variables and `calc()` within `clamp()` to establish a base font size that scales fluidly between viewport widths, and use `rem` units on headings and paragraphs to maintain typographic proportions.

## Constraints

- Do not use JavaScript.
- Support all modern browsers.
- Define custom properties: `--min-root: 16px;` and `--max-root: 24px;` on `:root`.
- The fluid range must apply between viewport widths of **360px** and **1200px**.
- Apply the computed fluid size as the `font-size` on `html` so all `rem` units inherit it.
- Set `<h1>` to `2.5rem` and `<p>` to `1rem`.
