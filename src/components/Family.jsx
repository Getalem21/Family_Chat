import React from 'react';
import './NewArrivals.css'; // Create this CSS file for your styles

const Family= () => {
  const products = [
    { id: 1, name: "Product 1", price: "5,000", image: "product-image-url-1.jpg" },
    { id: 2, name: "Product 2", price: "3,000", image: "product-image-url-2.jpg" },
    // Add more products as needed
  ];

  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;