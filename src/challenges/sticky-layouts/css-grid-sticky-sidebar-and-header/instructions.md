# CSS Grid Sticky Sidebar and Header

You have a `.grid-container` wrapping a `<header class="site-header">`, an `<aside class="sidebar">`, and a `<main class="content">`. Build the CSS Grid layout so that the header spans the full top row and the sidebar occupies the first column of the row below it.

Both the header and the sidebar should remain visible while the user scrolls through the main content.

## Goal

Implement a CSS Grid layout that:

- Defines `grid-template-columns` and `grid-template-rows` for header, sidebar, and content
- Makes the header stick to the top of the viewport on scroll
- Makes the sidebar stick just below the header on scroll
- Allows the main content to scroll past both sticky elements

## Constraints

- Use only HTML and CSS — no JavaScript
- The header height is controlled by a `--header-height` CSS custom property; the sidebar's `top` offset must use the same value so they never overlap
- Do not use `position: fixed` — both elements must remain in normal document flow
- Do not use external CSS frameworks
