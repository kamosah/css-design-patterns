# Overlapping Sticky Banner

Given an HTML page with a `<div class="banner">` followed by a `<div class="content">`, write CSS so the banner scrolls with the page initially but sticks to the top of the viewport once the user scrolls past it. While sticky, the banner should **overlap** the content beneath rather than push it down.

## Goal

Style `.banner` with sticky positioning and ensure it layers on top of `.content` via `z-index`.

## Constraints

- Use only CSS — no JavaScript
- Banner height: `60px`
- Stickiness starts at `top: 0` (the viewport's top edge)
- The banner must overlap content, not push it down
- Apply a small `margin-top` on `.content` to avoid the initial non-sticky overlap
