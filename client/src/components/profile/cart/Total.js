import React from 'react';
import { connect } from 'react-redux';
import { counter } from '../../../actions/cart';

const Total = ({ index, cart }) => {
  const total = cart[index].total

	return <div className="cart__item_price">total: ${total}</div>;
};

const mapStateToProps = state => ({
  cart: state.cart.cart
})

export default connect(mapStateToProps, {counter})(Total);
