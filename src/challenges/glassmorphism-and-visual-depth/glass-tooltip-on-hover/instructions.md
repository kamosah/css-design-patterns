# Glass Tooltip on Hover

Given an HTML structure with a `.tooltip-container` wrapping a `.tooltip-trigger` button and a `.tooltip` div, write CSS so that the tooltip is hidden by default and fades in with a glassmorphism style when the user hovers over the container.

## Goal

Style `.tooltip-container` as a positioning context, style `.tooltip` with the glass effect and hide it by default, then use `.tooltip-container:hover .tooltip` to reveal it on hover.

## Constraints

- Use only CSS — no JavaScript
- `.tooltip-container`: `position: relative`, `display: inline-block`
- `.tooltip`: `position: absolute`, `opacity: 0`, `visibility: hidden` by default; `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(6px)`, `border-radius: 8px`
- Use `transition: opacity 0.3s ease` for a smooth fade
- On hover, set `opacity: 1` and `visibility: visible` — both are required: `visibility: hidden` removes the tooltip from pointer-event flow while invisible, preventing accidental interactions
