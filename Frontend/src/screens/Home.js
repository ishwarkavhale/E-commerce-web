import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/products');
      setProduct(response.data);
    };
    fetchData();
  }, []);
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={'/products/' + product._id}>
              <img className="product-image" src={product.image} alt="Shirt" />
            </Link>
            <div className="product-name">
              <Link to={'/products/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {' '}
              {product.rating} Stars ({product.numReview} Review)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Home;
