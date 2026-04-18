# Solution: Fade-In Notification Banner

## Explanation

Setting `opacity: 0` on the element prevents a flash before the animation begins. The `animation` shorthand drives it from invisible to visible over 5 seconds, and `forwards` keeps it at full opacity after the animation completes.

```css
.notification-banner {
  opacity: 0;
  animation: fadeIn 5s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

- **`opacity: 0`** on the element ensures it is invisible before the animation clock starts, preventing a brief flash at full opacity.
- **`animation: fadeIn 5s ease forwards`** runs the `fadeIn` keyframe sequence over 5 seconds with an `ease` curve (slow start, accelerates, then slows to a stop).
- **`forwards`** fill mode retains the final keyframe state (`opacity: 1`) after the animation ends — without it, the element would snap back to `opacity: 0`.
