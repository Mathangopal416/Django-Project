// pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { getProducts, getReviews, getSalts } from '../services/api';
import ProductCard from '../components/ProductCard';
import ReviewSection from '../components/ReviewSection';
import SaltInfo from '../components/SaltInfo';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [salts, setSalts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
    getReviews().then(res => setReviews(res.data));
    getSalts().then(res => setSalts(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Compare medicine</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <SaltInfo salts={salts} />
      <ReviewSection reviews={reviews} />
    </div>
  );
};

export default ProductPage;
