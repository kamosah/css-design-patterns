# Solution: Glitch Text Animation

## Explanation

Three stacked layers — the original `<h1>` plus `::before` and `::after` — display the same text. The pseudo-elements are offset by colored shadows and animated with stepped keyframes to create flickering slices.

```css
.glitch {
  position: relative;
  font-size: 4rem;
  color: #fff;
  background: #000;
  display: inline-block;
  overflow: hidden;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  mix-blend-mode: screen;
}

.glitch::before {
  text-shadow: 2px 0 #f00;
  animation: glitchShift 2s steps(2, end) -0.5s infinite;
}

.glitch::after {
  text-shadow: -2px 0 #0ff;
  animation: glitchShift 2s steps(3, end) 0s infinite;
}

@keyframes glitchShift {
  0%   { transform: translateX(0);    clip-path: inset(0 0 80% 0); }
  20%  { transform: translateX(-5px); clip-path: inset(10% 0 60% 0); }
  40%  { transform: translateX(5px);  clip-path: inset(30% 0 50% 0); }
  60%  { transform: translateX(-2px); clip-path: inset(40% 0 30% 0); }
  80%  { transform: translateX(2px);  clip-path: inset(20% 0 70% 0); }
  100% { transform: translateX(0);    clip-path: inset(0 0 0 0); }
}
```

- **`content: attr(data-text)`** reads the `data-text` attribute into the pseudo-element, avoiding duplication of the label in CSS.
- **`steps(2, end)` vs `steps(3, end)`** give each layer a different jump rhythm — `::before` cuts between 2 keyframe positions per cycle while `::after` cuts between 3, so they're always out of phase and never cancel each other out.
- **`clip-path: inset(top right bottom left)`** crops each pseudo-element to a horizontal band of the text. Different bands at different moments make it appear as though separate scan-lines are tearing and shifting independently.
- **`mix-blend-mode: screen`** composites the red and cyan layers over the white base text. Where they overlap the base, the result brightens; the color separation only shows in the offset regions, keeping the unglitched text clean.
- **Negative `animation-delay: -0.5s`** on `::before` starts it mid-cycle on load, immediately desynchronising it from `::after` without waiting for the first iteration.
