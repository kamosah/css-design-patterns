# Fluid Heading Letter-Spacing

Given an `<h1>` element, write CSS rules to:

- Define CSS custom properties `--min-letter-spacing` (-0.5px) and `--max-letter-spacing` (1px).
- Create a fluid letter-spacing variable `--fluid-letter-spacing` using `clamp()` with a `calc()` interpolation between these values for viewport widths from 320px to 1440px.
- Apply `--fluid-letter-spacing` to the `<h1>` element's `letter-spacing` property.

## Goal

Enhance readability and aesthetics by fluidly adjusting heading letter-spacing based on viewport width without JavaScript.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support all modern browsers.
- CSS variables should be as follows:
  - `--min-letter-spacing: -0.5px`
  - `--max-letter-spacing: 1px`
- Fluid range applies between viewport widths of **320px** and **1440px**.
