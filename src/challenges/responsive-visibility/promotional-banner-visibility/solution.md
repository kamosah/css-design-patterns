## Solution: Promotional Banner Visibility

Let's switch between mobile and desktop banners based on screen width.

## Solution explanation

- **Lines 2–6** — `.desktop-banner` starts with `display: none` so neither banner renders by default. `text-align: center` and `margin` are set once here and shared by both breakpoints.
- **Lines 8–12** — `.mobile-banner` is also hidden by default for the same reason — the base layer keeps both banners off until a media query opts one in.
- **Lines 15–22** — The `@media (max-width: 1023px)` block targets viewports narrower than 1024px. `.desktop-banner` stays `display: none` and `.mobile-banner` is switched to `display: block`, making only the mobile image visible.
- **Lines 25–37** — The `@media (min-width: 1024px)` block targets viewports at 1024px and wider. `.mobile-banner` stays `display: none` and `.desktop-banner` becomes `display: block`. Both banner images receive `max-width: 100%` and `height: auto` so they scale responsively within their container.
