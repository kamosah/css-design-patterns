## Solution: Fullscreen Section with Centered Logo and Subtext

Let's vertically stack and center a logo and subtext with spacing in a fullscreen section.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–7** (`.fullscreen-section`): Uses `display: flex` with `flex-direction: column` to stack children vertically. `justify-content: center` and `align-items: center` together center the stack both vertically and horizontally within the full viewport height.

**Lines 8–10** (`.logo`): `margin-bottom: 24px` adds exactly 24px of spacing between the logo and the subtext below it.

**Lines 11–14** (`.subtext`): Sets a readable font size and a neutral text color.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  margin-bottom: 24px;
}
.subtext {
  font-size: 1.25rem;
  color: #333;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section fills at least the full viewport height |
| `display: flex` + `flex-direction: column` | Stacks children vertically |
| `justify-content: center` | Centers the column of children along the vertical (main) axis |
| `align-items: center` | Centers children horizontally along the cross axis |
| `margin-bottom: 24px` on `.logo` | Creates exactly 24px gap between logo and subtext |
