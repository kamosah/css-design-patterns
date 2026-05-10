# Adaptive Testimonial Grid

Build a responsive testimonial grid using CSS Container Queries where both the layout and each card's avatar, typography, and padding adapt fluidly across breakpoints.

## Problem description

You have a `<div class="testimonials">` container holding multiple `<div class="testimonial">` cards, each with an `<img class="avatar">`, `<h4 class="name">`, and `<p class="quote">`. Requirements are as follows:

The `.testimonials` container declares `container-type: inline-size` and adjusts its grid columns via container queries:

- **< 500px**: 1 column
- **500px–900px**: 2 columns
- **≥ 900px**: 3 columns

Each `.testimonial` card declares `container-type: size` and adapts inside via container queries:

- **< 200px**: Avatar `50px²`, name font `0.875rem`, quote font `0.75rem`, and padding `0.5rem`
- **200px–400px**: Avatar `80px²`, name font `clamp(1rem, 2vw, 1.25rem)`, quote font `clamp(0.875rem, 1.5vw, 1rem)`, and padding `clamp(0.75rem, 1vw, 1rem)`
- **≥ 400px**: Avatar `100px²`, name font `1.5rem`, quote font `1rem`, and padding `1.5rem`

Avatars must maintain a square aspect ratio and use `object-fit: cover`.

## Goal

Implement CSS in `styles.css` to:

1. Set up the testimonial grid container with intrinsic grid columns and container-level breakpoints.
2. Enable nested container queries on `.testimonial` cards for adaptive sizing.
3. Use `aspect-ratio` on avatars and `clamp()` for fluid typography and spacings.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- Define grid breakpoints exactly at `500px` and `900px`.
- Define card-level breakpoints exactly at `200px` and `400px`.
- Use `minmax()` and `auto-fit` for grid.
- Use `clamp()` for fluid typography and spacing in mid ranges.
