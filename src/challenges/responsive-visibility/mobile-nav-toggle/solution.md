## Solution: Mobile-Only Navigation Menu Toggle

Let's switch between mobile and desktop navigation based on screen width.

## Solution explanation

- **Lines 2–6** — `.mobile-nav` starts with `display: none` so neither nav renders by default. `background-color` and `padding` are set once here so they aren't repeated inside each media query.
- **Lines 8–12** — `.desktop-nav` is also hidden by default for the same reason — the base layer establishes a clean `display: none` that each breakpoint can opt into overriding.
- **Lines 15–22** — The `@media (max-width: 767px)` block targets viewports up to 767px. `.mobile-nav` is switched to `display: block` (making it visible) and `.desktop-nav` stays `display: none`. Because both start hidden, only one explicit `display: block` is needed per query.
- **Lines 25–44** — The `@media (min-width: 768px)` block targets viewports at 768px and wider. `.mobile-nav` is kept `display: none` and `.desktop-nav` becomes `display: block`. The desktop list is styled as a horizontal row using `display: flex` with `gap: 1rem` on the `<ul>`, `list-style: none` to strip bullets, and `text-decoration: none` on links for a clean nav bar appearance.
