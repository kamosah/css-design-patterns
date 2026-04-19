# Solution: Glass Toggle Switch

## Explanation

The toggle is driven entirely by a hidden checkbox and CSS sibling selectors. The DOM order — `input → track → thumb` — is load-bearing: the `+` combinator can only look forward, so swapping elements would break the selector chain.

```css
.switch {
  --switch-width: 60px;
  --switch-height: 30px;
  position: relative;
  display: inline-block;
  width: var(--switch-width);
  height: var(--switch-height);
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: var(--switch-height);
  transition: background 0.3s ease;
}

.switch-thumb {
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  width: calc(var(--switch-height) - 4px);
  height: calc(var(--switch-height) - 4px);
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
}

.toggle-checkbox:checked + .switch-track {
  background: rgba(255, 255, 255, 0.3);
}

.toggle-checkbox:checked + .switch-track + .switch-thumb {
  transform: translateY(-50%) translateX(calc(var(--switch-width) - var(--switch-height)));
  background: rgba(255, 255, 255, 0.6);
}
```

- **`opacity: 0; width: 0; height: 0`** on `.toggle-checkbox` hides the native input visually and collapses its dimensions while keeping it in the DOM — essential because the `:checked` pseudo-class only works on inputs that exist in the document flow.
- **`border-radius: var(--switch-height)`** on the track creates a perfect pill shape at any size: a radius equal to half the height rounds both ends fully. Using the variable means it automatically adapts if you change `--switch-height`.
- **`calc(var(--switch-width) - var(--switch-height))`** for the checked `translateX` — the thumb diameter is `--switch-height - 4px`, plus 2px margin on each side = `--switch-height`. So the thumb's travel distance from left edge to right edge is exactly `--switch-width - --switch-height`.
- **`.toggle-checkbox:checked + .switch-track + .switch-thumb`** chains two `+` combinators to skip over the track and reach the thumb. This only works in this exact DOM order — it is not possible to target a preceding sibling in CSS.
