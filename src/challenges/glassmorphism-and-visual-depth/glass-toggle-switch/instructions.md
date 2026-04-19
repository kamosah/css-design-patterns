# Glass Toggle Switch

Given HTML markup with a `<label class="switch">` containing a hidden checkbox, a `.switch-track` span, and a `.switch-thumb` span, write CSS to create a glassmorphic toggle switch that animates the thumb on check.

## Goal

Define size variables on `.switch`, style the track as a pill-shaped glass backdrop, style the thumb as a circular handle, and use the adjacent sibling selector to slide the thumb and brighten its background when the checkbox is checked.

## Constraints

- Use only CSS — no JavaScript
- Define `--switch-width: 60px` and `--switch-height: 30px` on `.switch`
- `.toggle-checkbox`: `position: absolute; opacity: 0; width: 0; height: 0` to hide without removing from DOM
- `.switch-track`: `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(8px)`, `border-radius: var(--switch-height)`, `transition: background 0.3s ease`
- `.switch-thumb`: `background: rgba(255, 255, 255, 0.4)`, `backdrop-filter: blur(4px)`, `border-radius: 50%`, `transition: transform 0.3s ease, background 0.3s ease`
- Checked thumb: use `.toggle-checkbox:checked + .switch-track + .switch-thumb` to apply `transform: translateY(-50%) translateX(calc(var(--switch-width) - var(--switch-height)))` and `background: rgba(255, 255, 255, 0.6)`
