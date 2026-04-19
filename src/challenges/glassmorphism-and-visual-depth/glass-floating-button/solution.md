# Solution: Glass Floating Button

## Explanation

The button is pinned to the bottom center with `position: fixed` and the `left: 50%` + `translateX(-50%)` centering trick, then styled with glassmorphism properties.

```css
.glass-btn {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 24px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}
```

- **`left: 50%; transform: translateX(-50%)`** centers a `position: fixed` element horizontally without knowing its width — `left: 50%` places the left edge at the midpoint, then `translateX(-50%)` pulls it back by half its own width. `margin: 0 auto` does not work on fixed elements.
- **`backdrop-filter: blur(8px)`** blurs whatever is behind the button through its semi-transparent background. The `rgba(255,255,255,0.2)` background must have alpha < 1 for the blur to show through.
- **`transition: background 0.3s ease, box-shadow 0.3s ease`** only transitions the two properties that change on hover, keeping the animation targeted and avoiding unintended transitions on `transform` during other interactions.
- The hover shadow goes from `rgba(0,0,0,0.1)` to `rgba(0,0,0,0.4)` — a strong opacity jump that gives the impression the button is lifting toward the user without any `transform: translateY` movement.
