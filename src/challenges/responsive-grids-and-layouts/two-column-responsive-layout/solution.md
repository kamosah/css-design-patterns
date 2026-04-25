# Solution: Two-Column Responsive Layout

Set `.container` to `display: grid` with `grid-template-columns: repeat(2, 1fr)` to create two equal-width columns. `gap: 1rem` adds consistent spacing in both axes.

The `@media (max-width: 600px)` block overrides `grid-template-columns` to `1fr`, collapsing the layout to a single column on narrow viewports. Only one media query is needed because the two-column layout is the default and only needs to be overridden below the breakpoint.

The `.item` styles use `background`, `padding`, `border`, and `border-radius` to give each card a clear visual boundary, with `text-align: center` to horizontally center the label.
