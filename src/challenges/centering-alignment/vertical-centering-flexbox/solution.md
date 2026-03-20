## Solution: Vertical Centering with Flexbox

Let's learn to vertically center a child element inside a fixed-height container using flexbox.

### What changed

Two properties were added to `.container` in `styles.css`:

```css
.container {
  height: 300px;
  display: flex;       /* ← turns container into a flex parent */
  align-items: center; /* ← centers children on the cross axis */
  padding: 0 2rem;
}
```

### Why it works

By default, the **main axis** of a flex container runs horizontally (left → right), and the **cross axis** runs vertically (top → bottom).

`align-items: center` positions children along the **cross axis** — in this case vertically — centering them within the container's full height.

Without flexbox, achieving vertical centering required hacks like absolute positioning or line-height tricks. Flexbox makes it a single property.

### Key takeaway

| Property | Axis controlled |
|---|---|
| `justify-content` | Main axis (horizontal by default) |
| `align-items` | Cross axis (vertical by default) |
