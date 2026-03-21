## Solution: Vertical Centering with Flexbox

Let's vertically center a child element inside a fixed-height container by applying flexbox to the parent.

## Solution explanation

Two properties were added to `.container` in `styles.css`:

```css
.container {
  height: 100vh;
  display: flex;       /* ← turns container into a flex parent */
  align-items: center; /* ← centers children on the cross axis */
  padding: 0 2rem;
}
```

**Line 3:** `display: flex` creates a flex formatting context. The main axis runs horizontally (left → right) by default, and the cross axis runs vertically (top → bottom).

**Line 4:** `align-items: center` positions all flex children at the midpoint of the cross axis — in this case, vertically centered within the full viewport height.

### Why it works

| Property | Axis controlled | Effect |
| --- | --- | --- |
| `display: flex` | — | Enables flex layout on the container |
| `align-items: center` | Cross axis (vertical by default) | Centers children vertically |
| `justify-content: center` | Main axis (horizontal by default) | Would center children horizontally (not needed here) |
