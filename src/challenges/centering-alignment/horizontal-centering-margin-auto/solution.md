## Solution: Horizontal Centering with margin: auto

Let's learn to horizontally center a fixed-width `.box` inside its container using `margin: auto` in CSS.

### What changed

A single property was added to `.box` in `styles.css`:

```css
.box {
  width: 300px;
  margin: 0 auto; /* ← this line was added */
}
```

### Why it works

When a block element has a **fixed width**, the browser calculates the remaining horizontal space in the parent. Setting the left and right margins to `auto` tells the browser to distribute that leftover space **equally on both sides**, which places the element in the center.

The shorthand `margin: 0 auto` sets:
- **top/bottom** margins to `0`
- **left/right** margins to `auto`

### Key constraints

This technique only works when:
- The element is a **block-level** element (or `display: block`)
- The element has an **explicit width** smaller than its parent
- The parent has a defined width (or stretches to viewport)
