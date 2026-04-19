# Solution: Glass Card Component

## Explanation

The glassmorphism effect is produced by two cooperating declarations on `.glass-card`: a semi-transparent background that lets the scene show through, and `backdrop-filter: blur()` that softens whatever is visible behind it.

```css
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 300px;
  text-align: center;
}
```

- **`backdrop-filter: blur(10px)`** blurs the content rendered behind the card in the compositing stack. The card's `background` must have alpha < 1 for this to be visible — a fully opaque card would simply hide everything behind it.
- **`rgba(255, 255, 255, 0.2)`** provides just enough white tint to read as a surface without making the card opaque, preserving the gradient bleed-through that defines the glass look.
- **`border: 1px solid rgba(255, 255, 255, 0.3)`** adds a subtle bright edge that simulates the way real frosted glass catches light at its rim — it's a small touch that makes the depth feel physical.
- **`max-width: 300px`** instead of a fixed `width` lets the card shrink naturally on narrow viewports, keeping it responsive without media queries.
