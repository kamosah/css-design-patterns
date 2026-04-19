# Solution: Glass Tooltip on Hover

## Explanation

The tooltip pattern combines absolute positioning with a CSS-only show/hide toggle driven by the parent's `:hover` state. The glass effect is layered on top with `backdrop-filter` and a semi-transparent background.

```css
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: 120%;
  left: 70%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #bbb;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
```

- **`position: relative` on `.tooltip-container`** establishes the containing block for the absolutely positioned tooltip. Without it, the tooltip would escape and position itself relative to the nearest positioned ancestor — likely the viewport.
- **`opacity: 0` + `visibility: hidden`** work together for a correct hide state. `opacity: 0` alone makes the tooltip invisible but it still intercepts pointer events, which can cause unexpected hover flicker. `visibility: hidden` removes it from event flow entirely. Only `opacity` is transitioned — `visibility` snaps, which is intentional: it becomes `visible` immediately on hover (so the fade-in works) and snaps back to `hidden` after the fade-out completes.
- **`backdrop-filter: blur(6px)`** requires the background to be partially transparent — `rgba(255, 255, 255, 0.2)` provides just enough white tint so the tooltip reads as a surface while still letting the scene blur through.
- **`white-space: nowrap`** prevents the tooltip text from wrapping to multiple lines, which would make the width depend on the container — undesirable for a floating tooltip that should fit its content.
