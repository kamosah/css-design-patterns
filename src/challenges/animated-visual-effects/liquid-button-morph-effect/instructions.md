# Liquid Button Morph Effect

Given an HTML page containing a `<button class="liquid-button">Click Me</button>` element, write CSS to create a continuously animated liquid sheen effect using a blurred radial-gradient pseudo-element.

## Goal

Style the button and build a `::before` pseudo-element carrying two animated radial gradients that rotate and translate to produce a swirling liquid appearance.

## Constraints

- Use only CSS — no JavaScript
- `.liquid-button`: `position: relative`, `padding: 1rem 2rem`, `background-color: #007BFF`, `color: #fff`, `border: none`, `border-radius: 50px`, `cursor: pointer`, `overflow: hidden`
- `::before` pseudo-element: `content: ''`, `position: absolute`, `top: -50%`, `left: -50%`, `width: 200%`, `height: 200%`
- Background: two radial gradients — `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.5) 10%, transparent 50%)` and `radial-gradient(circle at 75% 75%, rgba(255,255,255,0.5) 15%, transparent 60%)`
- `background-size: 50% 50%`
- `filter: blur(20px)` and `pointer-events: none` on the pseudo-element
- `@keyframes` name must be `liquid`
- Keyframe stops:
  - `0%` → `translate(0, 0) rotate(0deg)`
  - `50%` → `translate(25%, 25%) rotate(180deg)`
  - `100%` → `translate(0, 0) rotate(360deg)`
- Animation duration: `3s`
- Animation timing function: `ease-in-out`
- Animation iteration count: `infinite`
