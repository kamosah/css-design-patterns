# Scrollable Container Section Stickiness

You have a `<div class="scroll-container">` of fixed height with `overflow-y: scroll`. Inside, there are multiple `<section>` elements, each with a heading. As the user scrolls the container, the heading of the current section should stick to the top of the container until the next section heading pushes it off.

## Goal

Ensure each section heading sticks to the top of the scrollable container during its scroll interval.

## Constraints

- Use CSS only (no JavaScript allowed)
- The scroll container height is fixed at 300px
- Stickiness only applies within the scroll container
- Headings must not stick beyond their section boundary
