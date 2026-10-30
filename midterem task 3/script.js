// Task 3 - live search, price sort and Premium label (plain JavaScript)

const N = 74;                         // last two digits of my roll number
const PREMIUM_LIMIT = N * 100;         // products above this price get a Premium label

const grid      = document.getElementById("product-grid");
const searchBox = document.getElementById("search-box");
const sortBtn   = document.getElementById("sort-btn");
const message   = document.getElementById("no-results");

// the existing cards (the columns that are already in index.html)
const cards = grid.querySelectorAll(".product-item");

// read the price from the card itself: "Rs. 2,500" -> 2500
function getPrice(card) {
    const text = card.querySelector(".price").textContent;
    return Number(text.replace(/[^0-9]/g, ""));
}

// ---------- 1. Premium label (runs when the page loads) ----------
cards.forEach(function (card) {
    if (getPrice(card) > PREMIUM_LIMIT) {
        const label = document.createElement("span");
        label.className = "premium-label";
        label.textContent = "Premium";
        card.querySelector(".product-card").appendChild(label);
    }
});

// ---------- 2. Search + category together ----------
function applyFilters() {
    const text = searchBox.value.trim().toLowerCase();
    const category = document.querySelector('input[name="category"]:checked').value;
    let visibleCount = 0;

    cards.forEach(function (card) {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const matchesSearch = name.includes(text);
        const matchesCategory = category === "all" || card.dataset.category === category;

        // the search hides cards with a class; the category radio hides cards with CSS (Task 1)
        card.classList.toggle("search-hidden", !matchesSearch);

        // a card is really visible only if it matches BOTH
        if (matchesSearch && matchesCategory) {
            visibleCount++;
        }
    });

    // nothing visible -> show the message in place of the grid
    message.classList.toggle("d-none", visibleCount > 0);
    grid.classList.toggle("d-none", visibleCount === 0);
}

searchBox.addEventListener("input", applyFilters);

// also re-check when the user changes the category radio buttons
document.querySelectorAll('input[name="category"]').forEach(function (radio) {
    radio.addEventListener("change", applyFilters);
});

// ---------- 3. Sort by price (low->high, then high->low, ...) ----------
let ascending = true;

sortBtn.addEventListener("click", function () {
    const list = Array.from(grid.children);          // the existing card elements

    list.sort(function (a, b) {
        return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
    });

    // appendChild MOVES each existing element, so the grid is reordered (no innerHTML)
    list.forEach(function (card) {
        grid.appendChild(card);
    });

    sortBtn.textContent = ascending ? "Sort by price (Low to High)" : "Sort by price (High to Low)";
    ascending = !ascending;                           // next click goes the other way
});
