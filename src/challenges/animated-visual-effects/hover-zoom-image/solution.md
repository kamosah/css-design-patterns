## Solution: Hover Zoom Image

Let’s create a smooth hover zoom effect on an image using only CSS `transform` and `transition`.

### Solution explanation

In the `styles.css` file, you’ll find the following:

- **Lines 1–5:** Set `.image-container` to hide overflow, constrain the width to 300px, and center it horizontally with `margin: 0 auto`.
- **Lines 7–12:** Style `.zoom-img` to fill its container, block-level display to remove inline spacing, and add a 0.3s `ease-in-out` transition on the `transform` property with its origin at the center.
- **Lines 14–16:** Define the `:hover` state to apply `transform: scale(1.2)`, causing the image to zoom in smoothly.
