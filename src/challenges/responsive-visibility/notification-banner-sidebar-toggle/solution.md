# Solution: Notification Banner and Sidebar Toggle

## Explanation

### Base styles

`.notification-banner` starts as `display: none` — it's only shown on mobile and tablet. It's styled with a yellow background, centered bold text, and padding.

`.sidebar` also starts as `display: none` — it only appears on desktop. It has a fixed 250px width, full height, light background, and a subtle box-shadow on its left edge.

`.content` gets base `padding: 16px` so text isn't flush against the viewport edges at any breakpoint.

### Mobile (`max-width: 599px`)

`.notification-banner` switches to `display: block` and becomes `position: fixed` at `top: 0` with `width: 100%` and `z-index: 1000`. Fixed positioning pulls it out of normal flow, so `.content` needs `padding-top: 48px` to prevent its content from being hidden underneath the banner.

`.sidebar` stays hidden.

### Tablet (`min-width: 600px` and `max-width: 1023px`)

`.notification-banner` stays visible (`display: block`) but returns to `position: static`, re-entering normal document flow and pushing `.content` down naturally. No extra `padding-top` needed beyond the base 16px. `.sidebar` remains hidden.

### Desktop (`min-width: 1024px`)

`.notification-banner` is hidden — at this size the persistent sidebar replaces it as the primary navigation surface.

`.sidebar` becomes `position: fixed; right: 0; top: 0; width: 250px; height: 100%`, pinning it to the right edge of the viewport. Because fixed elements are removed from normal flow, `.content` needs `margin-right: 250px` to prevent text from flowing beneath the sidebar.

### Why `margin-right` and not `padding-right`?

`margin-right` shrinks the element's layout box, keeping text away from the sidebar. `padding-right` would add internal space inside `.content` but the element itself would still extend under the fixed sidebar — the background would overlap. Using margin is the correct tool here.
