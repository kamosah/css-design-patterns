# Solution: Liquid Button Morph Effect

## Explanation

The liquid sheen is built from a single `::before` pseudo-element that carries two blurred radial gradients, continuously rotating and translating inside the button's `overflow: hidden` clip.

```css
.liquid-button {
  position: relative;
  padding: 1rem 2rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
}

.liquid-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.5) 10%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.5) 15%, transparent 60%);
  background-size: 50% 50%;
  filter: blur(20px);
  pointer-events: none;
  animation: liquid 3s ease-in-out infinite;
}

@keyframes liquid {
  0%   { transform: translate(0, 0) rotate(0deg); }
  50%  { transform: translate(25%, 25%) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}
```

- **`width: 200%; height: 200%; top: -50%; left: -50%`** makes the pseudo-element surround the button on all sides, so the gradient blobs never clip hard against an edge as they rotate — they always stay within the `overflow: hidden` window.
- **`background-size: 50% 50%`** tiles the gradient pattern four times across the 200% pseudo-element, placing gradient blobs in each quadrant. As the element rotates and translates, different blobs move through the visible button area.
- **`filter: blur(20px)`** softens the radial gradients into smooth glowing orbs. The blur is applied to the pseudo-element before the `overflow: hidden` clip takes effect, so it feathers naturally at the button edge.
- **`pointer-events: none`** prevents the animated overlay from stealing mouse events that belong to the underlying `<button>` element.
