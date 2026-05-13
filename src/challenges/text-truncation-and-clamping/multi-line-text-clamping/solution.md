## Solution: Multi-Line Text Clamping

Let's clamp multi-line text to a fixed number of lines with an ellipsis using CSS, preserving layout consistency.

## Solution explanation

- **Line 8** — `display: -webkit-box` enables the box model required for line clamping.
- **Line 9** — `-webkit-line-clamp: 3` specifies that only three lines of text should be shown; text beyond the third line is hidden and an ellipsis is appended.
- **Line 10** — `-webkit-box-orient: vertical` sets the box orientation to vertical so lines are clamped along the block axis.
- **Line 11** — `overflow: hidden` hides the overflowing content and triggers the ellipsis behaviour together with the above properties.
