## Solution: Horizontal Centering with margin: auto

Let's learn to horizontally center a fixed-width `.box` inside a 600px container using `margin: auto` in CSS.

## Solution explanation

In the `styles.css` file, on line 8 (`margin: 0 auto;`), setting left and right margins to `auto` makes the block absorb any extra horizontal space equally, centering the `.box` within its container.

```css
.container {
  width: 600px;
  border: 1px solid #000;
}

.box {
  width: 200px;
  background: lightblue;
  margin: 0 auto; /* ← this line was added */
}
```

### Why it works

| Technique | Purpose |
| --- | --- |
| `margin: 0 auto` | Distributes leftover horizontal space equally on both sides |
| Fixed `width` on `.box` | Required — without it, the block stretches to fill the parent and there's no space to distribute |
| Block-level element | `auto` margins only apply on the horizontal axis of block elements |
