import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(p => (
      <ProductCard product={p} key={p.id} />
    ))}
  </div>
);
export default ProductList;
