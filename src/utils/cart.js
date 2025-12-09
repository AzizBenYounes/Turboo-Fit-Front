// client/src/utils/cart.js
export const addToCart = (product, selectedSize = null) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const price = Number(product.price.replace("$", "")) || 0;

  const existing = cart.find(
    (item) => item.id === product.id && item.size === selectedSize
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, price, qty: 1, size: selectedSize });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name}${selectedSize ? ` (Size ${selectedSize})` : ''} added to cart! 🛒`);
};
