# Glass Header Navbar

Given an HTML structure with a `<nav class="glass-nav">` containing a logo and a `<ul class="nav-links">`, write CSS to create a fixed top navigation bar with a translucent glass effect over a deep-gradient background.

## Goal

Style `.glass-nav` as a fixed, full-width header with a semi-transparent background and `backdrop-filter` blur. Style `.nav-links` as a horizontal flex list, and style the links with white text and no underline.

## Constraints

- Use only CSS — no JavaScript
- `.glass-nav`: `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, `height: 60px`, flex layout with `justify-content: space-between`
- Glass effect: `background: rgba(255, 255, 255, 0.15)`, `backdrop-filter: blur(8px)`, `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)`
- `z-index: 1000` to ensure the nav overlays page content
- `.nav-links`: horizontal flex row, `gap: 1.5rem`, no bullets, no default margin or padding
- Links: `color: #fff`, `text-decoration: none`, `font-weight: 500`
- `body`: `padding-block-start: 60px` to prevent content from hiding beneath the fixed bar
