// Initial cart data
let cart = {
subtotal: 50.00, // Example subtotal
discount: 0.00,
finalTotal: 50.00,
appliedPromo: null, // Track applied promo code
};

// Available promo codes
const promoCodes = {
ostad10: 0.10, // 10% discount
ostad5: 0.05,  // 5% discount
};

// DOM Elements
const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const finalTotalElement = document.getElementById("final-total");
const promoCodeInput = document.getElementById("promo-code");
const applyPromoButton = document.getElementById("apply-promo");
const promoMessageElement = document.getElementById("promo-message");

// Function to update cart summary
function updateCartSummary() {
    subtotalElement.textContent = `$${cart.subtotal.toFixed(2)}`;
    discountElement.textContent = `-$${cart.discount.toFixed(2)}`;
    finalTotalElement.textContent = `$${cart.finalTotal.toFixed(2)}`;
}

// Function to apply promo code
function applyPromoCode() {
const promoCode = promoCodeInput.value.trim();
if (cart.appliedPromo === promoCode) {
    promoMessageElement.textContent = "Promo code already applied.";
    return;
}

if (promoCodes[promoCode]) {
    const discountRate = promoCodes[promoCode];
    cart.discount = cart.subtotal * discountRate;
    cart.finalTotal = cart.subtotal - cart.discount;
    cart.appliedPromo = promoCode;

    promoMessageElement.textContent = "Promo code applied successfully!";
    promoMessageElement.style.color = "#28a745";
} else {
    promoMessageElement.textContent = "Invalid promo code. Please try again.";
    promoMessageElement.style.color = "#dc3545";
}

updateCartSummary();
}

// Event listener for apply promo button
applyPromoButton.addEventListener("click", applyPromoCode);

// Initialize cart summary
updateCartSummary();