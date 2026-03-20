## Solution: Full Centering (Horizontal + Vertical)

Let's learn to center an element perfectly in both dimensions using two flexbox properties together.

### What changed

Two properties were added to `.container` in `styles.css`:

```css
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;      /* ← centers vertically (cross axis) */
  justify-content: center;  /* ← centers horizontally (main axis) */
}
```

### Why it works

Flexbox separates control of the two axes:

- `align-items: center` — positions children at the midpoint of the **cross axis** (vertical)
- `justify-content: center` — positions children at the midpoint of the **main axis** (horizontal)

Using both together achieves perfect centered placement regardless of the child's size. The container fills the full viewport (`100vw` × `100vh`), so the child ends up dead-center on the screen.

### Why this beats other approaches

| Approach | Limitation |
|---|---|
| `margin: auto` | Only horizontal; needs fixed width |
| `position: absolute` + transforms | Requires `position: relative` on parent |
| Flexbox (`align-items` + `justify-content`) | Works for any child size, no width needed |
