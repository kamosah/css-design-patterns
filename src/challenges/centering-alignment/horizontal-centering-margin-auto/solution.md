## Solution: Horizontal Centering with margin: auto

Let's horizontally center a fixed-width block element inside its container using the `margin` property.

## Solution explanation

A single property was added to `.box` in `styles.css`:

```css
.box {
  width: 300px;
  margin: 0 auto; /* ← this line was added */
}
```

**Line 3:** `margin: 0 auto` sets top/bottom margins to `0` and left/right margins to `auto`. When a block element has a fixed width, the browser distributes the remaining horizontal space equally on both sides, placing the element in the center.

### Why it works

| Technique | Purpose |
| --- | --- |
| `margin: 0 auto` | Distributes leftover horizontal space equally on both sides |
| Fixed `width` on `.box` | Required — without it, the block stretches to fill the parent and there's no space to distribute |
| Block-level element | `auto` margins only apply to block elements, not inline or flex items |
