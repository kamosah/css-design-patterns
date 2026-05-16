## Solution: Multi-Line Text Clamp Without -webkit-line-clamp

Let's clamp multi-line text to three lines without using `-webkit-line-clamp`, ensuring cross-browser compatibility with pure CSS.

## Solution explanation

- **Lines 6–7** — `line-height: 1.4em` sets the height of each line, and `max-height: 4.6em` caps the card at just over three lines (`3 × 1.4em = 4.2em`), with a small buffer before the fourth line appears.
- **Line 8** — `overflow: hidden` clips any content that exceeds the `max-height`, hiding the remaining text.
- **Lines 12–17** — A `::after` pseudo-element on `.fallback-truncate` is absolutely positioned at the bottom-right of the card (using the card's `position: relative` as its containing block). `content: '...'` renders the ellipsis and `background: white` paints over any partial text behind it.
