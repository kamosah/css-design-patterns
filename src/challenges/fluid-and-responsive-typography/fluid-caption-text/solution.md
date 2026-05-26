# Solution Explanation

The key is the CSS `clamp()` function applied to `font-size` on the `figcaption`.

```css
figcaption {
  font-size: clamp(12px, 1.2vw, 18px);
}
```

- **`clamp(MIN, PREFERRED, MAX)`** takes three arguments: a minimum value, a preferred (scaling) value, and a maximum value.
- The preferred value `1.2vw` is **1.2% of the viewport width**. At 1000px wide it equals 12px (the floor), and at 1200px it reaches the 18px ceiling.
- Below 1000px the font size is clamped to **12px** so caption text stays legible on small screens; above 1200px it stays at **18px** so it never grows oversized.
- This single declaration replaces multiple `@media` breakpoints, giving truly smooth scaling with zero JavaScript.
