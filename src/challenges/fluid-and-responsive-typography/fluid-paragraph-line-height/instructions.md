# Fluid Paragraph Line-Height

Given a paragraph element (`<p>`), write CSS rules to:

- Define CSS custom properties `--min-line-height` (`2`) and `--max-line-height` (`3.2`).
- Create a fluid line-height variable `--fluid-line-height` using `clamp()` with a `calc()` interpolation between these values for viewport widths from 320px to 1600px.
- Apply `--fluid-line-height` to the paragraph's `line-height` property.

## Goal

Enhance readability by fluidly adjusting paragraph line-height based on viewport width without using JavaScript.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support all modern browsers.
- CSS variables should be as follows:
  - `--min-line-height: 2em`
  - `--max-line-height: 3.2em`
- Fluid range applies between viewport widths of **320px** and **1600px**.
