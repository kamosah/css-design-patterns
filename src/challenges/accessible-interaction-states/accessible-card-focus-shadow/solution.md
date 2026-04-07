## Solution: Accessible Card Focus Shadow

Let's add a prominent custom focus shadow to a clickable card for better accessibility.

## Solution explanation

- **Lines 1–3** — `body` background is set to `#f4f6fa` (light gray) so the white card has visible contrast.
- **Lines 5–18** — `.accessible-card` styles the card as a block-level link with padding, white background, rounded `border-radius: 14px`, readable font size, and a soft ambient `box-shadow`. `outline: none` and `text-decoration: none` remove default link chrome. `transition: box-shadow 0.2s` smooths the focus ring appearance.
- **Lines 20–23** — On `:focus`, a layered `box-shadow` adds the thick blue ring (`0 0 0 4px rgba(38, 132, 255, 0.7)`) in front of the base shadow, keeping the card's ambient depth while making keyboard focus unmistakable.
