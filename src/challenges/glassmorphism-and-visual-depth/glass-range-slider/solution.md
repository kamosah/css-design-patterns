# Solution: Glass Range Slider

## Explanation

Styling a range input requires vendor-specific pseudo-elements for the track and thumb. These cannot be grouped — a browser that doesn't recognize one selector in a group will discard the entire rule.

```css
.glass-slider {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
}

.glass-slider::-webkit-slider-runnable-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 4px;
}

.glass-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  margin-top: -6px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: background 0.3s ease;
}

.glass-slider::-webkit-slider-thumb:hover,
.glass-slider::-webkit-slider-thumb:focus {
  background: rgba(255, 255, 255, 0.6);
}

.glass-slider::-moz-range-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 4px;
}

.glass-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease;
  border: none;
}

.glass-slider::-moz-range-thumb:hover,
.glass-slider::-moz-range-thumb:focus {
  background: rgba(255, 255, 255, 0.6);
}
```

- **`-webkit-appearance: none`** on both `.glass-slider` and the thumb resets the browser's native range styling — without it, custom background and border-radius on the thumb are ignored.
- **`margin-top: -6px` on the webkit thumb** manually centers the 20px thumb over the 8px track — webkit doesn't auto-center the thumb vertically. The formula is `-(thumb-height - track-height) / 2 = -(20 - 8) / 2 = -6px`.
- **Webkit and Firefox rules cannot be grouped** — if you write `.glass-slider::-webkit-slider-thumb, .glass-slider::-moz-range-thumb { ... }`, Firefox will discard the entire rule because it doesn't recognize the webkit selector, and vice versa for Chrome.
- **`border: none` on the Firefox thumb** removes the default 2px border Firefox adds around range thumbs, which would otherwise shrink the effective thumb size and misalign it with the custom dimensions.
