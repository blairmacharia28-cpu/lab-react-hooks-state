import React, { useState } from 'react';
import { sampleProducts } from './components/ProductList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const filteredProducts =
  selectedCategory.toLowerCase() === 'all'
    ? sampleProducts
    : sampleProducts.filter(
        product =>
          product.category.toLowerCase() ===
          selectedCategory.toLowerCase()
      );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
  {isDarkMode ? 'Light Mode' : 'Toggle Dark Mode'}
</button>

      <br /><br />

      <label htmlFor="category-filter">
        Filter by Category:
      </label>

      <select
  id="category-filter"
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="all">All</option>
  <option value="Fruits">Fruits</option>
  <option value="Dairy">Dairy</option>
</select> 

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>

              <button
                data-testid={`product-${product.id}`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      <div>
        <h2>Shopping Cart</h2>

        <p>Items in Cart: {cart.length}</p>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
  <p key={`${item.id}-${index}`}>
    {item.name} is in your cart
  </p>

))
          
        )}
      </div>
    </div>
  );
}

export default App;
