import React from 'react';
import './Accessoires.css';
import { addToCart } from '../../../utils/cart';

const accessoires = [
  // ⚽ Football Accessories
  { id: 1, name: 'Nike Goalkeeper Gloves', price: '$45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdVIBzU6rly8VjCcAsJAzkUPAHMWm6ZLooA&s' },
  { id: 2, name: 'Shin Guards Adidas', price: '$18', image: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/7ea035988c70446f99dfb8e56678c859_9366/IQ4040_01_standard.jpg' },
  { id: 3, name: 'Football Pump Kit', price: '$12', image: 'https://m.media-amazon.com/images/I/61UU8XXG8YL._UF1000,1000_QL80_.jpg' },
  { id: 4, name: 'Captain Armband', price: '$8', image: 'https://m.media-amazon.com/images/I/815YvumF64L.jpg' },
  { id: 5, name: 'Training Cone Set', price: '$20', image: 'https://m.media-amazon.com/images/I/717TRALM29L._AC_SL1500_.jpg' },
  { id: 6, name: 'Football Bag', price: '$28', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/13aebdee-0b91-4f54-b513-4ebb53538eea/NK+ACDMY+TEAM+L+DUFF.png' },

  // 🏀 Basketball Accessories
  { id: 7, name: 'Spalding Shooting Sleeve', price: '$15', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FVn5LFHR1G12p52YJZavkjr77sIIFnUQUQ&s' },
  { id: 8, name: 'Nike Headband', price: '$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3etw693cxpT3Ucm0lKAj93Bvw3Sx9g5XjnQ&s' },
  { id: 9, name: 'Wristbands Set', price: '$9', image: 'https://www.suddora.com/cdn/shop/products/Child_Size_Black-Sweatband_Set.jpg?v=1549308170' },
  { id: 10, name: 'Basketball Net', price: '$14', image: 'https://i5.walmartimages.com/seo/Athletic-Works-Heavy-Duty-Basketball-Net-Professional-Quality-Nylon-Red-White-and-Blue_51f1dc89-ebf0-4b1d-b4eb-961a50b62339.49e9ad5d9322dc8f7d1552b2b5205990.jpeg' },
  { id: 11, name: 'Mini Hoop Set', price: '$22', image: 'https://m.media-amazon.com/images/I/71CJa2rzY-L._UF1000,1000_QL80_.jpg' },
  { id: 12, name: 'Basketball Bag', price: '$30', image: 'https://m.media-amazon.com/images/I/71Z2jsJt2UL._AC_SL1500_.jpg' }
];

const Accessoires = () => {
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const price = Number(product.price.replace("$", ""));

    // Accessories have no size, so just use id as unique
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
    <div className="accessoires-container">
      <h2>Football & Basketball Accessories</h2>
      <div className="accessoires-grid">
        {accessoires.map(item => (
          <div key={item.id} className="accessoire-card">
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

export default Accessoires;
