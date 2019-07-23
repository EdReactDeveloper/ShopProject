import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getCart, sendOrder } from '../../../store/actions/cart';
import '../styles/Cart.scss';
import CartEmpty from './CartEmpty';
import Cart from './Cart';
import PropTypes from 'prop-types'; 
import Loader from '../../ui/loader';

const CartContainer = ({ cart: { cart, loading }, getCart, sendOrder, history }) => {

  useEffect(()=>{
    getCart()
  }, [getCart])

  if(loading){
    return <Loader />
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

CartContainer.propTypes = {
  cart: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getCart: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getCart, sendOrder })(CartContainer);
