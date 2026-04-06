## Solution: Accessible Link Focus Underline

Let's add a clear custom underline to a focused link to improve accessibility.

## Solution explanation

- **Lines 1–8** — `.accessible-link` removes the default underline, sets the link color, adds bottom padding to create space for the focus underline, and sets `outline: none` to suppress the browser default.
- **Lines 10–13** — `:focus` adds a bold `4px solid #2684FF` underline via `border-bottom`. Using `border-bottom` instead of `text-decoration` gives precise control over thickness and color, and the `padding-bottom` on the base rule ensures the border sits cleanly below the text without overlapping descenders.
