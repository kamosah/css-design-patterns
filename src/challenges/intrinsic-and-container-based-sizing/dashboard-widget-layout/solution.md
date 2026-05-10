# Solution: Dashboard Widget Layout

## Solution explanation

**Lines 1–9:** `.dashboard` sets up a responsive grid using `auto-fit` and `minmax(250px, 1fr)`, with consistent gap and padding. `overflow-x: hidden` prevents horizontal overflow.

**Lines 11–24:** `.widget` declares each widget as a `size`-based container, adds a flex column layout, rounded corners, box shadow, and overflow handling. `min-width: 0` prevents overflow in the grid. `transition` on padding and font-size ensures smooth state changes.

**Lines 26–29:** `.widget h2` resets margins and sets the default `1rem` font size with a smooth transition.

**Lines 31–38:** `@container (min-width: 400px)` applies fluid `clamp()`-based typography (`clamp(1rem, 2vw, 1.5rem)`) and padding (`clamp(1.5rem, 1vw, 2rem)`) for mid-size containers.

**Lines 40–47:** `@container (min-width: 600px)` uses a larger static `1.75rem` font size and `2.25rem` padding for spacious presentation on wider widgets.

**Lines 49–58:** `.content-block` enforces a `16:9` aspect ratio block to simulate chart or media content, scaling to the full widget width via `width: 100%`.

**Lines 60–63:** `.widget .content-block` is constrained with `min-width: 0` to allow it to shrink properly in a flex container, and `max-width: 100%` ensures it never overflows its parent.
