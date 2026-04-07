## Solution: Baseline Alignment of Image and Text

Learn to align an image and a paragraph so their baselines match.

## Solution explanation

- **Line 2** — `vertical-align: baseline` on `img` aligns the image's bottom edge to the text baseline of the current line box — the same imaginary line that letters rest on. This is actually the browser default for inline replaced elements, but stating it explicitly makes the intent clear.
- **Line 6** — `display: inline-block` on `p` brings the paragraph back into the inline formatting context. A block `<p>` would start on a new line and ignore `vertical-align` entirely; as an `inline-block`, it flows alongside the image and its last line of text aligns to the shared baseline.
