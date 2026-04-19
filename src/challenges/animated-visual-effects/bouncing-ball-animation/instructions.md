# Bouncing Ball Animation

Given an HTML page with a `.bounce-container` holding a `.ball` element, write CSS to animate the ball dropping and rebounding with diminishing height.

## Goal

Style the container and ball, then define a multi-stop `@keyframes bounce` animation that simulates realistic bouncing motion.

## Constraints

- Use only CSS — no JavaScript
- `.bounce-container`: `width: 100%`, `height: 200px`, `position: relative`
- `.ball`: `width: 40px`, `height: 40px`, `background-color: #ff4757`, `border-radius: 50%`, `position: absolute`, `left: calc(50% - 20px)`
- `@keyframes` name must be `bounce`
- Keyframe stops:
  - `0%` → `translateY(0)`
  - `50%` → `translateY(160px)`
  - `70%` → `translateY(100px)`
  - `90%` → `translateY(160px)`
  - `100%` → `translateY(0)`
- Animation duration: `2s`
- Animation timing function: `cubic-bezier(0.28, 0.84, 0.42, 1)`
- Animation iteration count: `infinite`
