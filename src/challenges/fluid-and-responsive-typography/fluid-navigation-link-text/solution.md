# Solution Explanation

Let's make the navigation link text scale fluidly between 14px and 22px based on the viewport width.

On lines 1–3, in the styles.css file, we apply the `clamp(14px, 2vw, 22px)` function to the navigation link text to scale it fluidly.

```css
nav a {
  font-size: clamp(14px, 2vw, 22px);
}
```
