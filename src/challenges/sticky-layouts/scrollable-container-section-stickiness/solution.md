# Solution: Scrollable Container Section Stickiness

Apply `position: sticky` and `top: 0` to `section h2`. Because `.scroll-container` has a fixed `height` and `overflow-y: scroll`, it becomes the scrolling ancestor — and sticky elements pin against their nearest scrolling ancestor, not the viewport.

Each heading stays fixed at the top of the container only while its parent `<section>` is in view. Once the section fully scrolls past, the heading naturally exits with it. No JavaScript needed — the browser's sticky algorithm handles the boundary automatically using the section's height as the containment box.

Add a `background` and `z-index` so the sticky heading renders above the section's body text as it scrolls underneath.
