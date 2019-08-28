import { CART_SUCCESS, CART_FAIL, FETCH_COLOR, FETCH_SIZE, COUTNER } from '../actions/types';

const initialState = {
  cart: [],
  loading: true,
  color: '',
  size: ''
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  let updatedCart = []
  let index = null
  switch (type) {
  case COUTNER:
    updatedCart = [ ...state.cart ];
    index = updatedCart.findIndex((item) => item.productId._id.toString() === payload.id.toString());
    if (index >= 0) {
      updatedCart[index].quantity = payload.quantity;
      updatedCart[index].total = payload.quantity * updatedCart[index].productId.price;
    }
    return {
      ...state,
      cart: updatedCart
    };
  case CART_SUCCESS:
    return {
      ...state,
      loading: false,
      cart: payload
    };
  case CART_FAIL:
    return {
      ...state,
      loading: false,
      cart: []
    };
  case FETCH_COLOR:
    return {
      ...state,
      color: payload
    };
  case FETCH_SIZE:
    return {
      ...state,
      size: payload
    };
  default:
    return state;
  }
}
