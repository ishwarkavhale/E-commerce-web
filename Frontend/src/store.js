import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './reducer/productReducer';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
