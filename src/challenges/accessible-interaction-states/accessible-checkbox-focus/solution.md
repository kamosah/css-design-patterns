# Solution: Accessible Checkbox Focus Ring

## Explanation

### Lines 1–6: `.accessible-checkbox`

Sets a reasonable checkbox size (`18px × 18px`) and adds a small margin for spacing. `outline: none` removes the browser's default focus outline so it doesn't conflict with the custom ring.

### Lines 8–11: `.accessible-checkbox:focus`

The `:focus` selector applies whenever the checkbox receives focus — whether via keyboard (Tab) or mouse. `outline: 2px solid #2684FF` draws the custom blue focus ring, and `outline-offset: 2px` pushes it 2px outside the checkbox boundary, making it clearly visible without overlapping the control itself.
