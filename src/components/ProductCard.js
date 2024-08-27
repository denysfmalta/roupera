import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.images} alt={product.title} className="w-full h-auto object-cover" />
    <h2 className="text-xl font-semibold">{product.title}</h2>
    <p className="text-lg text-gray-700">${product.price}</p>
  </div>
);

export default ProductCard;