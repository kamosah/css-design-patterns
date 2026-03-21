## Solution: Custom Radio Button Control

Let's create a custom radio button with a styled circular ring and center dot for selected state using only CSS.

### What changed

Six rule blocks were added to `styles.css`:

```css
/* Lines 1–6: Layout for the label wrapper */
.custom-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
}

/* Lines 8–10: Hide the native radio — it still receives clicks via the <label> */
.custom-radio input {
  display: none;
}

/* Lines 12–19: The decorative circle */
.custom-radio .radio-mark {
  width: 20px;
  height: 20px;
  border: 2px solid #666;
  border-radius: 50%;
  position: relative;
  margin-right: 0.5rem;
}

/* Lines 21–23: Green ring when selected */
.custom-radio input:checked + .radio-mark {
  border-color: #4CAF50;
}

/* Lines 25–35: Centered inner dot via ::after */
.custom-radio input:checked + .radio-mark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #4CAF50;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
```

### Why it works

| Technique | Purpose |
| --- | --- |
| `display: none` on `input` | Removes the native control visually and from layout; the `<label>` keeps it interactive |
| `input:checked + .radio-mark` | Adjacent sibling combinator — fires only when the hidden input is in `:checked` state |
| `position: relative` on `.radio-mark` | Creates a positioning context for the `::after` pseudo-element |
| `top: 50%` + `left: 50%` + `transform: translate(-50%, -50%)` | Centers the dot regardless of parent size — universal pattern for absolutely positioned elements |
| `border-radius: 50%` | Turns any square element into a perfect circle |

### Why `display: none` instead of `opacity: 0`

`display: none` removes the element from the layout entirely, so it doesn't occupy space or create invisible click targets. The `<label>` wrapper takes over all interactivity, so the input doesn't need to be visible or hittable.

### Why the dot uses `::after` instead of a child element

Pseudo-elements keep the HTML clean — no extra `<span>` needed. The dot only exists in CSS and is toggled via `:checked`, making the entire interaction pure CSS with zero JavaScript.
