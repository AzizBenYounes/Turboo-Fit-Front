// client/src/pages/Home/Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const [cart, setCart] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  // Load cart from localStorage when the page loads
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSizeChange = (id, size) =>
    setSelectedSizes((prev) => ({ ...prev, [id]: size }));

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id] || null;
    const price = Number(product.price) || 0;
    const existing = cart.find((item) => item.id === product.id && item.size === size);

    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, price, qty: 1, size }]);
    }

    alert(`${product.name}${size ? ` (Size ${size})` : ""} added to cart ✅`);
  };

  // Product list
  const products = [
    { id: 1, name: "Real Madrid Home 22/23", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6P5TwVyp2hyL1pqbJGjyKHdSlvkAKQAKhA&s", sizes: ["S","M","L"] },
    { id: 2, name: "FC Barcelona Away 22/23", price: 85, image: "https://www.soccerbox.com/media/catalog/product/cache/9d14d56c606ce6e31fa44a7bf9aa05c5/b/a/barcelona-kids-away-shirt-22-23.jpg", sizes: ["S","M","L"] },
    { id: 3, name: "Arsenal Away 22/23", price: 87, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Om_AJ3vhiW7kIARW79OHhbxo_1m737yMBg&s", sizes: ["S","M","L"] },
    { id: 4, name: "Juventus Home Shorts 22/23", price: 45, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b5ede3ae47214c66933dae8f00d222f8_9366/Juventus_22-23_Home_Shorts_White_HB0433_01_laydown.jpg", sizes: ["S","M","L"] },
    { id: 5, name: "PSG Jordan Home 22/23", price: 92, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KlKV51XqrdYgzoUmktmC18qAh2E_o_jOPg&s", sizes: ["S","M","L"] },
    { id: 6, name: "Bucks Jersey", price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3CDcn0ZHnj1Oa0iqfgvgthtfpsS6daB8Q&s", sizes: ["S","M","L"] },
    { id: 7, name: "Heat Shorts", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQt898raNV_ZaInsx-1jPrDa-V1jP3wyJDRg&s", sizes: ["S","M","L"] },
    { id: 8, name: "Basketball Hoop", price: 103, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgH-1Bt-VIYuUxmF6lRLE82Vjb9ctOleM75g&s" },
    { id: 9, name: "Wilson GST 1003", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBHv0-LZA45uGHe0woUo2hyoge7e2YqVP6g&s" },
    { id: 10, name: "GoSports Size 3 Classic Football", price: 50, image: "https://www.playgosports.com/cdn/shop/products/SB-CLASSIC-01_007_2_3.jpg?v=1561525388" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Our Sports Store</h1>
        <p>Performance. Style. Passion for the Game.</p>
        {isAuth && (
          <a href="#products">
            <button className="hero-button">Shop Now</button>
          </a>
        )}
      </div>

      {/* Products Section */}
      {isAuth && (
        <div id="products" className="products-section">
          <h2>Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                {product.sizes && (
                  <select
                    className="size-select"
                    value={selectedSizes[product.id] || ""}
                    onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  >
                    <option value="">Select Size</option>
                    {product.sizes.map((size, idx) => (
                      <option key={idx} value={size}>{size}</option>
                    ))}
                  </select>
                )}
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
