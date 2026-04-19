# Circular Page Reveal Transition

Given an HTML page containing a `<div class="page-mask"></div>` and a `<div class="page-content">`, write CSS to create a circular mask that shrinks from full-screen to a point in the center, revealing the page content beneath in a smooth animation.

## Goal

Style `.page-mask` to cover the viewport and animate its `clip-path` from a large circle to a point using `@keyframes reveal`.

## Constraints

- Use only CSS — no JavaScript
- `.page-mask` must use:
  - `position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;`
  - `background-color: #111`
  - Initial `clip-path: circle(150% at 50% 50%)`
- `@keyframes` name must be `reveal`
- Animation duration: `1s`
- Animation timing function: `ease-out`
- Animation delay: `0.3s`
- Animation iteration count: `1`
- Animation fill mode: `forwards`
