## Solution: Full Centering (Horizontal + Vertical)

Let's center an element perfectly in both dimensions by combining two flexbox properties on the parent container.

## Solution explanation

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

**Line 4:** `display: flex` creates a flex formatting context on the container.

**Line 5:** `align-items: center` positions `.box` at the midpoint of the cross axis (vertical).

**Line 6:** `justify-content: center` positions `.box` at the midpoint of the main axis (horizontal).

Together, these two properties place `.box` at the exact center of the `100vw × 100vh` container.

### Why flexbox beats other approaches

| Approach | Limitation |
| --- | --- |
| `margin: auto` | Horizontal only; requires a fixed width |
| `position: absolute` + `transform` | Requires `position: relative` on the parent |
| Flexbox (`align-items` + `justify-content`) | Works for any child size, no explicit dimensions needed |
