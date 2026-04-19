# Solution: Slide-In Sidebar Panel

## Explanation

The panel starts off-screen via `transform: translateX(-100%)` and the `slideIn` animation transitions it to its natural position.

```css
.sidebar-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  transform: translateX(-100%);
  animation: slideIn 0.5s ease-out forwards;
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
```

- **`transform: translateX(-100%)`** shifts the panel left by its own width, hiding it off-screen without affecting document flow.
- **`animation-fill-mode: forwards`** retains the `to` state after the animation ends — without it the panel would snap back off-screen.
- **`ease-out`** starts fast and decelerates toward the end, giving the panel a natural "settling" feel as it lands in position.
- **`transform`** animations are GPU-composited, so the slide runs at 60 fps with no reflow cost.
