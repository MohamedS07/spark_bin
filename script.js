
function showAlert(msg) {
  alert("✅ " + msg);
}
// Load existing cart or create empty one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Product page - add to cart
function addToCart(productName, price) {
    let product = { name: productName, price: price };

    // Check if product already exists
    let existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.qty += 1;
    } else {
        product.qty = 1;
        cart.push(product);
    }

    // Save in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}

// Cart page - display items
function displayCart() {
    let cartItemsDiv = document.getElementById("cartItems");
    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = ""; // clear previous

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <p><strong>${item.name}</strong> - ₹${item.price} x ${item.qty}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);

        total += item.price * item.qty;
    });

    let totalDiv = document.createElement("div");
    totalDiv.classList.add("cart-total");
    totalDiv.innerHTML = <h3>Total: ₹${total}</h3>;
    cartItemsDiv.appendChild(totalDiv);
}
