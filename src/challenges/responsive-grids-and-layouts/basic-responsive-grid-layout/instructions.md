# Basic Responsive Grid Layout

Given a series of content cards inside a container, implement a responsive grid that:

- Displays one column on narrow viewports (< 500px)
- Displays two columns on medium viewports (>= 500px and < 900px)
- Displays as many columns as fit (min width 250px) on wide viewports (>= 900px)

## Goal

Write CSS to configure the grid container and items so that they adapt fluidly to different screen widths without using explicit media queries for each range.

## Constraints

- Use CSS Grid only
- Do not write manual media queries
- Minimum column width must be 250px; columns should expand to fill available space
- Gap between items should be `1rem`
