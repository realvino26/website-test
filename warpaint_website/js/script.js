// Simple cart counter
const cartCount = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-cart');

let count = 0;
addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a, .shop-btn').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
