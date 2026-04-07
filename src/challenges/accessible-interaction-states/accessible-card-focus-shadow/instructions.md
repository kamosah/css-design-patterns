## Problem: Accessible Card Focus Shadow

Try to add a prominent custom focus shadow to a clickable card for better accessibility.

## Problem description

Given an HTML page with a card element `<a class="accessible-card" href="#">`, write CSS to meet the following requirements:

1. The card should have a soft `box-shadow` and rounded `border-radius` by default.
2. When the card receives `:focus` (e.g., using the **Tab** key), it should display a thick, prominent blue `box-shadow` (`0 0 0 4px rgba(38, 132, 255, 0.7)`) around it.
3. The default browser outline should not appear; only your custom `box-shadow` should show.
4. The card should be visually distinct from the background.

## Goal

Create an accessible card with a custom focus state that is visually clear, helping keyboard users track focus when tabbing through content.

## Constraints

- Do not use JavaScript or change the HTML structure.
