## Problem: Custom Radio Button Control

Try to replace the native radio button with a styled circular ring and center dot indicator using only CSS.

## Problem description

Given an HTML page containing two `.custom-radio` label wrappers, each wrapping an `input[type="radio"]` and a `.radio-mark` span, write CSS to:

- Hide the native `input[type="radio"]` element.
- Style `.radio-mark` as a **20×20px circle** with a `2px solid #666` border.
- Change `.radio-mark`'s `border-color` to `#4CAF50` when the input is `:checked`.
- Draw a **10×10px green dot** centered inside `.radio-mark` via `::after` when `:checked`.

## Goal

Write CSS rules so that each `.custom-radio` renders as a styled circular radio button with a green ring and filled center dot on selection — no JavaScript required.

## Constraints

- Use only CSS (no JavaScript).
- Hide the native input using `display: none`.
- `.radio-mark` must be `20px × 20px` with `border-radius: 50%` and `border: 2px solid #666`.
- Checked state `border-color` should be `#4CAF50`.
- The inner dot must be `10px × 10px`, `background-color: #4CAF50`, centered via `position: absolute` and `transform: translate(-50%, -50%)`.
- Use the adjacent sibling combinator (`+`) to target `.radio-mark` from `input:checked`.
