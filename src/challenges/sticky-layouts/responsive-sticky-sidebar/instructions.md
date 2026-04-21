# Responsive Sticky Sidebar

You have a two-column layout with an `<aside class="sidebar">` and a `<main class="content">`. On desktop screens (768px and wider), the sidebar should stick to the top of the viewport as the user scrolls. On mobile screens (narrower than 768px), the sidebar should scroll normally with the page.

## Goal

Use CSS only to make the sidebar sticky on desktop and static on mobile, without any JavaScript.

## Constraints

- Use `position: sticky` for the sidebar at the desktop breakpoint
- Define the mobile/desktop breakpoint at `768px`
- Do not use `position: fixed` — the flex layout must remain intact
- No JavaScript allowed
