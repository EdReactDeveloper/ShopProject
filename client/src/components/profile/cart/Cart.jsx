import React from 'react';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import Loader from '../../ui/loader';
import { FormattedMessage } from 'react-intl';

const Cart = ({ cart, loading, sendOrder, history }) => {
  let cartProducts = cart.map((item, index) => <CartItem item={item} key={item._id} index={index} />);

  return (
    <section className="container">
      <ul className="cart__list">{!loading && cart ? cartProducts : <Loader />}</ul>
      <div className="cart__order-wrapper">
        <button className="cart__order-btn" onClick={() => sendOrder(cart, history)}>
          <FormattedMessage id="order" defaultMessage="order" />
        </button>
      </div>
    </section>
  );
};

Cart.propTypes = {
  sendOrder: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired
};

export default Cart;
