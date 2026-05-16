## Solution: Text Clamp Inside Nested Flexbox Layout

Let's clamp a user bio to two lines within a Flexbox-based card header while preserving avatar alignment.

## Solution explanation

- **Lines 13–17** — Style the avatar with a fixed size and `flex-shrink: 0` to prevent it from squishing as the sibling text block grows.
- **Lines 20–24** — Apply the `-webkit-line-clamp` bundle (`display: -webkit-box`, `-webkit-line-clamp: 2`, `-webkit-box-orient: vertical`, `overflow: hidden`) to cap the bio at two lines.
- **Line 25** — `line-height: 1.4` gives each line breathing room so the two visible lines have consistent spacing.
- **Line 26** — `flex: 1` lets the `.username` block expand to fill the remaining horizontal space next to the avatar, which also gives the clamping a defined width to work against.
