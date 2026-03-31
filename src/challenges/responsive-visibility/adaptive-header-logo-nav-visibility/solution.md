## Solution: Adaptive Header Logo and Navigation Visibility

Let's adapt logos and navigation visibility based on screen size for responsive headers.

## Solution explanation

- **Lines 1–7** — `.site-header` uses `display: flex` with `align-items: center` and `justify-content: space-between` to align child elements in a horizontal row with space between them. `padding: 16px` adds breathing room inside the header.

- **Lines 9–15** — All three logo `<img>` elements share base sizing rules: `width: 100%` scales each image to its container, `height: auto` preserves the aspect ratio, and `display: block` removes the default inline spacing gap beneath images.

- **Lines 17–26** — Each logo container constrains its image with a `max-width` — 30px for small, 50px for medium, and 200px for full — so logos render at the correct scale for their intended breakpoint without overflowing.

- **Lines 28–32** — `.nav-links a` is styled once at the base level: `margin: 0 8px` adds horizontal spacing between links, `text-decoration: none` removes underlines, and `color: #333` sets a readable dark gray.

- **Lines 35–48** — `@media (max-width: 499px)` targets mobile viewports. `.logo-small` is shown with `display: block` and `.hamburger-menu` is revealed as a large, borderless, clickable icon. `.logo-medium`, `.logo-full`, and `.nav-links` are all set to `display: none`.

- **Lines 51–64** — `@media (min-width: 500px) and (max-width: 799px)` targets tablet viewports. `.logo-medium` is shown. The `:nth-child(-n+3)` selector matches only the first three `<a>` elements (the formula `-n+3` yields 3, 2, 1 for n=0,1,2 and 0 or negative for n≥3), displaying them as `inline-block`. The fourth link is hidden with `:nth-child(n+4)`. `.logo-small`, `.logo-full`, and `.hamburger-menu` are hidden.

- **Lines 67–77** — `@media (min-width: 800px)` targets desktop viewports. `.logo-full` is shown and all `.nav-links a` elements are displayed as `inline-block`, rendering the full horizontal navigation bar. `.logo-small`, `.logo-medium`, and `.hamburger-menu` are hidden.
