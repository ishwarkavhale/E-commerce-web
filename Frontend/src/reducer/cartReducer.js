import { ADD_TO_CART, REMOVE_CART_ITEM } from '../constant/cartConstant';

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.id === product.id ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case REMOVE_CART_ITEM:
      return {
        // ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
}

export default cartReducer;
