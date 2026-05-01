# Responsive Monthly Calendar Grid

Build a fully responsive monthly calendar using CSS Grid with weekday headers, auto-wrapping dates, and offset alignment — no media queries needed.

## Goal

Write CSS to configure the calendar grid, including header and date positioning, responsive cell sizing, and consistent gutters.

## Layout requirements

- Use `grid-template-columns: repeat(7, 1fr)` for the seven weekday columns.
- Place weekday headers in the first row automatically.
- Offset the first date cell so it appears under its corresponding weekday column using `grid-column-start`.
- Remaining dates wrap into subsequent rows via CSS Grid auto-placement.
- Cells maintain a **square aspect ratio** at any viewport width.

## Constraints

- Use CSS Grid exclusively — no Flexbox.
- No JavaScript allowed.
- Use `grid-column-start` for the first date offset.
- Weekday headers and date cells share a `gap` of `5px`.
- The month in the starter HTML begins on **Thursday** (column 5).
