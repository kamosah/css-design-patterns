## Problem: Legacy Fallback Equal Height Columns for IE11

Try to implement an equal height column layout using CSS Grid with a table-cell fallback for IE11 via feature queries.

## Problem description

A `.layout` container holds multiple `.panel` elements. The task is to:

- Use CSS Grid (`grid-template-columns: 1fr 1fr`) in modern browsers.
- Detect Grid support via `@supports` and apply it.
- For browsers without Grid, fall back to `display: table` and `table-cell` to maintain equal heights.

## Goal

Implement a dual-mode equal height column layout that gracefully degrades for legacy browsers without JavaScript.

## Constraints

- Only CSS may be used.
- Detect feature support with `@supports` and provide a fallback.
- HTML must remain unchanged.
