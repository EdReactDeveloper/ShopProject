import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getCart, sendOrder } from '../../../actions/cart';
import '../styles/Cart.scss';
import CartEmpty from './CartEmpty';
import Cart from './Cart';

const CartContainer = ({ cart: { cart, loading }, getCart, sendOrder, history }) => {

  useEffect(()=>{
    getCart()
  }, [getCart])

  if(loading){
    return <div>loading...</div>
  }

  if(cart.length > 0){
    return <Cart cart={cart} loading={loading} sendOrder={sendOrder} history={history} />
  }else {
    return <CartEmpty />
	}
};

const mapStateToProps = state => ({
	cart: state.cart
});

export default connect(mapStateToProps, { getCart, sendOrder })(CartContainer);
