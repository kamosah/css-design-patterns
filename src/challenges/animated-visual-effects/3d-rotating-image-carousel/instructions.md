# 3D Rotating Image Carousel

Given an HTML page with a `<div class="carousel">` containing six `<div class="carousel-item">` elements, write CSS to arrange the items in a circular ring in 3D space and rotate the entire carousel infinitely around its vertical axis.

## Goal

Use `perspective`, `transform-style: preserve-3d`, `nth-child` transforms, and a `@keyframes spin` animation to build a pure-CSS 3D carousel.

## Constraints

- Use only CSS — no JavaScript
- Carousel size: `width: 400px; height: 300px`
- `perspective: 1000px` on `.carousel`
- `transform-style: preserve-3d` on `.carousel`
- 6 items, each rotated by increments of `60deg` around the Y-axis and translated outward by `300px`
- Each item centered via `translate(-50%, -50%)` after translation
- `@keyframes` name must be `spin`
- Animation duration: `20s`
- Animation timing function: `linear`
- Animation iteration count: `infinite`
