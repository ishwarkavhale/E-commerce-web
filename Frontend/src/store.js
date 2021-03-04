import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './reducer/productReducer';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import cartReducer from './reducer/cartReducer';

const cartItems = Cookie.getJSON('cartItems') || [];
console.log(cartItems);
const initialState = { cart: { cartItems } };
const reducer = combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
