# Web Technologies - Lab Mid Term (FA26 BCS A)

Name: farwa hussain pari
Roll No: FA26-BCS-031

## My personal numbers

| Value | Formula | Result |
|-------|---------|--------|
| N | last two digits of roll number | **74** |
| BP | 600 + N | **674px** |
| H (accent hue) | (N x 7) mod 360 | **158** -> `hsl(158, 70%, 45%)` |
| K (categories) | (N mod 3) + 3 | **5** |
| Sticky offset | (N mod 40) + 70 | **104px** |
| Premium limit | N x 100 | **Rs. 7,400** |

## Files I changed

- `index.html` (Task 1 and Task 3)
- `product.html` (Task 2)
- `style.css` (Task 1, 2 and 3 - each part is between `TASK x START / END` comments)
- `script.js` (new file, Task 3 only)

Bootstrap is still used (navbar, container, grid on the listing page, form controls) and nothing from the
header, cards or footer was removed.

## Task 1 - CSS-only category filter
- Gave each product card column a `data-category` value (Electronics, Footwear, Bags, Stationery, Home).
- Added 6 radio buttons ("All" + 5 categories) above the grid. "All" has the `checked` attribute.
- In `style.css`, `#cat-xxx:checked ~ .row .product-item:not([data-category="xxx"]) { display: none; }` hides the cards of other categories. `display: none` removes the card from the layout, so there are no gaps.
- `input:checked + label` uses the accent colour `hsl(158, 70%, 45%)`, so the selected filter looks selected.
- No JavaScript is used.

## Task 2 - Product page grid with sticky details box
- In `product.html` the page content is now three boxes: image, details (name, price, quantity, Add to Cart) and description.
- In `style.css` the parent uses `display: grid` and `grid-template-areas`. Below 674px: `"image" "details" "description"` (one column). From 674px: `"image details" "description description"`.
- From 674px the details box has `position: sticky; top: 104px;` and `align-self: start`.
- The description was made longer so the page scrolls and the sticky box can be seen working.
- No JavaScript is used.

## Task 3 - JavaScript search, sort, Premium label
- `script.js` is linked at the end of `index.html`.
- Search: on every `input` event the card name is compared with the typed text (lower case). A card is shown only if it matches the search AND the selected category radio. If no card is visible, "No products found" is shown.
- Sort: the button toggles ascending/descending. The price is read from the card text, the cards are sorted in an array, and `appendChild` moves the existing elements.
- Premium: when the page loads, cards with a price above N x 100 = Rs. 7,400 get a "Premium" label created with `createElement`.

## AI tools used
Claude (Anthropic)
