## Solution: Text Clamping for Card Previews

Let's clamp a content card's description to two lines with an ellipsis to maintain a clean, preview-style layout.

## Solution explanation

- **Line 13** — `display: -webkit-box` enables a block container for clamping.
- **Line 14** — `-webkit-line-clamp: 2` limits the visible text to two lines.
- **Line 15** — `-webkit-box-orient: vertical` ensures vertical stacking of lines.
- **Line 16** — `overflow: hidden` cuts off any additional lines beyond the clamp.
