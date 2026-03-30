# Responsive Article Grid with Sidebar Toggle

## Problem

Given an HTML page containing a container with two sections:

- A `<main class="article-grid">` element holding multiple `<article>` elements (each with a title and excerpt).
- An `<aside class="sidebar">` element with author information and links.

Write CSS to meet the following requirements:

**Mobile** (viewport width less than 600px):
- Display articles in a single column.
- Hide the sidebar.

**Tablet** (viewport width between 600px and 899px):
- Display articles in two columns with a small gap.
- Keep the sidebar hidden.

**Desktop** (viewport width 900px or greater):
- Display articles in three columns with a larger gap.
- Show the sidebar to the right of the article grid, taking up 25% of the container's width while the grid uses 75%.

Do not modify the HTML structure or use JavaScript.

## Goal

Implement a responsive article layout that adapts to different viewport widths by adjusting columns and toggling a sidebar, enhancing readability and navigation across devices.

## Constraints

- Only use CSS; do not modify HTML or use JavaScript.
- Breakpoints are exactly **600px** and **900px**.
- The `.container` should use CSS Grid or Flexbox to lay out `.article-grid` and `.sidebar` side by side on desktop.
- Articles must maintain consistent spacing and alignment across breakpoints.
