import { ORDER_SUCCESS, ORDER_FAIL, GET_ORDERS_SUCCESS, GET_ORDERS_FAIL } from '../actions/types';

const initialState = {
  loading: true,
  orders: [],
  order: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: payload
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: payload
      };
    case ORDER_FAIL:
    case GET_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        order: null,
        orders: []
      };
    default:
      return state;
  }
}
