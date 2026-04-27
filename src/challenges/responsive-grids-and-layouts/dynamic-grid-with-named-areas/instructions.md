# Dynamic Grid with Named Areas

Given a page structure with header, sidebar, main content, and footer inside a `.grid-container`, implement a responsive grid layout using named areas that adapts across three breakpoints.

Layout requirements:

- **Mobile (< 768px):** Single column with only header, main, and footer. Sidebar is hidden.
- **Tablet (768px – 1023px):** Sidebar appears above main content, both full width in a single column.
- **Desktop (≥ 1024px):** Sidebar (1fr) and main (3fr) share a row side by side, header and footer span full width.

## Goal

Implement CSS rules in `styles.css` to define grid areas and media queries for three breakpoints, adjusting `grid-template-areas`, columns, and rows accordingly.

## Constraints

- Use CSS Grid with named areas (`grid-template-areas`)
- Define three breakpoints: `< 768px`, `768px–1023px`, and `≥ 1024px`
- Hide the sidebar on mobile
- Set the grid gap to 10px
