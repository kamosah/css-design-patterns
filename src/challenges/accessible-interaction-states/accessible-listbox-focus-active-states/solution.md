## Solution: Accessible Listbox with Visible Focus and Active States

Style listbox options with clear focus and selection states for accessibility.

## Solution explanation

- **`.listbox`** — Uses `display: flex` with `flex-direction: column` and a `4px` gap to stack options vertically. A light border, border radius, and padding give the container visual separation from the page.

- **`.listbox-option` base styles** — Sets padding, rounded corners, `cursor: pointer`, and `outline: none` to suppress the browser default. `background-color: transparent` and a `transition` on background color prepare the element for smooth state changes.

- **`.listbox-option:hover`** — A soft grey background gives mouse users feedback without conflating hover with focus or selection states.

- **`.listbox-option[aria-selected="true"]`** — Fills the option with `#2684FF` and switches text to `white`. Using the ARIA attribute as the CSS selector directly ties the visual state to the accessibility state — they can never get out of sync.

- **`.listbox-option:focus`** — Uses `box-shadow: 0 0 0 3px #2684FF, 0 0 0 5px white` instead of `outline`. The dual-ring technique (blue inner, white outer) makes the ring visible against both the white container background and the blue selected background, without needing to know the background color in advance. `position: relative` and `z-index: 1` ensure the shadow paints above adjacent items.

- **`.listbox-option[aria-selected="true"]:focus`** — Repeats the same `box-shadow` to guarantee the focus ring is preserved when both states are active simultaneously.
