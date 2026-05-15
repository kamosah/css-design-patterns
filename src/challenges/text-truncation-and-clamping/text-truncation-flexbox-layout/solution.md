## Solution: Text Truncation Inside a Flexbox Layout

Let's truncate overflowing text with ellipsis inside a Flexbox layout while preserving the fixed position of adjacent icons.

## Solution explanation

- **Line 11** — `flex: 1` allows the title to grow and take available space.
- **Line 12** — `white-space: nowrap` keeps the title on one line.
- **Line 13** — `overflow: hidden` clips the overflowing content.
- **Line 14** — `text-overflow: ellipsis` shows ellipsis on overflow.
- **Line 18** — `flex-shrink: 0` ensures the icon does not shrink when space is tight.
