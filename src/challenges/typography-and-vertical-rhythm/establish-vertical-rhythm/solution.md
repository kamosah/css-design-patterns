## Solution: Establish Vertical Rhythm with a CSS Custom Property

Use a single CSS custom property to enforce consistent spacing and line height across headings and paragraphs.

## Solution explanation

- **Line 7** — `line-height: var(--rhythm)` sets the body's line height to the rhythm unit, ensuring each line of text occupies exactly one rhythm step on the vertical grid.
- **Lines 10–12** — `margin-bottom: var(--rhythm)` on `h1`, `h2`, and `p` pushes each block element down by exactly one rhythm unit, creating uniform vertical spacing throughout the page. Because all values derive from `--rhythm`, changing that single variable in `:root` re-tunes all spacing at once.
