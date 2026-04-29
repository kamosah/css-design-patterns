# Solution: Content-First Responsive Grid

`.grid` is set to use CSS Grid with four named areas stacked vertically in one column. `grid-template-areas` lists them in mobile-priority order — `hero`, `testimonials`, `features`, `footer` — so the most persuasive content (testimonials) surfaces immediately after the hero. `grid-template-columns: 1fr` creates a single full-width column, and `grid-template-rows: auto` lets each section size to its content. The 20px `gap` separates all tracks.

Each section is assigned its named area with `grid-area`, which places the element in the matching slot regardless of DOM source order. Background colours and `padding: 1rem` add visible structure to each section.

At `min-width: 1024px`, the layout switches to two columns. `grid-template-columns: 1fr 1fr` creates two equal tracks, and `grid-template-areas` is redefined: hero spans both columns on the first row, features and testimonials sit side-by-side in the middle row, and footer spans both columns at the bottom.

At `max-width: 1023px`, the `order` property reinforces the mobile content priority: `testimonials` receives `order: 2` so it renders immediately after hero, `features` gets `order: 3`, and `footer` gets `order: 4`.
