# Solution: Responsive Testimonial Carousel and Grid Visibility

## Explanation

### Base styles

`.testimonials` gets `padding: 24px` and a light background. All nested elements inherit `width: 100%` so each fills its container by default.

`.testimonial-grid` starts as `display: none` — it only activates at tablet and above. `.author-photo` is also hidden by default (`display: none`) and only revealed on desktop.

`.testimonial-item` receives card-like styling (padding, border, border-radius, centered text) at the base level so these aesthetics apply at every breakpoint without repetition.

### Mobile (`max-width: 599px`)

`.testimonial-carousel` is set to `display: block`, stacking each `.testimonial-item` vertically. `.testimonial-grid` stays hidden. Author photos inside the carousel remain `display: none` for a simplified mobile layout.

### Tablet (`min-width: 600px` and `max-width: 899px`)

`.testimonial-carousel` switches to `display: none` — no duplication. `.testimonial-grid` becomes `display: grid` with `grid-template-columns: repeat(2, 1fr)` and a `16px` gap, giving a balanced two-column layout. Photos stay hidden for a cleaner, more compact display.

### Desktop (`min-width: 900px`)

`.testimonial-grid` upgrades to `repeat(3, 1fr)` columns with a wider `24px` gap. `.testimonial-grid .author-photo` switches to `display: block`, adding visual depth. The carousel stays hidden.

### Why two separate elements in the HTML?

The carousel and grid are distinct layout structures — a carousel needs a single-row overflow container, while a grid spans multiple rows and columns. Trying to morph one into the other with CSS alone would require complex overrides. Having two purpose-built elements and toggling visibility keeps each structure clean and predictable.
