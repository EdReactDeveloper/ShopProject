/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CartItem from './item';
import Loader from '../../../ui/loader';
import './Cart.scss';

const Cart = ({ cart, loading, sendOrder, history }) => {

  const cartProducts = cart.map((item, index) => <CartItem item={item} key={item._id} index={index} />);

  return (
    <section className="container">
      <ul className="cart__list">{!loading && cart ? cartProducts : <Loader />}</ul>
      <div className="cart__order-wrapper">
        <button type="button" className="cart__order-btn" onClick={() => sendOrder(cart, history)}>
          <FormattedMessage id="order" defaultMessage="order" />
        </button>
      </div>
    </section>
  );
};

Cart.propTypes = {
  sendOrder: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      productId: PropTypes.shape(
        {
          colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          category: PropTypes.string.isRequired,
          heading: PropTypes.string.isRequired,
          subheading: PropTypes.string.isRequired,
          _id: PropTypes.string.isRequired,
          images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          price: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired
        }
      )
    }
  )).isRequired
};

export default Cart;
