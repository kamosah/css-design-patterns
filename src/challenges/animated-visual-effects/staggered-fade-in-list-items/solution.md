# Solution: Staggered Fade-In List Items

## Explanation

Each `<li>` shares a single `fadeInUp` animation definition and only differs in its `animation-delay`.

```css
.stagger-list li {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-list li:nth-child(1) { animation-delay: 0s; }
.stagger-list li:nth-child(2) { animation-delay: 0.2s; }
.stagger-list li:nth-child(3) { animation-delay: 0.4s; }
.stagger-list li:nth-child(4) { animation-delay: 0.6s; }
.stagger-list li:nth-child(5) { animation-delay: 0.8s; }
```

- **`opacity: 0` on the base rule** sets the pre-animation state directly on the element, so items stay invisible during their delay period before the animation starts.
- **`animation-fill-mode: forwards`** locks each item in its `to` state (fully visible, at natural position) after it finishes animating — without it they'd snap back to invisible.
- **`:nth-child()` delays** are the entire stagger mechanism — one shared `@keyframes` block handles the motion, and only the delay offset changes per item.
- **`transform` + `opacity` together** give the effect depth: opacity creates the fade while `translateY` gives the impression of items rising into place. Both are GPU-composited, so the animation runs without triggering layout reflow.
