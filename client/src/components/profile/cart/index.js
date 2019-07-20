import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCart, sendOrder } from '../../../actions/cart';
import '../styles/Cart.scss';
import CartEmpty from './CartEmpty';
import Cart from './Cart';

const CartContainer = ({ cart: { cart, loading }, getCart, sendOrder, history }) => {
	const [cartData, setCartData] = useState(false);

	useEffect(
		() => {
			getCart().then(
				cart => {
					if (cart.length > 0) setCartData(true);
				}
			);
		},
		[getCart]
  );
  

  if(loading){
    return <div>loading...</div>
  }

  if(cartData){
    return <Cart cart={cart} loading={loading} sendOrder={sendOrder} history={history} />
  }

  if(!cartData){
    return <CartEmpty />
  }

};

const mapStateToProps = state => ({
	cart: state.cart
});

export default connect(mapStateToProps, { getCart, sendOrder })(CartContainer);
