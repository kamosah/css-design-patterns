## Solution: Accessible Focus Indicator Using :focus-visible

Let's show a custom focus ring on a button only during keyboard navigation.

## Solution explanation

- **Lines 1–11** — `.keyboard-focus` defines base button styles: padding, font size, background, border, border-radius, and color. `outline: none` disables the browser default so no ring appears on mouse clicks.
- **Lines 13–16** — `:focus-visible` applies a `3px solid #2684FF` outline with `2px` offset exclusively when the browser heuristic determines focus arrived via keyboard. Mouse clicks do not satisfy that heuristic, so the ring never shows for pointer users.
