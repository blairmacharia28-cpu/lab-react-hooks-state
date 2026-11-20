import React from 'react';



const ProductCard = ({ product, onAddToCart, addToCart }) => {
  const handleAdd = () => {
    if (onAddToCart) return onAddToCart(product);
    if (addToCart) return addToCart(product);
  };



  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

