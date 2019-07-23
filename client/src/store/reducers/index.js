import {combineReducers} from 'redux'
import products from './products';
import auth from './auth'; 
import cart from './cart'; 
import orders from './orders';
import alert from './alert';

export default combineReducers({
  products, auth, cart, orders, alert
})