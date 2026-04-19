# 3D Flip Card Effect

Given an HTML page with a `.card > .card-inner > (.card-front + .card-back)` structure, write CSS to create a card that flips in 3D on hover, revealing its back face.

## Goal

Use `perspective`, `transform-style: preserve-3d`, `backface-visibility: hidden`, and a hover rule to produce a smooth CSS-only 3D flip.

## Constraints

- Use only CSS — no JavaScript
- Card size: `width: 300px; height: 200px`
- Perspective on `.card`: `1000px`
- `.card-inner` transition: `0.6s ease`
- Use `transform-style: preserve-3d` and `backface-visibility: hidden`
- Rotate `.card-back` by `rotateY(180deg)` initially
- Apply the flip on `.card:hover .card-inner`
