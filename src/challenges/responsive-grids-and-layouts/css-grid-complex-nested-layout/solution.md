# Solution: CSS Grid Complex Nested Layout

The parent grid starts with `grid-template-columns: 1fr` and four stacked `grid-template-areas` for mobile. At 600px it gains a second column (`1fr 3fr`) and the areas rearrange so header and footer span both columns while sidebar and content sit side by side. At 900px the content column widens to `4fr`.

The `.content` child grid uses `display: grid` with its own `grid-template-areas` and `gap: 10px`. On mobile and tablet it stacks hero, features, panel1, and panel2 vertically. On desktop, the template changes to a two-column layout where `hero` spans both columns and `features` spans rows 2–3 of the first column (`2fr`) while `panel1` and `panel2` occupy rows 2–3 of the second column (`1fr`) — achieved by repeating `features` in consecutive area rows.

`display: contents` on `.data-panels` removes the wrapper's layout box entirely. Its children (`panel1`, `panel2`) are promoted into the child grid as direct participants, letting them be placed with `grid-area` as if `.data-panels` never existed. Without this, the panels would be inside their own anonymous box and could not be positioned by the parent grid's named areas.
