# CSS Grid Complex Nested Layout

Given a `.parent-grid` containing a `header`, `sidebar`, `content`, and `footer`, implement a nested responsive layout where the `content` area is itself a CSS Grid subdivided into `hero`, `features`, and two stacked `data-panels`.

## Goal

Write CSS in `styles.css` to define both the parent and child grids with three responsive breakpoints.

## Layout requirements

**Mobile (< 600px):** Single-column parent and child grids — all areas stack vertically.

**Tablet (600px – 900px):** Parent switches to two columns (`1fr 3fr`) with header and footer spanning both. Child grid remains single-column.

**Desktop (≥ 900px):** Parent widens content column to `4fr`. Child grid bottom row places features (`2fr`) and panel1/panel2 (stacked, `1fr`) side by side.

## Constraints

- Use CSS Grid for both parent and child layouts — no Flexbox
- Two breakpoints: `min-width: 600px` and `min-width: 900px`
- Parent `gap`: `20px`; child `gap`: `10px`
- Use `display: contents` on `.data-panels` so panels participate directly in the child grid
