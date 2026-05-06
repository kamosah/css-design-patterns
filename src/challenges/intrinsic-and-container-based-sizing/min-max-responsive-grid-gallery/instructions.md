# Min-Max Responsive Grid Gallery

Create a responsive gallery layout with CSS Grid using intrinsic sizing so each item keeps a minimum width while expanding to fill available space.

## Problem description

You have a container `<div class="gallery">` with multiple `.item` child elements. Write CSS rules so the gallery displays as a grid that automatically fits as many columns of at least `200px` as the container allows, while letting each item grow to fill the remaining row space evenly.

## Goal

Implement CSS in `styles.css` to create a responsive grid layout using `repeat()`, `auto-fit`, and `minmax()` so the items wrap naturally as the container resizes.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- Minimum item width must be `200px`.
- Items should expand to fill leftover space evenly.
- The grid should reflow automatically on container resize.
