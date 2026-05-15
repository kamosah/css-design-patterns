## Solution: Line Clamp with Hover-to-Expand Behavior

Let's clamp paragraph text to two lines with ellipsis and reveal full content on hover using only CSS.

## Solution explanation

- **Lines 4–6** — Truncate text to 2 lines using `-webkit-line-clamp`.
- **Line 7** — Add a transition for smooth effect.
- **Lines 11–14** — On hover, reset `-webkit-line-clamp`, allow multi-line wrapping, and restore full text with standard block behavior.
