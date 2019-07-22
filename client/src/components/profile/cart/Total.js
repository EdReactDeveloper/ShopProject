import React from 'react';
import { connect } from 'react-redux';
import { counter } from '../../../actions/cart';
import PropTypes from 'prop-types'; 

const Total = ({ index, cart }) => {
  const total = cart[index].total

	return <div className="cart__item_price">${total}</div>;
};

const mapStateToProps = state => ({
  cart: state.cart.cart
})

Total.propTypes = {
  cart: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}


export default connect(mapStateToProps, {counter})(Total);
