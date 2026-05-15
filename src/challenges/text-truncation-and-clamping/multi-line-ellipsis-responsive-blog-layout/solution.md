## Solution: Multi-Line Ellipsis in a Responsive Blog Layout

Let's create a responsive blog layout with preview text clamped to four lines using ellipsis for uniform card height.

## Solution explanation

- **Line 13** — `display: -webkit-box` initializes a box container for clamping.
- **Line 14** — `-webkit-line-clamp: 4` sets the line limit to 4.
- **Line 15** — `-webkit-box-orient: vertical` enables vertical stacking of lines.
- **Line 16** — `overflow: hidden` ensures that overflowed lines are hidden, allowing truncation with ellipsis.
