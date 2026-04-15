## Solution: Fullscreen Section with Content Alignment

Let's pin elements to each corner of a fullscreen section that resizes with the viewport.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–4** (`.fullscreen-section`): `min-height: 100vh` makes the section fill the full viewport height. `position: relative` establishes a positioning context so that absolutely-positioned children are anchored to the section, not the viewport.

**Lines 5–10** (shared corner styles): `position: absolute` removes each div from normal flow and positions it relative to `.fullscreen-section`. `padding: 16px` adds inner spacing. `background: rgba(0,0,0,0.1)` gives a subtle semi-transparent background. `font-weight: bold` makes the labels readable.

**Lines 11–13** (`.top-left`): `top: 0; left: 0` pins the element to the top-left corner.

**Lines 14–16** (`.top-right`): `top: 0; right: 0` pins the element to the top-right corner.

**Lines 17–19** (`.bottom-left`): `bottom: 0; left: 0` pins the element to the bottom-left corner.

**Lines 20–22** (`.bottom-right`): `bottom: 0; right: 0` pins the element to the bottom-right corner.

```css
.fullscreen-section {
  min-height: 100vh;
  position: relative;
}
.top-left, .top-right, .bottom-left, .bottom-right {
  position: absolute;
  padding: 16px;
  background: rgba(0,0,0,0.1);
  font-weight: bold;
}
.top-left {
  top: 0; left: 0;
}
.top-right {
  top: 0; right: 0;
}
.bottom-left {
  bottom: 0; left: 0;
}
.bottom-right {
  bottom: 0; right: 0;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Ensures the section always covers the full viewport height |
| `position: relative` on section | Makes it the containing block for absolutely-positioned children |
| `position: absolute` on divs | Removes them from flow so they can be placed at exact coordinates |
| `top`/`right`/`bottom`/`left: 0` | Snaps each element flush against its respective corner |
