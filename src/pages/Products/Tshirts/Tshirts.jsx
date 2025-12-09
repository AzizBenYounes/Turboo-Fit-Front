import React, { useState } from 'react';
import './Tshirts.css';
import { addToCart } from '../../../utils/cart';
const tshirts = [
  { id: 1, name: 'Real Madrid Home 23/24', price: '$90', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUi1hPt4i11W2vAsc_5sBiQchCM6BduBWWeA&s', sizes: ['S','M','L','XL'] },
  { id: 2, name: 'FC Barcelona Away 23/24', price: '$85', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiRsYRuqtc_9ha1fbYD4ct9BnDZy9NLBz2Q&s', sizes: ['S','M','L','XL'] },
  { id: 3, name: 'AC Milan Home 23/24', price: '$88', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwa4qY4ORcoG5QkOta2mBlCKVEcLxppa_HA&s', sizes: ['S','M','L','XL'] },
  { id: 4, name: 'Arsenal Away 23/24', price: '$87', image: 'https://www.stripe3.com/cdn/shop/files/HR6927_1_APPAREL_Photography_FrontView_grey.jpg?v=1698268736', sizes: ['S','M','L','XL'] },
  { id: 5, name: 'Juventus Home 23/24', price: '$82', image: 'https://kitnation.co.za/cdn/shop/files/image_63627d16-e24f-4e1b-862e-1ba96f92f019_250x.jpg?v=1690023755', sizes: ['S','M','L','XL'] },
  { id: 6, name: 'PSG Jordan Home 23/24', price: '$92', image: 'https://images.prodirectsport.com/ProductImages/Main/1002400_Main_Thumb_1677026.jpg', sizes: ['S','M','L','XL'] },
  { id: 7, name: 'Real Madrid Away Shorts 23/24', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDbjWdqRnt9reL_GExVsbmD0cvjP1P0pOng&s', sizes: ['S','M','L','XL'] },
  { id: 8, name: 'FC Barcelona Home Shorts 23/24', price: '$42', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7h6Daang7tSGWmtFzFE_QkxwMOMAqAq_MaH89S7twMBk3rRh_DWqx2MohKySZl-soqdu7rvKagre74EZBueIU2AoNMapESPZMBZDgjozgwZd8To4ucgtrGR47-NyAQwxC_h4I9PB6rXslWmNfajDS5UlwyhW7oB6r7P6uDgV70wbyC4yf8-fwagxt/s1600/fc%20b.jpg', sizes: ['S','M','L','XL'] },
  { id: 9, name: 'AC Milan Home Shorts 23/24', price: '$41', image: 'https://store.acmilan.com/cdn/shop/files/770409-A82_01.jpg?v=1744422987', sizes: ['S','M','L','XL'] },
  { id: 10, name: 'Arsenal Home Shorts 23/24', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLipl2nGiiRRmeoWht8DoDG2QM-KnScWbAYQ&s', sizes: ['S','M','L','XL'] },
  { id: 11, name: 'Juventus Away Shorts 23/24', price: '$45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFg4Rlg2hRxaNO2oiSroEPt3vm3SvyUhz5g&s', sizes: ['S','M','L','XL'] },
  { id: 12, name: 'PSG Jordan Away Shorts 23/24', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNbUi5fx8ps1UdNJdlK2s6N-A7Up6bAqDGw&s', sizes: ['S','M','L','XL'] },
];

const Tshirts = () => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (id, size) => {
    setSelectedSizes(prev => ({ ...prev, [id]: size }));
  };

  return (
    <div className="tshirts-container">
      <h2>Football T-Shirts & Shorts</h2>
      <div className="tshirts-grid">
        {tshirts.map(item => (
          <div key={item.id} className="tshirt-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <select value={selectedSizes[item.id] || ''} onChange={e => handleSizeChange(item.id, e.target.value)}>
              <option value="">Select Size</option>
              {item.sizes.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
            </select>
            <button onClick={() => addToCart(item, selectedSizes[item.id])}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tshirts;
