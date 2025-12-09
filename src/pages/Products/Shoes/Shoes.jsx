import React, { useState } from 'react';
import './Shoes.css';
import { addToCart } from '../../../utils/cart';
const shoesData = [
  { id: 1, name: 'Nike Mercurial Superfly', price: '$120', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7af1728-0efb-4111-8ed2-816f9e00fb67/ZM+SUPERFLY+10+ELITE+KM+FG.png', sizes: [38,39,40,41,42,43,44,45] },
  { id: 2, name: 'Adidas Predator Edge', price: '$110', image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/27dc662c3dc84ad7a0b5aceecb0c2e99_9366/chaussure-predator-languette-rabattue-terrain-souple-multi-surfaces.jpg', sizes: [38,39,40,41,42,43,44,45] },
  { id: 3, name: 'Puma Ultra Ultimate', price: '$105', image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/107163/01/sv01/fnd/PNA/fmt/png', sizes: [38,39,40,41,42,43,44,45] },
  { id: 4, name: 'Nike Phantom GX', price: '$130', image: 'https://www.tuttosport.com.tn/48299-large_default/nike-chaussures-phantom-gx-ii-club-fg-mg.jpg', sizes: [38,39,40,41,42,43,44,45] },
  { id: 5, name: 'Adidas F50', price: '$115', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVs-djSCqqHpzT2a7-7wSypl8Fs16lnK0PA&s', sizes: [38,39,40,41,42,43,44,45] },
  { id: 6, name: 'Puma Future Z', price: '$100', image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/106989/01/sv01/fnd/PNA/fmt/png', sizes: [38,39,40,41,42,43,44,45] },
  { id: 7, name: 'Nike LeBron 20', price: '$160', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a5012dc-d154-4088-b94e-82def711ae27/LEBRON+XXII.png', sizes: [38,39,40,41,42,43,44,45] },
  { id: 8, name: 'Adidas Harden Vol. 7', price: '$150', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f8962150ceb4eeb9ca6afd201454a3f_9366/Harden_Vol._7_Shoes_Blue_IE9249_01_standard.jpg', sizes: [38,39,40,41,42,43,44,45] },
  { id: 9, name: 'Puma MB.02 Rick and Morty', price: '$140', image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/378287/01/sv01/fnd/PNA/fmt/png', sizes: [38,39,40,41,42,43,44,45] },
  { id: 10, name: 'Under Armour Curry Flow 10', price: '$130', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYi8TYaNiJx9H-YB-lIFXb08FF3fI_WPEWg&s', sizes: [38,39,40,41,42,43,44,45] },
  { id: 11, name: 'Jordan Luka 2', price: '$145', image: 'https://cdn-images.farfetch-contents.com/23/64/33/67/23643367_57211174_1000.jpg', sizes: [38,39,40,41,42,43,44,45] },
  { id: 12, name: 'Nike Zoom Freak 5', price: '$135', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93ce3d01-faa6-4a7a-936e-353378c7f1ea/GIANNIS+FREAK+6+NRG.png', sizes: [38,39,40,41,42,43,44,45] }
];

const Shoes = () => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (id, size) => setSelectedSizes(prev => ({ ...prev, [id]: size }));

  const handleAddToCart = (product, selectedSize = null) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const price = Number(product.price.replace("$",""));
    const existing = cart.find(item => item.id === product.id && item.size === selectedSize);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, price, qty: 1, size: selectedSize });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name}${selectedSize ? ` (Size ${selectedSize})` : ""} added to cart! 🛒`);
  };

  return (
    <div className="shoes-container">
      <h2>Football & Basketball Shoes</h2>
      <div className="cards-grid">
        {shoesData.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <p>{shoe.price}</p>
            {shoe.sizes && (
              <select value={selectedSizes[shoe.id] || ""} onChange={e => handleSizeChange(shoe.id, e.target.value)}>
                <option value="">Select Size</option>
                {shoe.sizes.map(size => <option key={size} value={size}>{size}</option>)}
              </select>
            )}
            <button onClick={() => handleAddToCart(shoe, selectedSizes[shoe.id])}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
