## Solution: Accessible Menu Button with Keyboard Focus Highlight

Show a custom focus outline on menu buttons and items only during keyboard navigation.

## Solution explanation

- **`.menu-btn` base styles** — Sets a white background, dark text, subtle border, rounded corners, and `outline: none` to suppress the browser default. `cursor: pointer` and a border transition polish the interaction feel.

- **`.menu-btn:focus-visible`** — Applies a `3px solid #2684FF` outline with a 2px offset. Because `:focus-visible` fires only when the browser determines the user is navigating by keyboard (Tab, arrow keys), mouse clicks won't trigger this style.

- **`.menu-list`** — Removes list markers, adds a top margin, inner padding, border radius, and a soft box-shadow to lift the dropdown visually from the page.

- **`.menu-item` base styles** — Full `width: 100%`, `background: none`, `border: none`, left-aligned text, and `outline: none` make each item feel like a native menu row rather than a browser-default button.

- **`.menu-item:focus-visible`** — Same blue outline as the trigger, plus a light blue `background` to reinforce which item is active for keyboard users.

- **`.menu-item:hover`** — A soft grey background provides mouse-user feedback without conflating hover and keyboard focus states.
