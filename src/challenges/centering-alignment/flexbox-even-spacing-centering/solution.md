## Solution: Dynamically Even-Spacing and Centering of N Items

Learn how to distribute an unknown number of menu items evenly and center them using Flexbox without relying on hard-coded spacing.

## Solution explanation

- **`justify-content: center`** — Centers the flex line of links inside the container. When items are capped by `max-width`, this ensures the remaining space is split equally on both sides.

- **`flex: 1`** — Shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. Setting the basis to `0%` means all available width is distributed purely by grow ratio, giving every child an identical share regardless of text length.

- **`text-align: center`** — Centers the link text within each equally-sized segment, since `flex` controls the box size but not its inline content alignment.

- **`max-width: 200px`** — Prevents items from becoming excessively wide on large viewports. Once items hit this cap, `justify-content: center` takes over to keep the group centered.
