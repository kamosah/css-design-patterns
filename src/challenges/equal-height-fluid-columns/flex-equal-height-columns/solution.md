## Solution: Flex Equal Height Columns

Use Flexbox to create two fluid columns that always match in height regardless of content length, ensuring a balanced layout.

## Solution explanation

- **`display: flex`** — Transforms `.container` into a flex container. All direct children become flex items, enabling Flexbox layout properties for arrangement and alignment. Crucially, flex items stretch to the tallest sibling by default (`align-items: stretch`), which produces the equal-height effect without any extra work.

- **`flex: 1`** — Applied to each `.column`, this shorthand sets `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. Starting from a basis of zero, all available horizontal space is distributed equally among siblings by grow ratio alone — content length has no effect on the final width split.

- **`padding: 1rem`** — Adds breathing room inside each column so text doesn't press against the edges.
