## Solution: Custom Radio Button Control

Let's create a custom radio button with a styled circular ring and center dot for selected state using only CSS.

## Solution explanation

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
| `display: none` on `input` | Removes the native control from layout; the `<label>` wrapper keeps it interactive |
| `input:checked + .radio-mark` | Adjacent sibling combinator — activates only when the hidden input is `:checked` |
| `position: relative` on `.radio-mark` | Creates a positioning context so `::after` can be placed absolutely inside it |
| `top: 50%` + `left: 50%` + `transform: translate(-50%, -50%)` | Centers the dot regardless of parent size — the standard pattern for absolutely positioned elements |
| `border-radius: 50%` | Turns any square element into a perfect circle |
