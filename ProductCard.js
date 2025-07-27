const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image_url} alt="Product" />
    <h4>{product.name}</h4>
    <p>{product.dosage}</p>
    <p>Rs. {product.price}</p>
  </div>
);
export default ProductCard;
