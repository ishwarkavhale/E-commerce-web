import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
// import Data from '../Data';

function ProductScreen(props) {
  // const product = Data.products.find((x) => x._id === props.match.params.id);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  // console.log(productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <div>
      <div className="back-to-home">
        <Link to="/">Back To Home</Link>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4> {product.name} </h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReview} Review)
              </li>
              <li>
                <b>Price: ${product.price}</b>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: ${product.price}</li>
              <li>Status: {product.status}</li>
              <li>
                Qty:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>{' '}
              </li>
              <li>
                <button className="button primary">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
