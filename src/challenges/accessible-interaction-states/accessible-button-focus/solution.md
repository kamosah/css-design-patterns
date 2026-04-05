## Solution: Accessible Button Focus Indicator

Let's add a custom visible focus outline to a button for better accessibility.

## Solution explanation

- **Lines 1–10** — `.accessible-btn` gives the button clear padding, a light background, soft border, rounded corners, readable font, and pointer cursor. `outline: none` disables the browser default outline so only the custom one appears.
- **Lines 12–15** — `:focus-visible` applies a `2px solid #2684FF` outline with `2px` offset, making the focus state highly visible when navigating via keyboard. Using `:focus-visible` instead of `:focus` means the ring only appears for keyboard navigation — not for mouse clicks — which avoids distracting sighted mouse users while keeping full accessibility for keyboard users.
