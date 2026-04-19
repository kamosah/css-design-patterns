# Glass Flip Card

Given an HTML structure with `.flip-card` wrapping `.flip-card-inner`, which contains `.flip-card-front` and `.flip-card-back` spans, write CSS to create a glassmorphic card that flips on hover to reveal its back face.

## Goal

Set up `perspective` on `.flip-card`, use `transform-style: preserve-3d` and `transition` on `.flip-card-inner`, and position both faces with `backface-visibility: hidden` and the glass effect. Rotate the inner container on hover.

## Constraints

- Use only CSS — no JavaScript
- `.flip-card`: `width: 300px`, `height: 200px`, `perspective: 1000px`
- `.flip-card-inner`: `position: relative`, `transform-style: preserve-3d`, `transition: transform 0.6s ease-in-out`
- On hover: `transform: rotateY(180deg)` on `.flip-card-inner`
- `.flip-card-front` and `.flip-card-back`: `position: absolute`, `width: 100%`, `height: 100%`, `backface-visibility: hidden`, `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(8px)`, `border-radius: 12px`
- `.flip-card-back`: pre-rotated `transform: rotateY(180deg)` so it starts face-down
