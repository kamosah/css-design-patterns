# Slide-In Sidebar Panel

Given an HTML page containing a `<div class="sidebar-panel">` element, write CSS to animate it sliding smoothly into view from the left on page load.

## Goal

Position the panel off-screen initially and define a `@keyframes` animation that slides it into its final position.

## Constraints

- Use only CSS — no JavaScript
- `width`: `250px`
- `height`: `100%`
- `position`: `fixed`, `top: 0`, `left: 0`
- Initial `transform`: `translateX(-100%)`
- `@keyframes` name must be `slideIn`
- Keyframes: `from { transform: translateX(-100%) }` → `to { transform: translateX(0) }`
- Animation duration: `0.5s`
- Animation timing function: `ease-out`
- Animation fill mode: `forwards`
