import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';

function Home() {
  const productsList = useSelector((state) => state.productsList); //productsList from store.js its reducer
  const { products, loading, error } = productsList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return loading ? (
    <div className="loading">Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
