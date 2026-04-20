# Glass Mega Dropdown Menu

Given HTML markup for a `<nav class="glass-nav">` containing a `.menu` list of `<li>` items — some of which wrap a `<div class="dropdown">` of submenu links — write CSS to build a responsive glassmorphic mega-dropdown navbar without JavaScript.

The gradient background is already provided in the HTML. Your task is to implement all navbar and dropdown behaviour in `styles.css`.

## Goal

1. Style the navbar with a frosted-glass background fixed at the top of the viewport.
2. Position `.dropdown` panels absolutely below the navbar, hidden by default.
3. Reveal each `.dropdown` on `:hover` of its parent `<li>` or `:focus-within`, transitioning `opacity` and `visibility`.
4. Use CSS Grid inside the dropdown to lay out submenu links in 4 columns on large screens and 2 columns on small screens.

## Constraints

- Use only CSS (no JavaScript)
- Navbar: `position: fixed; top: 0; left: 0; width: 100%; height: 60px; display: flex; align-items: center; z-index: 1000`
- Navbar background: `rgba(255, 255, 255, 0.2)` with `backdrop-filter: blur(8px)`
- `.menu`: `list-style: none; display: flex; gap: 2rem; margin: 0; padding: 0`
- `.menu li`: `position: relative`
- `.dropdown`: `position: absolute; top: 60px; left: 0; width: 100%; max-width: 1200px; margin: 0 auto`; hidden with `opacity: 0; visibility: hidden; transition: opacity 0.3s ease`
- Dropdown background: `rgba(255, 255, 255, 0.2)` with `backdrop-filter: blur(8px)`, `border-radius: 8px`, `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`
- Dropdown grid: `display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; padding: 1rem`
- Reveal: `opacity: 1; visibility: visible` on `li:hover > .dropdown` and `li:focus-within > .dropdown`
- Media query at `max-width: 768px`: switch grid to `repeat(2, 1fr)`
