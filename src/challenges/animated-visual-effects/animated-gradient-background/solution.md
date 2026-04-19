# Solution: Animated Gradient Background

## Explanation

The gradient is painted on a canvas much larger than the viewport (`400% 400%`), then the animation slides `background-position` back and forth, making different portions of that large gradient visible over time.

```css
.gradient-bg {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #a6c1ee, #fdcbf1);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

- **`background-size: 400% 400%`** makes the gradient four times larger than its container, giving `background-position` room to travel and reveal different color bands.
- **Animating `background-position`** is the key trick — rather than re-computing color stops each frame, the browser simply pans a pre-rendered gradient tile, which is highly efficient.
- **Three keyframe stops** (`0% → 50% → 100%`) mirror the start and end positions so the loop is seamless with no visible jump.
- **`-45deg` angle** gives the gradient a diagonal sweep, making the motion feel more dynamic than a purely horizontal or vertical shift.
