# Animated Gradient Background

Given an HTML page containing a `<section class="gradient-bg"></section>` element, write CSS to animate a full-screen gradient background that shifts smoothly through multiple colors using CSS keyframes.

## Goal

Style `.gradient-bg` with a multi-stop linear gradient and animate it so the colors appear to flow continuously.

## Constraints

- Use only CSS — no JavaScript
- Section should fill the viewport: `width: 100%`, `height: 100vh`
- Gradient: `linear-gradient(-45deg, #ff9a9e, #fad0c4, #a6c1ee, #fdcbf1)`
- `background-size`: `400% 400%`
- `@keyframes` name must be `gradientShift`
- Keyframes at `0%`, `50%`, and `100%` using `background-position`
  - `0%` → `0% 50%`, `50%` → `100% 50%`, `100%` → `0% 50%`
- Animation duration: `10s`
- Animation timing function: `ease`
- Animation iteration count: `infinite`
