import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
// import Data from '../Data';

function ProductScreen(props) {
  // const product = Data.products.find((x) => x._id === props.match.params.id);
  const productsDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productsDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  const [Qty, setQty] = useState(1);
  const handleAddtoCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + Qty);
  };
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
              <li>
                Status:
                {product.inStock > 0 ? (
                  <span>In Stock</span>
                ) : (
                  <span>Out of Stock</span>
                )}
              </li>
              <li>
                Qty:
                <select value={Qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.inStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>{' '}
              </li>
              <li>
                {product.inStock ? (
                  <button onClick={handleAddtoCart} className="button primary">
                    Add to cart
                  </button>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
