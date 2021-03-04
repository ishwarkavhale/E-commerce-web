import axios from 'axios';
import Cookie from 'js-cookie';
import { ADD_TO_CART, REMOVE_CART_ITEM } from '../constant/cartConstant';

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('/api/products/' + productId);
    // console.log(data);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: data._id,
        name: data.name,
        price: data.price,
        image: data.image,
        inStock: data.inStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
  } catch (error) {}
};

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
};

export { addToCart, removeFromCart };
