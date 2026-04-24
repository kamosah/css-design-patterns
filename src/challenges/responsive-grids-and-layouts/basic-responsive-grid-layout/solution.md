# Solution: Basic Responsive Grid Layout

Set the container's `display` to `grid` and use `repeat(auto-fit, minmax(250px, 1fr))` to automatically create as many columns as fit, each having at least 250px width. The `auto-fit` keyword collapses empty tracks when space is limited, ensuring cards wrap to the next row rather than leaving gaps.

`gap: 1rem` adds consistent spacing between grid items.

The item styles use `background-color`, `padding`, `border`, and `border-radius` to give each card a clear visual boundary, with `text-align: center` to horizontally center the label.
