# Responsive Monthly Calendar Grid

Try to build a fully responsive monthly calendar using CSS Grid with weekday headers, auto-wrapping dates, and offset alignment — no media queries needed.

## Problem description

Given a `div.calendar` container with child `div` elements representing days of the week (Sun–Sat) and date cells (`div.date`), implement a CSS Grid that:

- Uses `grid-template-columns: repeat(7, 1fr)` for weekday columns.
- Places weekday headers in the first row.
- Offsets date cells so that the first date appears under its corresponding weekday column using CSS only (e.g., `.date:first-of-type { grid-column-start: X; }`).
- Wraps remaining dates into subsequent rows.
- Remains fully responsive: cells shrink and expand as viewport width changes.

## Goal

Write CSS in `styles.css` to configure the calendar grid, including header and date positioning, responsive cell sizing, and consistent gutters.

## Constraints

- Use CSS Grid exclusively — no Flexbox.
- No JavaScript allowed.
- Use `grid-column-start` for the first date offset.
- Weekday headers and date cells share a `gap` of `5px`.
- Cells should maintain a square aspect ratio.
- The month in the starter HTML begins on **Thursday** (column 5).
