## Solution: Media Object Alignment

Let's build a responsive media object layout that aligns an avatar and text side by side on desktop and stacks them centered on mobile using Flexbox and media queries.

## Solution explanation

- **Line 3** — `align-items: flex-start` aligns the avatar and text block by their top edges. Without this, the default `stretch` would force the image to fill the full container height.
- **Line 4** — `gap: 1rem` adds spacing between the image and the text without needing margins on either child.
- **Line 9** — `object-fit: cover` keeps the image's aspect ratio intact within its fixed 120×140px bounds.
- **Lines 13–14** — Inside the `@media (max-width: 480px)` query, `flex-direction: column` stacks the children vertically and `align-items: center` centers the avatar horizontally. `text-align: center` centers the heading and paragraph text within the `.content` div.
