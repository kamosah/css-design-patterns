# Glass Tabbed Interface

Given HTML markup for a `.tabs` container with three hidden radio inputs, a `.tab-labels` div holding three `<label>` elements, and a `.tab-content` div holding three content panels, write CSS to build a glassmorphic tabbed interface — no JavaScript allowed.

## Goal

1. Hide the native radio inputs while keeping them focusable in the DOM.
2. Style the tab labels as glass panels with a subtle bottom border that highlights the active tab.
3. Show only the content panel that corresponds to the currently checked radio input.

## Constraints

- Use only CSS (no JavaScript)
- Hide inputs with `position: absolute; opacity: 0; pointer-events: none`
- Tab labels: `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(8px)`, `padding: 0.75rem 1.5rem`, `border-radius: 8px`, transparent `border-bottom` by default
- Active tab: `color: #bbb`, `border-bottom-color: #bbb`
- Content panels: hidden with `display: none; opacity: 0` by default; active panel uses `display: block; opacity: 1`
- Use the general sibling combinator (`~`) to reach `.tab-labels` and `.tab-content` from each `input:checked` rule
