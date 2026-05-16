## Problem: Text Clamp Inside Nested Flexbox Layout

Clamp a user bio to two lines within a Flexbox card header while keeping the avatar and bio in alignment.

## Problem description

Inside a card, there is a header row with a circular avatar image and a bio text block placed side by side. The bio can be arbitrarily long, but you need to limit it to two visible lines so the card stays compact.

## Goal

Apply a two-line clamp to the `.username` element so it truncates with an ellipsis, and make it stretch to fill the remaining space beside the avatar.

## Constraints

- Use only CSS — no JavaScript or fixed heights.
- The avatar must not shrink regardless of the text length.
- The `.username` element must grow to fill available horizontal space.
