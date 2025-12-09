// client/src/pages/Cart/CartPage.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./CartPage.css"; // make a CSS file for styles

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const user = useSelector(state => state.authReducer.user);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage and backend
  const saveCart = async (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (user) {
      try {
        // ONLY change: backend URL replaced
        await axios.post(`${process.env.REACT_APP_API_URL}/cart`, { userId: user._id, items: updatedCart });
      } catch (err) {
        console.error("Failed to save cart to backend", err);
      }
    }
  };

  const handleRemove = (id, size) => {
    const updatedCart = cart.filter(item => !(item.id === id && item.size === size));
    saveCart(updatedCart);
  };

  const handleIncrement = (id, size) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    saveCart(updatedCart);
  };

  const handleDecrement = (id, size) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.size === size && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    saveCart(updatedCart);
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              {item.size && <p>Size: {item.size}</p>}
              <p>Price: ${item.price}</p>
              <div className="cart-quantity">
                <button onClick={() => handleDecrement(item.id, item.size)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => handleIncrement(item.id, item.size)}>+</button>
              </div>
              <button className="cart-remove" onClick={() => handleRemove(item.id, item.size)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3>
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
      </h3>
    </div>
  );
};

export default CartPage;
