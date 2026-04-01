# Responsive Testimonial Carousel and Grid Visibility

## Problem

Given an HTML page with a testimonial section containing two main elements:

- A `<div class="testimonial-carousel">` wrapping multiple `<div class="testimonial-item">` elements (each containing `.testimonial-text` and an `.author-photo`).
- A `<div class="testimonial-grid">` wrapping multiple `<div class="testimonial-item">` elements (each containing `.testimonial-text` and an `<img class="author-photo">`).

Write CSS to ensure the layout adapts responsively across three breakpoints.

**Mobile** (viewport width less than 600px):
- Show `.testimonial-carousel` in a single column.
- Hide `.testimonial-grid`.
- Keep `.author-photo` elements inside the carousel hidden.

**Tablet** (viewport width between 600px and 899px):
- Hide `.testimonial-carousel`.
- Show `.testimonial-grid` as a two-column grid with a `16px` gap.
- Keep `.author-photo` elements hidden.

**Desktop** (viewport width 900px or greater):
- Hide `.testimonial-carousel`.
- Show `.testimonial-grid` as a three-column grid with a `24px` gap.
- Display `.author-photo` elements inside `.testimonial-grid`.

Do not modify the HTML structure or use JavaScript.

## Goal

Implement a testimonial section that shows a carousel on mobile, a two-column grid on tablet, and a three-column grid with author photos on desktop.

## Constraints

- Only use CSS; do not modify HTML or use JavaScript.
- Breakpoints are exactly **600px** and **900px**.
- `.testimonial-carousel` and `.testimonial-grid` occupy the same container space — only one is visible at a time.
- Grid gaps must be `16px` on tablet and `24px` on desktop.
- `.author-photo` elements are hidden by default and only shown on desktop within `.testimonial-grid`.
