## Horizontal Centering with `margin: auto`

The classic way to horizontally center a block element is by setting its **left and right margins to `auto`**.

### How it works

When you set `margin: 0 auto` on a block element with an explicit `width`, the browser distributes the remaining horizontal space equally on both sides.

```css
.box {
  width: 300px;
  margin: 0 auto; /* shorthand for: margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto */
}
```

### Requirements

- The element **must be a block-level element** (or `display: block`)
- The element **must have an explicit width** less than its container
- The container must have a defined width (or be the viewport)

### Your Task

Center the `.box` element horizontally inside `.container` using only the `margin` property.
