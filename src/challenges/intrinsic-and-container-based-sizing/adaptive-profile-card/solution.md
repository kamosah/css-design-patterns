# Solution: Adaptive Profile Card

## Solution explanation

**Lines 1–6:** `.profile-wrapper` sets up a named container called `profile` with `container-type: inline-size`, a `max-width` of `600px`, and centers itself using `margin: 2rem auto`.

**Lines 8–16:** `.profile-card` is styled as a flex column with a small gap (`0.5rem`), padding (`1rem`), a light border, rounded corners (`6px`), and a light gray background.

**Lines 18–23:** `.avatar` inside the card takes full width, keeps a `1:1` aspect ratio, uses `object-fit: cover` to avoid distortion, and has slightly rounded corners (`4px`).

**Lines 25–28:** `.info h3` has no margin and a base font size of `1rem`.

**Lines 30–34:** `.info p` has no margin, a slightly smaller font size (`0.875rem`), and muted gray text (`#555`).

**Lines 36–48:** For container width between `250px` and `499px`:
- `.profile-card` switches to row layout with centered alignment and a gap of `0.75rem`.
- `.avatar` shrinks to a fixed width of `80px`.
- `.info h3` font size reduces to `0.875rem`.

**Lines 50–63:** For container width `500px` and above:
- `.profile-card` uses a row layout with more generous spacing (`1.5rem`) and increased padding (`1.5rem`).
- `.avatar` grows to `100px`.
- `.info h3` font size increases to `1.25rem`.
