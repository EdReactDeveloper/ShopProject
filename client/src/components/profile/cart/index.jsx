import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCart, sendOrder } from '../../../store/actions/cart';
import CartEmpty from './cartEmpty/CartEmpty';
import Cart from './cartBlock/CartBlock';
import Loader from '../../ui/loader';

const CartContainer = ({ cart: { cart, loading }, getCart, sendOrder, history }) => {

  useEffect(() => {
    getCart()
  }, [getCart])

  if (loading) {
    return <Loader />
  }

  if (cart.length > 0) {
    return <Cart cart={cart} loading={loading} sendOrder={sendOrder} history={history} />
  }
  return <CartEmpty />

};

const mapStateToProps = state => ({
  cart: state.cart
});

CartContainer.propTypes = {
  cart: PropTypes.shape({
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
    )).isRequired,
    loading: PropTypes.bool.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  getCart: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getCart, sendOrder })(CartContainer);
