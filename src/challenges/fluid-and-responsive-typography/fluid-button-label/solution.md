# Solution Explanation

The key is the CSS `clamp()` function applied to `font-size` on the button.

```css
button {
  font-size: clamp(16px, 2vw, 24px);
}
```

- **`clamp(MIN, PREFERRED, MAX)`** takes three arguments: a minimum value, a preferred (scaling) value, and a maximum value.
- The preferred value `2vw` is **2% of the viewport width**. At 800px wide it equals 16px (the floor), and at 1200px wide it reaches 24px (the ceiling).
- The browser ensures the result never falls below **16px** or rises above **24px**, regardless of viewport width.
- This single declaration replaces multiple `@media` breakpoints, giving truly smooth scaling with zero JavaScript.
