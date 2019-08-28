import { PRODUCTS_SUCCESS, PRODUCT_SUCCESS, PRODUCTS_FAILED, PRODUCT_FAILED } from '../actions/types';

const initialState = {
  products: [],
  loading: true,
  product: null
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
  case PRODUCTS_SUCCESS:
    return {
      ...state,
      products: payload,
      loading: false
    };
  case PRODUCT_SUCCESS:
    return {
      ...state,
      product: payload,
      loading: false
    };
  case PRODUCTS_FAILED:
    return {
      ...state,
      loading: false,
      products: []
    };
  case PRODUCT_FAILED:
    return {
      ...state,
      loading: false,
      product: null
    };
  default:
    return state;
  }
}
