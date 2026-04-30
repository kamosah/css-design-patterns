# Complex Subgrid Responsive Layout

Create a layout with parent grid areas: `header`, `content`, `aside`, and `footer`. Inside `.content`, a subgrid splits into two columns — a title section and a list of cards.

## Goal

Write CSS rules employing `display: subgrid` for the child layout, defining responsive behavior at three breakpoints, and ensuring alignment of titles and cards across nested grid lines.

## Layout requirements

**Mobile (< 640px):** Single-column parent grid; subgrid also in single column.

**Tablet (640px – 1023px):** Parent grid in two columns (`content 2fr`, `aside 1fr`); subgrid in two columns.

**Desktop (≥ 1024px):** Parent grid in three columns (`aside 1fr`, `content 3fr`, and extra column reserved); subgrid displaying three columns for cards.

## Constraints

- Use CSS Grid and `subgrid` only — no Flexbox
- Define two breakpoints: `640px` and `1024px`
- Parent grid `gap`: `16px`; subgrid `gap`: `8px`
- Do not use JavaScript
