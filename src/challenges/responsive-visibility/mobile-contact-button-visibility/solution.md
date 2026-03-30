# Solution: Mobile Contact Button Visibility

## Explanation

### Base styles (both elements hidden by default)

Both `.mobile-contact` and `.footer-contact` start with `display: none`. This ensures neither element is accidentally visible before a media query explicitly shows it.

The `.mobile-contact` button is also given its fixed positioning and visual treatment at the base level — `position: fixed`, `bottom: 16px`, `right: 16px`, a circular shape via `border-radius: 50%`, and a drop shadow — so these styles apply regardless of breakpoint.

### Mobile view (`max-width: 599px`)

Inside `@media (max-width: 599px)`, `.mobile-contact` is set to `display: block` to reveal the fixed button. The `.footer-contact` link remains `display: none`.

### Desktop view (`min-width: 600px`)

Inside `@media (min-width: 600px)`, `.mobile-contact` is set back to `display: none` and `.footer-contact` is set to `display: block`, showing the standard footer link for larger screens.

### Why `max-width: 599px` and `min-width: 600px`?

Using `599px` and `600px` as the respective boundaries ensures there is no overlap — a viewport exactly 600px wide shows only the footer link, while 599px shows only the mobile button. A single pixel gap prevents both elements from being visible simultaneously.
