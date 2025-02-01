// Initialize cart and total amount
let cart = [];
let totalAmount = 0;

// Function to add perfumes to cart
function addToCart(perfume) {
    if (cart.length >= 10) {
        alert("You reached the limit of buying more perfumes!");
        return;
    }

    cart.push(perfume);
    totalAmount += 99; // Fixed price for all perfumes
    updateCart();
}

// Function to update the cart display
function updateCart() {
    let cartList = document.getElementById("cart");
    let totalDisplay = document.getElementById("total");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item + " - ₹99";
        cartList.appendChild(li);
    });

    totalDisplay.textContent = "Total: ₹" + totalAmount;
}

// Function to apply the coupon discount
function applyCoupon() {
    let couponCode = document.getElementById("coupon").value;

    if (couponCode === "NEWBRAND" && cart.length >= 2) {
        let discount = totalAmount * 0.10; // 10% discount
        totalAmount -= discount;
        document.getElementById("total").textContent = "Total (After Discount): ₹" + totalAmount.toFixed(2);
        alert("Coupon Applied! 10% Off on 2 or more bottles.");
    } else {
        alert("Invalid coupon or not enough items in cart!");
    }
}