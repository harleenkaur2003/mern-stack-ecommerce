import React from 'react';
import BtnRender from './BtnRender';
import './productlist.css';

const ProductList = ({ product, isAdmin }) => {
  if (!product) {
    return <div>Loading...</div>; // Handle undefined product gracefully
  }

  return (
    <div className="product_card">
      {isAdmin && <input type="checkbox" checked={product.checked} />}
      <img src={product.images || 'https://via.placeholder.com/250'} alt={product.title} className="product_card_img" />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product} />
    </div>
  );
};

export default ProductList;
