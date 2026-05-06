# Adaptive Card Component

Design a card that shifts between a single-column and two-column layout using CSS Grid and CSS Container Queries — no media queries needed.

## Problem description

Given a `<div class="card">` containing an `<img>` and a `.content` div with a heading and paragraph, write CSS so the card:

- Displays in a **single column** (image on top) when its container width is less than `300px`.
- Displays in **two columns** (image left, content right) when its container width is at least `300px`.
- Uses responsive font sizes for the heading at each breakpoint.
- Ensures the image preserves a **4:3 aspect ratio** and fills its container area.

## Goal

Implement CSS in `styles.css` to:

1. Declare `container-type` on the card.
2. Use `@container` queries at `300px` to adjust layout and typography.
3. Apply `aspect-ratio` and `object-fit: cover` on the image.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- Card must adapt layout exactly at the `300px` threshold.
- Image aspect ratio must be `4:3`.
- Heading `font-size` must be `0.875rem` below `300px` and `1.25rem` at or above `300px`.
