## Solution: Accessible Toggle Switch Focus Ring

Learn how to add a visible custom focus ring to a toggle switch using the adjacent sibling combinator.

## Solution explanation

- **Visually hiding the input** — `position: absolute; opacity: 0; width: 0; height: 0` removes the checkbox from view while keeping it in the DOM for screen readers and keyboard navigation. Never use `display: none` or `visibility: hidden` for accessible hidden inputs, as those remove the element from tab order.

- **`.toggle-label` as the visual proxy** — Because the `<label>` is associated with the input via `for`/`id`, clicking the label toggles the checkbox. Making the label the visual element means all state changes (focus, checked) can be reflected via CSS.

- **Adjacent sibling combinator (`.toggle-input:focus + .toggle-label`)** — CSS state on the hidden input propagates to the label through `+`. This is the standard pattern for custom form controls: hide the native input, style the sibling.

- **`box-shadow` for the focus ring** — `box-shadow: 0 0 0 3px #2684FF` creates a solid-color ring that respects the element's `border-radius`, unlike `outline` which may clip or render inconsistently. Setting `outline: none` suppresses the browser default.

- **Knob movement via `left`** — The `::after` pseudo-element starts at `left: 3px` and moves to `left: 27px` when `:checked`, driven entirely by CSS with a smooth `transition`.
