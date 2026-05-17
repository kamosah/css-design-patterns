## Problem: Fluid Vertical Rhythm

Scale text rhythm fluidly using CSS `clamp()` and custom properties between `1rem` and `2rem`.

## Problem description

Create a responsive baseline grid where `line-height` and `margin-bottom` scale linearly between a minimum and maximum rhythm value as the viewport width changes.

## Goal

Use only HTML and CSS to:

- Use the provided `--min-rhythm`, `--max-rhythm`, `--min-vw`, and `--max-vw` variables.
- Calculate a `--fluid-rhythm` custom property on `h1`, `h2`, and `p` using `clamp()` with linear viewport interpolation.
- Apply `--fluid-rhythm` to both `line-height` and `margin-bottom` on those elements.

## Constraints

- Only HTML and CSS are allowed.
- Use CSS variables and `clamp()`.
- Do not use JavaScript or modify the HTML structure.
