import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartScreen(props) {
  const Cart = useSelector((state) => state.cart);
  const { cartItems } = Cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    props.history.push('/singin?redirect=shipping');
  };
  // console.log(cartItems);

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <h4>Price</h4>
          </li>
          <div className="cart-item">
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <li key={item.id}>
                  <div className="cart-image">
                    <img src={item.image} alt="product" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link to={'/product/' + item.id}>{item.name}</Link>
                    </div>
                    <div>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.id, e.target.value))
                        }
                      >
                        {[...Array(item.inStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        className="button"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="cart-price">${item.price}</div>
                </li>
              ))
            )}
          </div>
        </ul>
      </div>
      <div className="cart-action">
        <h2>
          Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h2>
        <button
          className="button primary full-width"
          disabled={cartItems.length === 0}
          onClick={checkoutHandler}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
