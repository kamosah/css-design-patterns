## Solution: Accessible Icon Button Focus Highlight

Let's add a clear, accessible focus ring to an icon-only button for keyboard users.

## Solution explanation

- **Lines 1–15** — `.icon-btn` makes the button circular with `border-radius: 50%`, sets a fixed 48×48px size, removes browser chrome (`border: none`, `outline: none`), and uses `inline-flex` to center the icon. `transition: box-shadow 0.2s` gives the focus ring a subtle fade-in.
- **Lines 17–20** — On `:focus`, `box-shadow: 0 0 0 3px #2684FF` draws a ring that hugs the circular shape — unlike `outline`, `box-shadow` respects `border-radius`.
- **Lines 22–24** — `display: block` on the SVG eliminates the inline baseline gap that would otherwise add unwanted spacing below the icon.
