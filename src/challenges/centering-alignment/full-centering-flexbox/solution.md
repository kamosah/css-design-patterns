## Solution: Full Centering (Both Axes) with Flexbox

Let's use Flexbox properties to center a child element perfectly both horizontally and vertically within its container.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 6** (`justify-content: center;`): The flex container centers items along the main (horizontal) axis.

**Line 7** (`align-items: center;`): It centers items along the cross (vertical) axis, achieving full centering.

```css
.container {
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  display: flex;
  justify-content: center; /* ← centers horizontally */
  align-items: center;     /* ← centers vertically */
}

.box {
  width: 200px;
  height: 100px;
  border: 1px solid #000;
  background: lightcoral;
}
```

### Why it works

| Property | Axis | Effect |
| --- | --- | --- |
| `justify-content: center` | Main axis (horizontal) | Centers `.box` left-to-right within the 400px container |
| `align-items: center` | Cross axis (vertical) | Centers `.box` top-to-bottom within the 200px container |
