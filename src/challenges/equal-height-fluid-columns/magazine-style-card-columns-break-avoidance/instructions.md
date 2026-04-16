## Problem: Magazine-Style Card Columns with Break Avoidance

Try to create a magazine-style multi-column layout using CSS columns and `break-inside: avoid`, with dynamic column count via custom properties.

## Problem description

A `.magazine` container holds multiple `.card` elements. The task is to:

- Use `column-count` and `column-gap` to create 3 magazine-style columns.
- Ensure no `.card` is broken between columns by applying `break-inside: avoid`.
- Dynamically control the number of columns via a custom property `--cols`.

## Goal

Implement a magazine-style card layout with intact card blocks, responsive to changes in CSS variable `--cols` for dynamic column count.

## Constraints

- Only CSS may be used.
- HTML remains unchanged.
- No JavaScript is allowed.
