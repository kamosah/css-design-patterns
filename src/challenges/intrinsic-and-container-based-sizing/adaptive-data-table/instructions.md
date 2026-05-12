# Adaptive Data Table

Create a responsive data table that morphs from a traditional table to a grid card layout and then to a stacked flex format using CSS Container Queries.

## Problem description

You have a `<div class="table-wrapper">` containing a `<table>` with `<thead>` and `<tbody>` rows and cells. Write CSS so that:

- `.table-wrapper` declares `container-type: inline-size`.

- **Large (≥800px):** The `<table>` uses `display: table` with `table-layout: fixed` and column widths defined by `minmax(150px, max-content)`, `2fr`, `fit-content(200px)`, and `1fr` respectively.

- **Medium (400px–799px):** The `<table>` hides its header and sets `display: grid` on each `<tr>` with `grid-template-areas` to display cells in a 2×2 card layout.

- **Small (<400px):** The `<table>` displays each `<tr>` as `display: flex; flex-direction: column;` with each `<td>` rendered as a block containing its `data-label` (the corresponding `<th>` text) and value side by side.

## Goal

Implement CSS in `styles.css` to:

1. Configure the table wrapper as a container for inline sizing.
2. Use `@container` queries at `400px` and `800px` to switch between table, grid, and flex layouts.
3. Apply CSS Grid intrinsic sizing functions for large and medium layouts.
4. Leverage `content: attr(data-label)` to display headers in small view.

## Constraints

- Do not modify the HTML structure except for adding `data-label` attributes to `<td>` elements.
- Use only CSS (no JavaScript).
- Define breakpoints exactly at `400px` and `800px`.
- Ensure no layout introduces horizontal overflow.
