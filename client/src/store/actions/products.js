import axios from 'axios';
import { PRODUCTS_SUCCESS, PRODUCTS_FAILED, PRODUCT_FAILED, PRODUCT_SUCCESS } from './types';

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products/get');
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILED
    });
  }
};

export const findProductById = id => async dispatch => {
  let res = null
  try {
    res = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAILED
    });
  }
  return res.data;
};
