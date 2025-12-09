import React, { useState } from 'react';

const Admin = () => {
  // Initialize with empty arrays for each category
  const [products, setProducts] = useState({
    accessoires: [],
    balls: [],
    shoes: [],
    tshirts: []
  });

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: 'accessoires'
  });

  const [message, setMessage] = useState('');

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      const productToAdd = {
        id: Date.now(), // Unique ID
        name: newProduct.name,
        price: `$${newProduct.price}`,
        image: newProduct.image
      };

      setProducts(prev => ({
        ...prev,
        [newProduct.category]: [...prev[newProduct.category], productToAdd]
      }));

      // Reset form and show success message
      setNewProduct({ name: '', price: '', image: '', category: newProduct.category });
      setMessage('Product added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Please fill all fields!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const removeProduct = (category, id) => {
    setProducts(prev => ({
      ...prev,
      [category]: prev[category].filter(product => product.id !== id)
    }));
    setMessage('Product removed!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Product Management</h2>
      
      {message && (
        <div className={`alert ${message.includes('added') ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}

      {/* Add Product Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h4>Add New Product</h4>
          <div className="row">
            <div className="col-md-3">
              <input 
                type="text" 
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                className="form-control mb-2"
              />
            </div>
            <div className="col-md-2">
              <input 
                type="number" 
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                className="form-control mb-2"
              />
            </div>
            <div className="col-md-4">
              <input 
                type="text" 
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                className="form-control mb-2"
              />
            </div>
            <div className="col-md-2">
              <select 
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                className="form-control mb-2"
              >
                <option value="accessoires">Accessories</option>
                <option value="balls">Balls</option>
                <option value="shoes">Shoes</option>
                <option value="tshirts">T-Shirts</option>
              </select>
            </div>
            <div className="col-md-1">
              <button onClick={addProduct} className="btn btn-primary w-100">Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* Display Products by Category */}
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="card mb-4">
          <div className="card-header">
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)} ({items.length} products)</h4>
          </div>
          <div className="card-body">
            {items.length === 0 ? (
              <p className="text-muted">No products in this category</p>
            ) : (
              <div className="row">
                {items.map(product => (
                  <div key={product.id} className="col-md-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center p-2 border rounded">
                      <div className="d-flex align-items-center">
                        <img src={product.image} alt={product.name} style={{width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px'}} />
                        <div>
                          <strong>{product.name}</strong>
                          <br />
                          <span>{product.price}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeProduct(category, product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin;