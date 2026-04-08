## Problem: CSS-Only Modal Centering with Fallbacks

Try to center a fixed-size modal in the viewport using CSS transforms.

## Problem description

A `.modal-backdrop` spans the entire viewport and contains a `.modal` element sized `300×200px`. The task is to center the `.modal` horizontally and vertically in the viewport at all times, including during scrolling, using only CSS — without Flexbox or Grid — and provide a fallback for legacy browsers.

## Goal

Ensure the modal remains perfectly centered in the viewport on both axes, in modern and legacy browsers, without layout shifts on scroll.

## Constraints

- You may only use CSS on existing elements.
- Flexbox and Grid are disallowed.
- No JavaScript or additional HTML wrappers may be introduced.
