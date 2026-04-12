## Problem: Fluid Grid Columns with Auto-Fit

Try to create a responsive grid layout with equal height, auto-wrapping columns using CSS Grid's `auto-fit` and `minmax()` functions.

## Problem description

A `.container` holds multiple `.item` elements of varying content size. The task is to employ CSS Grid with `repeat(auto-fit, minmax())` so that:

- Each `.item` becomes at least 200px wide and at most shares the remaining space equally.
- The layout automatically adjusts the number of columns as the container width changes.
- All grid cells maintain equal height in each row.

## Goal

Implement a dynamic grid that adapts column count based on container width, ensuring equal height columns without media queries.

## Constraints

- Only CSS modifications are allowed.
- Do not alter HTML structure or use JavaScript.
