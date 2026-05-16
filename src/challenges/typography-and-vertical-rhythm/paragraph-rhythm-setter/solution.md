## Solution: Paragraph Rhythm Setter

Let's define a CSS custom property for the rhythm unit and use it to set the line-height and bottom margin of paragraphs, ensuring uniform vertical flow.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property with a value of `1.5rem`.
- **Lines 5–7** — Set the base `font-size` on `body` for readability.
- **Lines 9–12** — Apply `line-height` and `margin-bottom` to `p` using the rhythm variable, ensuring each paragraph's text lines and spacing align to the vertical rhythm.
