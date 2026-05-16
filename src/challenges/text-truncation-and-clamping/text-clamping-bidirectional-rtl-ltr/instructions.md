## Problem: Text Clamping in Bidirectional (RTL and LTR) Layouts

Clamp text to two lines with ellipsis in both LTR and RTL cards, maintaining proper directionality and layout integrity.

## Problem description

Create two card components — one for left-to-right content (English) and one for right-to-left content (Arabic). Each card must clamp its description text to two lines and display an ellipsis when the text overflows.

## Goal

Apply a two-line clamp to the `.desc` element and use `.ltr` and `.rtl` classes to set the appropriate text direction and alignment for each card.

## Constraints

- Use only HTML and CSS — no JavaScript.
- Both cards must use the same `.desc` class for clamping.
- Direction and alignment must be set on the card wrapper, not the text element directly.
