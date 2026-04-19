# Solution: Circular Page Reveal Transition

## Explanation

A dark mask covers the entire viewport and then animates its `clip-path` from an oversized circle to a zero-radius point, revealing the content beneath.

```css
.page-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #111;
  clip-path: circle(150% at 50% 50%);
  animation: reveal 1s ease-out 0.3s forwards;
}

.page-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  color: #333;
}

@keyframes reveal {
  0%   { clip-path: circle(150% at 50% 50%); }
  100% { clip-path: circle(0% at 50% 50%); }
}
```

- **`clip-path: circle(150% at 50% 50%)`** — the radius percentage is computed relative to the element's reference box diagonal, so `150%` guarantees the circle extends past every corner regardless of viewport aspect ratio.
- **Animating `clip-path`** is GPU-composited in modern browsers, producing a smooth transition without triggering layout or paint.
- **`animation-fill-mode: forwards`** — retains the final keyframe state (`circle(0%)`) after the animation ends. Without it, the mask would snap back and re-cover the content.
- **`z-index: 1` on `.page-content`** — ensures content sits above the mask's default stacking context so it remains interactive and visible once revealed.
- **`0.3s` delay** — gives the browser a brief moment to render the initial page before the animation starts, preventing a flash of unstyled content.
