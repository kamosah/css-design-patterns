## Solution: Custom Email Input with Inline Validation Icons

Let's create a styled email input that shows a check or cross icon for valid or invalid states using only CSS and relational selectors.

## Solution explanation

- **Lines 1–7** — `.input-wrapper` declares three component-level CSS variables (`--valid-color`, `--invalid-color`, `--transition-duration`) and sets `position: relative` so the `::after` icon can be absolutely positioned inside it. A fixed `width: 300px` constrains the field layout.
- **Lines 9–17** — `.validation-input` spans the full wrapper width at `2rem` height. `padding-right: 2rem` reserves space for the icon so typed text never slides under it. `outline: none` removes the browser default focus ring, and `transition: border-color` wires up the smooth state-change feedback.
- **Lines 19–29** — `.input-wrapper::after` creates the icon slot. It is absolutely positioned at the right of the field and starts invisible (`opacity: 0`) and slightly off to the right (`translateX(10px)`). `pointer-events: none` keeps it from intercepting clicks on the input. Transitions on `opacity` and `transform` drive the slide-in animation.
- **Lines 31–34** — The `:has(input:valid:not(:placeholder-shown))` selector targets the wrapper whenever its child input passes email validation and the placeholder is hidden (i.e., the user has typed something). This descendent selector updates `.validation-input`'s `border-color` to `--valid-color` — a green border signals success.
- **Lines 36–41** — The matching `::after` rule on the valid wrapper sets `content: '✔'`, colors it green, reveals it (`opacity: 1`), and slides it to its resting position (`translateX(0)`), all animated by the transitions defined in the base rule.
- **Lines 43–46** — The `:has(input:invalid:not(:placeholder-shown))` mirror handles a filled but malformed email, turning the border red (`--invalid-color`).
- **Lines 48–53** — The invalid `::after` rule shows the `✖` icon in red with the same reveal animation, giving the user immediate visual feedback that the value needs correction.
