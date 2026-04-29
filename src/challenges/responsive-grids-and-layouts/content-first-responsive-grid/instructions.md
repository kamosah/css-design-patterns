# Content-First Responsive Grid

Given a `.grid` container holding four sections — `.hero`, `.features`, `.testimonials`, and `.footer` — implement a responsive layout using CSS Grid and the `order` property.

Layout requirements:

- **Desktop (≥ 1024px):** Hero spans full width at the top, features and testimonials appear side-by-side, footer spans full width at the bottom.
- **Mobile (< 1024px):** Testimonials appear immediately after hero, followed by features, then footer.

## Goal

Write CSS in `styles.css` to configure the `.grid` container with named areas and use the `order` property to reorder content on mobile.

## Constraints

- Use CSS Grid and CSS `order` only — no JavaScript
- Define two breakpoints: `< 1024px` and `≥ 1024px`
- Set the layout `gap` to `20px`
