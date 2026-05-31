# Viewport-Based Fluid Typography with Height Constraint

Given a full-screen `<section class="intro">` containing an `<h1>` and a `<p>`, write CSS rules to:

Define CSS custom properties:

- `--min-font: 18px`
- `--max-font: 48px`
- `--min-vw: 320px`
- `--max-vw: 1920px`
- `--min-vh: 480px`
- `--max-vh: 1080px`

Compute a fluid font-size using a combination of the following:

- `clamp(--min-font, calc(1vw + 1vh), --max-font)`

Additionally, limit scaling so at extreme aspect ratios heading never exceeds `--max-font` or goes below `--min-font` by using `clamp()` nested with `min()` or `max()` as needed.

Apply this fluid size to `<h1>` and set `<p>` to 60% of the computed `<h1>` size using relative units.

## Goal

Ensure typography scales responsively considering both width and height constraints, avoiding overly large text on landscape screens and overly small text on portrait devices.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support modern browsers with `clamp()`, `min()`, and `max()` functions.
- Viewport width range should be 320px–1920px; height range should be 480px–1080px.
- `<p>` uses `0.6rem` relative to the computed `<h1>` size.
