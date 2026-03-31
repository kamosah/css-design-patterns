## Problem: Adaptive Header Logo and Navigation Visibility

Try to adapt logos and navigation visibility based on screen size for responsive headers.

## Problem description

Given an HTML page with a header containing:

- A `<div class="logo-small">` for a small logo
- A `<div class="logo-medium">` for a medium logo
- A `<div class="logo-full">` for a full logo
- A `<nav class="nav-links">` with four navigation links (Home, About, Services, and Contact)
- A `<button class="hamburger-menu">` representing the mobile menu icon

Write CSS to ensure the following:

- **Mobile (< 500px):** Show `.logo-small` and `.hamburger-menu`; hide `.logo-medium`, `.logo-full`, and `.nav-links`.
- **Tablet (500px–799px):** Show `.logo-medium` and only the first three links in `.nav-links` horizontally; hide `.logo-small`, `.logo-full`, and `.hamburger-menu`.
- **Desktop (≥ 800px):** Show `.logo-full` and all links in `.nav-links` horizontally; hide `.logo-small`, `.logo-medium`, and `.hamburger-menu`.

## Goal

Implement a header that dynamically displays the appropriate logo and navigation elements for mobile, tablet, and desktop, improving usability and preserving branding across devices.

## Constraints

- Only use CSS; do not modify HTML or use JavaScript.
- Breakpoints are exactly 500px and 800px.
- The header layout should use Flexbox (or Grid) to align elements horizontally when visible.
- On tablet, use CSS selectors to show only the first three links without duplicating HTML.
