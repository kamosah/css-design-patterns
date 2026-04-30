# Complex Subgrid Responsive Layout

Given a `.parent-grid` containing a `header`, `content`, `aside`, and `footer`, implement a responsive layout where the `.content` area uses `display: subgrid` to inherit parent column tracks and house a `.title` and a `.card-list` of three cards.

## Goal

Write CSS in `styles.css` to define a parent grid and a nested subgrid with responsive behavior across three breakpoints.

## Layout requirements

**Mobile (< 640px):** Single-column parent grid; `.content` uses `subgrid` inheriting one column; `.title` and `.card-list` stack vertically.

**Tablet (640px – 1023px):** Parent switches to two columns (`2fr 1fr`) with header and footer spanning both. Aside sits in the right column. `.card-list` shows two cards per row.

**Desktop (≥ 1024px):** Parent has three columns (`1fr 3fr 1fr`). Aside moves to the left column; `.content` spans the middle two columns. `.card-list` shows three cards per row.

## Constraints

- Use CSS Grid and `display: subgrid` only — no Flexbox
- Two breakpoints: `min-width: 640px` and `min-width: 1024px`
- Parent `gap`: `16px`; subgrid `gap`: `8px`
- Do not use JavaScript
