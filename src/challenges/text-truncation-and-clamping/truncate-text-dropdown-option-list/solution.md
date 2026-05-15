## Solution: Truncate Text in a Dropdown Option List

Let's truncate long dropdown option text to a single line with ellipsis, ensuring consistent option height.

## Solution explanation

- **Line 9** — `white-space: nowrap` prevents option text from wrapping to multiple lines.
- **Line 10** — `overflow: hidden` hides any text that exceeds the option container.
- **Line 11** — `text-overflow: ellipsis` displays an ellipsis to indicate that the text has been truncated.
- **Lines 12–13** — Add spacing and visual separation between options for a cleaner layout.
