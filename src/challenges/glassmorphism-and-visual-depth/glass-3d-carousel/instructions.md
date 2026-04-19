# Glass 3D Carousel

Given HTML markup with a `.carousel` container housing a `.carousel-inner` and six `.carousel-item` elements, write CSS to:

1. Apply `perspective: 1000px` to `.carousel` to establish a 3D viewing context.
2. Use `transform-style: preserve-3d` on `.carousel-inner` and animate it rotating around the Y-axis infinitely with `@keyframes spin`.
3. Position each `.carousel-item` around a circle using `rotateY(Ndeg) translateZ(300px)` at 60° intervals via `nth-child` selectors.
4. Pause the spin animation when the user hovers over the carousel.
5. Style each item as a glassmorphic card with semi-transparent background, `backdrop-filter: blur(10px)`, rounded corners, and subtle shadow.

## Goal

Write all necessary CSS rules—including `@keyframes`, 3D transforms, and glassmorphic styling—to produce a performant, auto-rotating 3D carousel that pauses on hover.

## Constraints

- Use only CSS (no JavaScript)
- `.carousel`: `width: 600px`, `height: 400px`, `perspective: 1000px`
- `.carousel-inner`: `transform-style: preserve-3d`, `animation: spin 20s linear infinite`
- `@keyframes spin`: rotate `from rotateY(0deg)` `to rotateY(-360deg)`
- Six items at 60° intervals: `nth-child(1)` through `nth-child(6)` with `translateZ(300px)`
- Pause on hover: `animation-play-state: paused` on `.carousel:hover .carousel-inner`
- `.carousel-item`: `width: 200px`, `height: 250px`, centered in 3D space with `top: 50%`, `left: 50%`
- Glass style: `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(10px)`, `border-radius: 12px`, `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`
