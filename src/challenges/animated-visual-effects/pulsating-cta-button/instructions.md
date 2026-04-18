# Pulsating Call-to-Action Button

Given an HTML page containing a `<button class="cta-button">Click Me</button>` element, write CSS to create a continuously pulsating button that attracts user attention.

## Goal

Style the `.cta-button` and apply a looping scale animation using only CSS.

## Constraints

- Use only CSS — no JavaScript
- `padding`: `1rem 2rem`
- `background-color`: `#007BFF`, `color`: `#fff`
- `border`: `none`, `border-radius`: `4px`
- `@keyframes` name must be `pulse`
- Keyframes at `0%`, `50%`, and `100%` using `transform: scale()`
  - `0%` → `scale(1)`, `50%` → `scale(1.1)`, `100%` → `scale(1)`
- Animation duration: `1.5s`
- Animation timing function: `ease-in-out`
- Animation iteration count: `infinite`
