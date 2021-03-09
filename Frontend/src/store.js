import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './reducer/productReducer';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import cartReducer from './reducer/cartReducer';
import { userRegisterReducer, userSigninReducer } from './reducer/userReducer';

const cartItems = Cookie.getJSON('cartItems') || [];
const data = Cookie.getJSON('userInfo') || null;
const userInfo = data;
console.log(userInfo);
const initialState = { cart: { cartItems }, userSignin: { userInfo } };
const reducer = combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
