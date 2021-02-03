import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data';

function ProductScreen(props) {
  const product = Data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div className="back-to-home">
        <Link to="/">Back To Home</Link>
      </div>
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
    </div>
  );
}

export default ProductScreen;
