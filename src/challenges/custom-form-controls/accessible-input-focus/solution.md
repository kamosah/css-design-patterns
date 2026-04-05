## Solution: Accessible Input Focus Highlight

Let's add a custom focus highlight to a text input for clear accessibility feedback.

## Solution explanation

- **Lines 1–9** — `.accessible-input` gives the input padding, a subtle border, rounded corners, readable font, and `outline: none` to disable the browser default for consistent cross-browser rendering.
- **Lines 11–14** — `:focus` applies a soft blue glow via `box-shadow: 0 0 0 3px rgba(38, 132, 255, 0.5)`. Using `box-shadow` instead of `outline` allows the ring to follow the border-radius of the element, producing a rounded glow rather than a rectangular outline.
