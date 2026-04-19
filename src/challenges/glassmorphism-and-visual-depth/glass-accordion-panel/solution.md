# Solution: Glass Accordion Panel

## Explanation

This accordion is built on the hidden-checkbox pattern: an `<input type="checkbox">` stays invisible in the DOM, but its `:checked` state drives CSS via the adjacent sibling combinator.

```css
.accordion {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.accordion-item input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.accordion-header {
  display: block;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: max-height 0.4s ease;
  padding: 0 1rem;
}

.accordion-item input:checked + .accordion-header + .accordion-content {
  max-height: 200px;
  padding: 1rem;
}
```

- **Hidden checkbox**: `position: absolute; opacity: 0; pointer-events: none` removes it visually and from pointer interaction while keeping it in the DOM so `:checked` still fires when the associated `<label>` is clicked.
- **Double adjacent sibling**: `input:checked + .accordion-header + .accordion-content` traverses two forward siblings in one selector. CSS can only move *forward* through siblings, which is why DOM order (input → label → content) is load-bearing — reversing it breaks the selector.
- **`max-height` transition**: CSS cannot animate `height: auto`, so the pattern uses `max-height: 0` (collapsed) and a fixed `max-height` (expanded). The browser interpolates between the two values for a smooth slide. The tradeoff: the expanded value must be at least as tall as the content — if content is taller it clips silently.
- **`overflow: hidden`**: Required so that content above `max-height: 0` is clipped. Without it the content renders outside the collapsed panel immediately, bypassing the animation.
