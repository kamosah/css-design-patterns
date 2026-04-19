# Glass Range Slider

Given an HTML page with a `.slider-container` and an `<input type="range" class="glass-slider">`, write CSS to style the slider track and thumb with a glassmorphic look using browser-specific pseudo-elements.

## Goal

Remove default range input styling and apply a semi-transparent blurred track and circular thumb. Add a hover/focus state that brightens the thumb.

## Constraints

- Use only CSS — no JavaScript
- `.glass-slider`: `-webkit-appearance: none`, `width: 100%`, `background: transparent`
- Track (webkit): `height: 8px`, `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(6px)`, `border-radius: 4px`
- Thumb (webkit): `-webkit-appearance: none`, `width: 20px`, `height: 20px`, `margin-top: -6px` to center, `background: rgba(255, 255, 255, 0.4)`, `backdrop-filter: blur(4px)`, `border-radius: 50%`
- On hover/focus: `background: rgba(255, 255, 255, 0.6)`
- Duplicate track and thumb rules using `::-moz-range-track` and `::-moz-range-thumb` for Firefox — these selectors cannot be grouped with webkit selectors
