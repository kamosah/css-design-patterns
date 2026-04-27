# Responsive Dashboard Card Layout

Given a `.dashboard` container holding multiple `.card` elements, implement a responsive grid layout that adjusts the number of columns based on viewport width.

Layout requirements:

- **Mobile (< 600px):** 1 column
- **Tablet (600px – 900px):** 2 columns
- **Desktop (> 900px):** 4 columns

All cards should have equal height based on content, wrap to new rows, and maintain a 20px gap.

## Goal

Write CSS in `styles.css` to define the `.dashboard` grid with appropriate `grid-template-columns` and media queries, ensuring cards adapt to viewport width.

## Constraints

- Use CSS Grid and media queries only
- Implement exactly two media queries at `min-width: 600px` and `min-width: 900px`
- Set the grid gap to 20px
- Cards should maintain equal height through default CSS Grid row alignment
