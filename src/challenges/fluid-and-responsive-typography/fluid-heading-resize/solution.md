# Solution Explanation

The key is the CSS `clamp()` function applied directly to `font-size`.

```css
h1 {
  font-size: clamp(24px, 5vw, 48px);
}
```

- **`clamp(MIN, PREFERRED, MAX)`** takes three arguments: a minimum value, a preferred (scaling) value, and a maximum value.
- The preferred value `5vw` is **5% of the viewport width**. At 480px wide that equals 24px (the floor), and at 960px wide it reaches 48px (the ceiling). The browser clamps the result so it never goes below 24px or above 48px regardless of viewport size.
- This single declaration replaces multiple `@media` breakpoints, giving truly smooth scaling with zero JavaScript.
