# Fullscreen Section with CSS-Only Carousel Effect

Given a `<section class="fullscreen-section">` structure with hidden radio inputs, a `.slides` container, and a `.nav` bar, write CSS to create a fullscreen CSS-only content switcher where:

- The section spans the entire viewport and hides overflow.
- Each `.slide` fills the viewport but only the selected one is shown.
- The selection is controlled by hidden radio buttons; when a radio is checked, the corresponding `.slide` becomes visible.
- The `.nav` is positioned at the bottom center and contains labels styled as interactive buttons.
- Clicking a label switches to the associated slide.

## Goal

Build a fullscreen CSS-only slider/carousel.

## Constraints

- No JavaScript is allowed.
- Do not modify the HTML.

## Starter CSS

```css
.fullscreen-section {
  /* Your code here: carousel layout and viewport sizing */
}
input[type="radio"] {
  /* Your code here: hide radio inputs */
}
.slides {
  /* Your code here: horizontal slide container */
}
.slide {
  /* Your code here: each slide styling */
}
#slide1:checked ~ .slides #s1,
#slide2:checked ~ .slides #s2,
#slide3:checked ~ .slides #s3 {
  /* Your code here: show only selected slide */
}
.nav {
  /* Your code here: carousel navigation styling */
}
.nav label {
  /* Your code here */
}
```
