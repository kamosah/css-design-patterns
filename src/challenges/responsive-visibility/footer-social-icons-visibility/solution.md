# Solution: Footer Social Icons Visibility

## Explanation

### Base styles (both elements hidden by default)

Both `.footer-social-icons` and `.mobile-share-button` start with `display: none`. This ensures neither element is accidentally visible before a media query explicitly shows it — a mobile-first defensive baseline.

### Mobile view (`max-width: 799px`)

Inside `@media (max-width: 799px)`, `.mobile-share-button` is set to `display: block` to reveal the Share button. The `.footer-social-icons` wrapper remains `display: none`.

### Desktop view (`min-width: 800px`)

Inside `@media (min-width: 800px)`, `.footer-social-icons` is set to `display: block` to show all three social links. The `.mobile-share-button` remains `display: none`.

### Why `max-width: 799px` and `min-width: 800px`?

Using `799px` and `800px` as the respective boundaries ensures there is no overlap — a viewport exactly 800px wide shows only the social icons, while 799px shows only the Share button. A single pixel gap prevents both elements from being visible simultaneously.
