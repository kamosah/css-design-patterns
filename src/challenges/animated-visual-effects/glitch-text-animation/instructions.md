# Glitch Text Animation

Given an HTML page containing `<h1 class="glitch" data-text="Glitch Text">Glitch Text</h1>`, write CSS to create a flickering glitch effect using pseudo-elements and `clip-path` animation.

## Goal

Duplicate the text via `::before` and `::after`, apply colored channel offsets, and animate both layers with stepped keyframes to produce a convincing digital glitch effect.

## Constraints

- Use only CSS — no JavaScript
- `.glitch`: `position: relative`, `font-size: 4rem`, `color: #fff`, `background: #000`, `display: inline-block`, `overflow: hidden`
- Both pseudo-elements: `content: attr(data-text)`, `position: absolute`, `top: 0`, `left: 0`, `width: 100%`, `color: #fff`, `mix-blend-mode: screen`
- `::before` text-shadow: `2px 0 #f00`
- `::after` text-shadow: `-2px 0 #0ff`
- `@keyframes` name must be `glitchShift`
- Keyframes must include at least six stops (`0%`, `20%`, `40%`, `60%`, `80%`, `100%`) each with different `transform: translateX()` and `clip-path: inset()` values
- `::before` animation: `glitchShift 2s steps(2, end) infinite`, delay `-0.5s`
- `::after` animation: `glitchShift 2s steps(3, end) infinite`, delay `0s`
