# Solution: Sticky Timeline Year Labels

`.timeline-container` is given a fixed `height: 500px` and `overflow-y: auto` to create a bounded scrollable area. The `overflow-y: auto` is load-bearing — without it the page body becomes the scroll ancestor and sticky elements pin to the viewport rather than the container.

`.sticky-year` uses `position: sticky; top: 0` to pin each year label at the top of the scrolling container. As you scroll into the next year's section, its `<h2>` naturally pushes the previous one off the top — no JavaScript needed. `background: white` prevents the events underneath from showing through, `margin: 0` removes the default heading margin that would otherwise create a gap below the stuck label, and `z-index: 1` ensures the label renders above the event rows.

`.event` receives `padding: 8px` for spacing and `border-bottom: 1px solid #ccc` to visually separate rows.
