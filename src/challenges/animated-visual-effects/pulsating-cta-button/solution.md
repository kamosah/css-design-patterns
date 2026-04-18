# Solution: Pulsating Call-to-Action Button

## Explanation

The button scales up to 110% at the midpoint of each cycle and returns to its original size, creating a gentle breathing effect that draws the eye.

```css
.cta-button {
  padding: 1rem 2rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

- **`transform: scale()`** grows and shrinks the button without affecting surrounding layout — unlike animating `width` or `padding`, `transform` is GPU-composited and causes no reflow.
- **Three keyframe stops** (`0% → 50% → 100%`) produce a smooth in-and-out pulse rather than a one-way grow-then-snap-back.
- **`ease-in-out`** makes each half of the pulse decelerate at both ends, giving it a natural "breathing" feel.
- **`infinite`** keeps the animation looping without JavaScript.
