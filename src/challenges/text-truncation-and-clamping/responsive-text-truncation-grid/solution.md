## Solution: Responsive Text Truncation Inside a Grid Layout

Let's create a responsive card grid where each card's title is truncated to a single line with ellipsis if it overflows the container width.

## Solution explanation

- **Lines 1–4** — `.grid` uses `display: grid` with `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` so columns wrap responsively based on available width, and `gap: 16px` adds spacing between cards.
- **Lines 6–9** — `.card` gets a `border` and `padding` to create a visually distinct container for each item.
- **Line 12** — `white-space: nowrap` keeps the title on a single line, preventing it from wrapping.
- **Line 13** — `overflow: hidden` clips any text that extends beyond the card's boundary.
- **Line 14** — `text-overflow: ellipsis` displays `…` at the point where the text is clipped, indicating that content has been truncated.
