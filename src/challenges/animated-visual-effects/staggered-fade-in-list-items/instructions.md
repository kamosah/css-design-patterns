# Staggered Fade-In List Items

Given an HTML page containing a `<ul class="stagger-list">` with five `<li>` elements, write CSS to animate each item so they fade in and slide up one after another.

## Goal

Define a `@keyframes fadeInUp` animation and apply it to each list item with increasing delays to create a staggered entrance effect.

## Constraints

- Use only CSS — no JavaScript
- Initial `opacity` on each `<li>`: `0`
- Initial `transform` on each `<li>`: `translateY(20px)`
- `@keyframes` name must be `fadeInUp`
- Animation duration: `0.6s`
- Animation timing function: `ease-out`
- Animation fill mode: `forwards`
- Delay increments: `0.2s` per item (item 1 → `0s`, item 2 → `0.2s`, … item 5 → `0.8s`)
