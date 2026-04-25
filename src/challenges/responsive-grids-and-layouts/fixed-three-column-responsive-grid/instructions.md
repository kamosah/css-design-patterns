# Fixed Three-Column Responsive Grid

Given several content blocks inside a `.grid-container`, implement a grid that shows three columns on large screens and automatically reduces to fewer columns on smaller viewports — without any media queries.

- Shows three columns when the container is at its maximum width of 800px
- Collapses to two or one column automatically as the viewport shrinks
- Each column has a minimum width of 200px

## Goal

Write CSS in `styles.css` to configure the `.grid-container` so it displays exactly three columns on large screens and responsively adjusts to smaller viewports without explicit media queries.

## Constraints

- Use CSS Grid only
- Do not use media queries
- Set column width with a minimum of 200px and a maximum of `1fr`
- The grid should always attempt to display up to three columns
- Keep a 16px gap between items
