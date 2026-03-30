# Mobile Contact Button Visibility

## Problem

Given an HTML page with two contact elements:

- `<button class="mobile-contact">Contact Us</button>` is a fixed-position button intended for mobile.
- `<a class="footer-contact" href="mailto:info@example.com">Contact Us</a>` is a link in the footer intended for desktop.

Write CSS to meet the following requirements:

- The `.mobile-contact` button should be **visible** when the viewport width is **less than 600px** and hidden when the viewport width is 600px or wider.
- The `.footer-contact` link should be **hidden** when the viewport width is less than 600px and **visible** when the viewport width is 600px or wider.
- The mobile contact button should be **fixed at the bottom-right corner** with a slight margin.

Do not modify the HTML, and do not use JavaScript.

## Goal

Provide mobile users with a prominent, fixed "Contact Us" button while ensuring desktop users see a standard footer link instead.

## Constraints

- Only use CSS; JavaScript or HTML changes are not allowed.
- Use exactly **600px** as the breakpoint.
