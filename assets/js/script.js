// ============================
// PRODUCT MODAL
// ============================

const productModal =
    document.getElementById("productModal");


// Buka modal produk
function openProducts() {

    productModal.classList.add("active");

}


// Tutup modal produk
function closeProducts() {

    productModal.classList.remove("active");

}


// ============================
// PROMO
// ============================

function showPromo() {

    alert(
        "🔥 WEEKEND OUTDOOR SALE\n\n" +
        "Diskon hingga 30% untuk produk pilihan MontisGear."
    );

}


// ============================
// CLICK OUTSIDE MODAL
// ============================

productModal.addEventListener(
    "click",
    function(event) {

        if (event.target === productModal) {

            closeProducts();

        }

    }
);


// ============================
// ESC KEY
// ============================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProducts();

        }

    }
);