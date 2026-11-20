import { sampleProducts } from './data';




const ProductList = ({ products = [], onAddToCart, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};



export default ProductList;

export { sampleProducts };