# Mobile-First Responsive Grid

Given a set of content items inside a `.responsive-grid` container, implement a grid that starts with a single column on small screens and progressively expands to two and then three columns at wider viewports.

- Shows a single column for viewports less than 400px
- Shows two columns for viewports between 400px and 800px
- Shows three columns for viewports 800px and above

## Goal

Write CSS in `styles.css` with a mobile-first approach: start with one column by default, then add media queries at `min-width: 400px` and `min-width: 800px` to increase the number of columns.

## Constraints

- Use CSS Grid only; JavaScript is not allowed
- Use exactly two media queries
- Columns must equally divide the available width
- Keep a 20px gap between items
