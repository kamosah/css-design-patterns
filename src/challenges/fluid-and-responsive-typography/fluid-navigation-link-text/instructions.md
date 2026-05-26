# Fluid Navigation Link Text

Try to make the navigation link text scale fluidly between 14px and 22px based on the viewport width.

## Goal

Use CSS to make the navigation link text scale fluidly between **14px** and **22px** based on the viewport width.

## Constraints

- The solution must use an external stylesheet `styles.css`.
- Do not use JavaScript.
- Support all modern browsers.
- The navigation link font size must be at least **14px** and at most **22px**.
- Viewport widths in scope are **320px – 1100px**.

## Hint

Look into the CSS `clamp()` function — it lets you define a minimum, a preferred (viewport-relative) value, and a maximum. A `vw`-based preferred value scales the font size proportionally with the viewport width.
