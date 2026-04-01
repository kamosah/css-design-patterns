# Notification Banner and Sidebar Toggle

## Problem

Given an HTML page with three main sections:

- A `<div class="notification-banner">` that displays important messages.
- An `<aside class="sidebar">` that provides navigation links.
- A `<main class="content">` that contains the page's primary content.

Write CSS to make the layout responsive across three breakpoints.

**Mobile** (viewport width less than 600px):
- Display `.notification-banner` fixed at the top of the page.
- Hide `.sidebar`.
- Add top padding to `.content` so it does not overlap with the fixed banner.

**Tablet** (viewport width between 600px and 1023px):
- Display `.notification-banner` as a normal block element above `.content`.
- Keep `.sidebar` hidden.
- Remove the extra top padding from `.content`.

**Desktop** (viewport width 1024px or greater):
- Hide `.notification-banner`.
- Display `.sidebar` fixed to the right side of the screen, spanning full height with a width of 250px.
- Add right margin to `.content` so it does not overlap with the sidebar.

Do not modify the HTML structure or use JavaScript.

## Goal

Implement a notification banner and sidebar whose visibility and positioning toggle across breakpoints, prioritizing important messages on mobile and navigation on desktop.

## Constraints

- Only use CSS; do not modify HTML or use JavaScript.
- Breakpoints are exactly **600px** and **1024px**.
- When `.notification-banner` is fixed, `.content` must have enough top padding to avoid being hidden under it.
- The `.sidebar` must be 250px wide and full height when visible.
