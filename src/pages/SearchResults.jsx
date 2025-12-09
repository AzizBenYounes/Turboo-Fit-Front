import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SearchResults.css";

const SearchResults = () => {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({}); // track selected size per product

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5600/api/products?search=${keyword}`);
        setProducts(res.data);

        // Initialize selected sizes for products that have sizes
        const sizesInit = {};
        res.data.forEach((p) => {
          if (p.sizes?.length) {
            sizesInit[p._id] = p.sizes[0];
          }
        });
        setSelectedSizes(sizesInit);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [keyword]);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const size = product.sizes?.length ? selectedSizes[product._id] : null;

    // If product has sizes but none selected
    if (product.sizes?.length && !size) {
      alert("Please select a size!");
      return;
    }

    // Check if product with same size already exists
    const existing = cart.find(
      (item) => item._id === product._id && item.size === size
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1, size });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart! 🛒`);
  };

  if (!products.length) {
    return <p>No products found for "{keyword}"</p>;
  }

  return (
    <div className="products-container">
      <h2>Search results for "{keyword}"</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h4>{product.name}</h4>
            <p>${product.price}</p>

            {product.sizes?.length > 0 && (
              <select
                value={selectedSizes[product._id] || product.sizes[0]}
                onChange={(e) => handleSizeChange(product._id, e.target.value)}
              >
                {product.sizes.map((size, idx) => (
                  <option key={idx} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}

            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
