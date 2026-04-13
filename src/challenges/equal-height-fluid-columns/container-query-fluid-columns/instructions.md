## Problem: Container Query-Based Fluid Columns

Try to use CSS Container Queries to create a responsive, component-driven layout that adjusts column count based on the container's width.

## Problem description

A `div class="card-container"` contains a `div class="card-list"` that, in turn, wraps multiple `.card` items. As the component's width grows:

- **Below 400px**: Display as a single column.
- **Between 400px and 800px**: Display two equal-height columns.
- **Above 800px**: Display three equal-height columns.

All columns should maintain equal height without external media queries.

## Goal

Use CSS Container Queries to adapt the number of columns in the `.card-list` component based on its inline size.

## Constraints

- Only CSS for the existing component may be used; HTML and JavaScript must remain unchanged.
