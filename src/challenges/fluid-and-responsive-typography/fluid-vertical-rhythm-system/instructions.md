# Fluid Vertical Rhythm System

Given an article container with multiple headings (`<h1>` and `<h2>`) and paragraphs (`<p>`), write CSS rules to:

- Define CSS custom properties:
  - `--min-root: 16px` and `--max-root: 20px`
  - `--min-line-height: 1.4` and `--max-line-height: 1.8`
  - `--spacing-multiplier: 1.5`

- Compute a fluid root font-size `--fluid-root` using `clamp()` and a linear interpolation for viewport widths from **360px** to **1440px**.

- Compute a fluid line-height `--fluid-line` between `--min-line-height` and `--max-line-height` using `clamp()`.

- Compute a fluid spacing unit `--fluid-space` as `calc(var(--fluid-root) * var(--spacing-multiplier))`.

- Apply `--fluid-root` to the document's `font-size`, `--fluid-line` to the `line-height`, and `--fluid-space` as `margin-bottom` to each heading and paragraph.

- Provide a fallback in an `@supports not (font-size: clamp(1rem, 1vw + 1rem, 2rem))` block that sets static sizes:
  - root = `16px`
  - line-height = `1.4`
  - spacing = `calc(16px * 1.5)`

## Goal

Ensure a harmonious vertical rhythm, consistent spacing and readable text, by fluidly scaling typography and margins across different viewport widths.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support modern browsers with `clamp()` and legacy via `@supports not`.
- Viewport widths should be between **360px** and **1440px**.
- Custom properties must be:
  - `--min-root: 16px; --max-root: 20px`
  - `--min-line-height: 1.4; --max-line-height: 1.8`
  - `--spacing-multiplier: 1.5`
