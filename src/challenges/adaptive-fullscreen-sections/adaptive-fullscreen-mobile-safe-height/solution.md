## Solution: Adaptive Fullscreen Section With Mobile-Safe Height

Let's fill the viewport using dynamic height with a fallback and center the content.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–3** (`min-height: 100vh` then `min-height: 100dvh`): Sets `min-height` to `100vh` as a fallback for older browsers, then immediately overrides it with `100dvh` (dynamic viewport height) for browsers that support it. The cascade means supporting browsers get `dvh`, while others silently keep `vh` — no feature query needed.

**Lines 4–7**: Use Flexbox to center content both vertically and horizontally within the section.

```css
.fullscreen-section {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Fallback for browsers without `dvh` support |
| `min-height: 100dvh` | Accounts for dynamic mobile browser chrome (address bar appearing/hiding) |
| `display: flex` | Enables Flexbox alignment on children |
| `justify-content: center` | Centers content on the horizontal (main) axis |
| `align-items: center` | Centers content on the vertical (cross) axis |

### `vh` vs `dvh`

On mobile browsers, `100vh` is measured against the *largest* possible viewport (browser chrome hidden), so sections can be clipped when the address bar is visible. `100dvh` tracks the *actual* visible height in real time, eliminating that gap.
