import axios from 'axios';
import {
  CART_SUCCESS,
  CART_FAIL,
  FETCH_SIZE,
  FETCH_COLOR,
  COUTNER,
  ORDER_SUCCESS,
  ORDER_FAIL,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
} from './types';
import setAlert from './alert';


export const getCart = () => async dispatch => {
  
  try {
    const res = await axios.get('/api/shop/cart');
    dispatch({
      type: CART_SUCCESS,
      payload: res.data
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: CART_FAIL
    });
  }
};

export const addToCart = (id, color, size, price) => async dispatch => {

  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = JSON.stringify({ id, color, size, price });

  try {
    const res = await axios.post('/api/shop/toCart', body, config);
    dispatch({
      type: CART_SUCCESS,
      payload: res.data
    });
    dispatch(getCart());
    dispatch(setAlert('the item is added to the cart', 'success'));
    return res.data;
  } catch (error) {
    dispatch({
      type: CART_FAIL
    });
  }
};

export const removeFromCart = id => async dispatch => {

  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = JSON.stringify({ id });

  try {
    await axios.post('/api/shop/remove', body, config);
    dispatch(getCart());
  } catch (error) {
    dispatch({
      type: CART_FAIL
    });
  }
};

export const fetchColor = color => dispatch => {

  dispatch({
    type: FETCH_COLOR,
    payload: color
  });
};

export const fetchSize = size => dispatch => {
  dispatch({
    type: FETCH_SIZE,
    payload: size
  });
};

export const counter = (quantity, id) => dispatch => {
  dispatch({
    type: COUTNER,
    payload: { quantity, id }
  });
};

export const sendOrder = (cart, history) => async dispatch => {

  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = JSON.stringify({ cart });

  try {
    const res = await axios.post('/api/order/post', body, config);
    dispatch({
      type: ORDER_SUCCESS,
      payload: res.data
    });
    history.push('/orders');
  } catch (error) {
    dispatch({
      type: ORDER_FAIL
    });
  }
};

export const getOrders = () => async dispatch => {

  try {
    const res = await axios('/api/order/get');
    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: res.data
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL
    });
  }
};
