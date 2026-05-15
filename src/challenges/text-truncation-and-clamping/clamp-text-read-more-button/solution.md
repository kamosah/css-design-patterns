## Solution: Clamp Text with Optional Read More Button

Let's clamp a text block to three lines with ellipsis and display a static "Read more" button to suggest expandable content.

## Solution explanation

- **Line 8** — `display: -webkit-box` allows text clamping inside the paragraph.
- **Line 9** — `-webkit-line-clamp: 3` restricts visible text to 3 lines.
- **Line 10** — `-webkit-box-orient: vertical` stacks lines vertically.
- **Line 11** — `overflow: hidden` hides the remaining content.
- **Lines 15–20** — Style the static button to match a typical UI read-more action without interactivity.
