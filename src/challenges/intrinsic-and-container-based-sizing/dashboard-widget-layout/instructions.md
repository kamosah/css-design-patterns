# Dashboard Widget Layout

Build a responsive dashboard layout that adapts widget sizing, grid structure, and typography based on both viewport and container dimensions using nested CSS Container Queries, `minmax()`, and `clamp()`.

## Problem description

You have a `<div class="dashboard">` containing multiple `<div class="widget">` elements. Each widget includes a header and content. Requirements are as follows:

- The dashboard grid should use `auto-fit` and `minmax(250px, 1fr)` to place as many widgets per row as fit.
- Each `.widget` must declare `container-type: size` so its header font and padding adjust:
  - **Below 400px** container inline size: header font `1rem` and padding `1.5rem`.
  - **Between 400px–600px**: header font `clamp(1rem, 2vw, 1.5rem)` and padding `clamp(1.5rem, 1vw, 2rem)`.
  - **Above 600px**: header font `1.75rem` and padding `2.25rem`.
- Within each widget, content blocks should maintain a `16:9` aspect ratio using intrinsic sizing, scaling to fill the widget width.
- Ensure there is no horizontal overflow at any breakpoint and transitions are smooth.

## Goal

Implement CSS in `styles.css` to:

1. Set up the dashboard grid on `.dashboard` using CSS Grid intrinsic functions.
2. Enable and target nested container queries on `.widget` at the specified thresholds.
3. Apply `clamp()` for fluid typography and padding.
4. Enforce `aspect-ratio: 16 / 9` on widget content.

## Constraints

- Do not modify the HTML structure and use only CSS (no JavaScript is allowed).
- Breakpoints are exactly at `400px` and `600px` for container queries.
- Grid must `auto-fit` widgets with a minimum width of `250px`.
- Typography and padding must use `clamp()` in the medium range.
- Content must preserve a `16:9` aspect ratio using intrinsic sizing.
- Ensure there is no horizontal overflow at any breakpoint.
- Apply smooth transitions between states.
