import React from 'react';
import './Balls.css';
import { addToCart } from '../../../utils/cart';

const balls = [
  // ⚽ Footballs
  { id: 1, name: 'Adidas UEFA Champions League Pro', price: '$60', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8odUY7ybSch9l1c9gELcmSjTCLsIKXZnoQ&s' },
  { id: 2, name: 'Puma Orbita La Liga Ball', price: '$55', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR87OQ-RbmTXac2lemG_hz5OEFGhMIuq_hQ&s' },
  { id: 3, name: 'Nike Premier League Flight Ball', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX3yJ7FGadx88sOQCA9blNrRhBsXvtUNMBg&s' },
  { id: 4, name: 'Adidas Al Rihla World Cup Ball', price: '$65', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXAPbtNnn-Nb2lBPGVcR7MiChDsTrxk3F_A&s' },
  { id: 5, name: 'Mitre Delta Max FA Cup Ball', price: '$50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRtKQw_TMhs8QW8EV_Bi_oxlKWrjqCtb8Uw&s' },
  { id: 6, name: 'Nike Strike Football', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9S5Xod9EBDVb1rk5N7_KKNWSgfM41jrs7w&s' },

  // 🏀 Basketballs
  { id: 7, name: 'Spalding NBA Official Game Ball', price: '$95', image: 'https://images-cdn.ubuy.co.in/6632e6054ddceb6ba530fc36-spalding-nba-game-ball-replica.jpg' },
  { id: 8, name: 'Wilson Evolution Indoor Ball', price: '$75', image: 'https://m.media-amazon.com/images/I/91OpxTC21VS._AC_SL1500_.jpg' },
  { id: 9, name: 'Nike Elite Tournament Ball', price: '$85', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWIOIeeqpllGN_FE0sTKlHPzzkJ2-a7MDXg&s' },
  { id: 10, name: 'Airless Basketball', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCs5lY-IDf8ti2pEhR6HO95uUA_LtDgqpR3w&s' },
  { id: 11, name: 'Wilson NCAA Replica Game Ball', price: '$60', image: 'https://www.wilson.com/en-us/media/catalog/product/article_images/WTB0927IS_/WTB0927IS__482eda21e91b571c01d094dc3ccd0753.png' },
  { id: 12, name: 'Spalding Street Outdoor Ball', price: '$45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyXMSX806c4IC8bO_Okd2LCPaD-ptGz58xg&s' }
];

const Balls = () => {
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const price = Number(product.price.replace("$", ""));

    // Balls have no size, so just use id as unique
    const existing = cart.find(item => item.id === product.id && !item.size);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, price, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="balls-container">
      <h2>Football & Basketball Balls</h2>
      <div className="balls-grid">
        {balls.map(item => (
          <div key={item.id} className="ball-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balls;
