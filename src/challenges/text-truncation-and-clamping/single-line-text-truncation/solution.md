## Solution: Single-Line Text Truncation

Let's truncate overflowing text to a single line using CSS while maintaining the layout's integrity.

## Solution explanation

- **Lines 1–5** — `.card` is given a fixed `width: 250px`, a `border` of `1px solid #ccc`, and `padding: 10px` to create a visually distinct card with inner spacing.
- **Lines 7–11** — `.truncate` uses `white-space: nowrap` to keep text on a single line, `overflow: hidden` to hide any content that extends beyond the container, and `text-overflow: ellipsis` to display `…` where text is clipped.
