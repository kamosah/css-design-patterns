## Solution: Accessible Text Truncation with Tooltip Support

Let's truncate long text with CSS and provide full visibility on hover using an accessible tooltip.

## Solution explanation

- **`white-space: nowrap`** — Forces the text to stay on a single line, preventing it from wrapping to the next.
- **`overflow: hidden`** — Hides any text content that extends beyond the container's fixed width.
- **`text-overflow: ellipsis`** — Appends `…` at the point where the text is clipped, signalling to the user that content has been truncated.

The native `title` attribute on the element acts as the accessible tooltip, exposing the full text to users on hover without any JavaScript.
