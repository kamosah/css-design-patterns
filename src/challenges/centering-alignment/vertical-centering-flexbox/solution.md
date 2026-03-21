## Solution: Vertical Centering with Flexbox

Let's learn to vertically center a fixed-size `.box` inside a container using only CSS, without modifying the HTML structure.

## Solution explanation

In the `styles.css` file, on line 6 (`align-items: center;`), Flexbox aligns children along the cross axis (vertical), centering the `.box` within the container's height.

```css
.container {
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  display: flex;
  align-items: center; /* ← this line was added */
}

.box {
  width: 200px;
  height: 100px;
  border: 1px solid #000;
  background: lightcoral;
}
```

### Why it works

| Technique | Purpose |
| --- | --- |
| `display: flex` | Establishes a flex formatting context on the container |
| `align-items: center` | Aligns flex children along the cross axis (vertical by default), placing `.box` at the vertical midpoint |
| Fixed `height` on `.container` | Required — without it, the container shrinks to wrap its content and there is no extra space to distribute |
