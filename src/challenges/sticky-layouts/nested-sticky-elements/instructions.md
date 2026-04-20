# Nested Sticky Elements

Given a page with a `<header class="main-header">` followed by a `<div class="content">` that contains a `<section class="subheader">`, implement sticky positioning on both elements so they stack correctly during scrolling.

## Goal

Style `.main-header` to stick to the very top of the viewport, and `.subheader` to stick just below it — 50px from the top — so the two never overlap when both are in their sticky positions.

## Constraints

- Use only CSS — no JavaScript
- Main header height: `50px`; subheader height: `30px`
- The main header must stick at `top: 0`
- The subheader must stick at `top: 50px` (directly below the main header)
- The subheader must not overlap the main header — use `z-index` to enforce the correct stacking order
- All positioning must be relative to the viewport, not to other containers
