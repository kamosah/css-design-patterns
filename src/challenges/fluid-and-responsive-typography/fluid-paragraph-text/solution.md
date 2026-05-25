# Solution Explanation

The key is the CSS `clamp()` function applied to `font-size` on the paragraph.

```css
p {
  font-size: clamp(14px, 1.5vw + 1rem, 20px);
}
```

- **`clamp(MIN, PREFERRED, MAX)`** takes three arguments: a minimum value, a preferred (scaling) value, and a maximum value.
- The preferred value `1.5vw + 1rem` blends two units: `vw` scales with the viewport width while `rem` anchors to the root font size, keeping the text accessible when the user zooms or changes their default font size.
- The browser ensures the result never falls below **14px** or rises above **20px**, regardless of viewport width.
- This single declaration replaces multiple `@media` breakpoints, giving truly smooth scaling with zero JavaScript.
