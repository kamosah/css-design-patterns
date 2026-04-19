# Solution: Shimmer Loading Placeholder

## Explanation

The shimmer effect is built from two layers: a static grey card and a `::before` pseudo-element that carries the animated gradient.

```css
.shimmer-card {
  width: 300px;
  height: 200px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
}

.shimmer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

- **`background-size: 200% 100%`** makes the gradient twice as wide as the element, so the gradient can slide fully into view from the left and fully out to the right over one cycle.
- **`background-position` from `-200% 0` to `200% 0`** pans that oversized gradient across the element — at `0%` the light band is fully off the left edge, and at `100%` it is fully off the right edge.
- **`overflow: hidden`** on the card clips the pseudo-element as it travels, preventing the shimmer from bleeding outside the card boundary.
- **`::before` with `content: ''`** layers the gradient on top of the grey background without adding any DOM nodes, keeping the HTML minimal and the effect purely decorative.
