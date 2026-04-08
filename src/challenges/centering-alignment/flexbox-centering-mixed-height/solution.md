## Solution: Flexbox Centering Mixed-Height Children

Let's vertically center flex items of different heights within a container using Flexbox.

## Solution explanation

In the `styles.css` file, on line 5 (`align-items: center;`), Flexbox centers all items along the cross axis, aligning mixed-height children around the container's midline.

```css
.flexbox {
  display: flex;
  height: 200px;
  border: 1px solid #555;
  align-items: center; /* ← this line was added */
}
```

### Why it works

| Technique | Purpose |
| --- | --- |
| `display: flex` | Establishes a flex formatting context on the container |
| `align-items: center` | Aligns **all** flex children along the cross axis (vertical), regardless of their individual heights |
| Fixed `height` on `.flexbox` | Required — without a taller container than the tallest child, there is no space to center into |

### Key insight

`align-items` applies uniformly to every child in the flex container. Each child's own height is irrelevant — Flexbox finds each child's midpoint and aligns it to the container's midpoint, making mixed-height centering a one-liner.
