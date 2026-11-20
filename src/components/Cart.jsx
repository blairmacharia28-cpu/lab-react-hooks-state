import React from 'react';

const Cart = ({ cart, cartItems, items }) => {
  const cartList = cart ?? cartItems ?? items ?? [];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {cartList.length}</p>
      {cartList.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartList.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


