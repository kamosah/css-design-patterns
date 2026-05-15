## Solution: Table Cell Text Truncation

Let's truncate long text within table cells to a single line with ellipsis, preserving the overall table layout.

## Solution explanation

- **Line 14** — `white-space: nowrap` keeps the text on a single line.
- **Line 15** — `overflow: hidden` ensures overflowed content is clipped.
- **Line 16** — `text-overflow: ellipsis` shows ellipsis at overflow.
- **Line 17** — `max-width: 250px` limits the cell width for truncation to take effect.
