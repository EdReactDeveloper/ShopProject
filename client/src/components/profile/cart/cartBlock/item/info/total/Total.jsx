import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counter } from '../../../../../../../store/actions/cart';

const Total = ({ index, cart }) => {

  const { total } = cart[index]

  return (
    <div className="cart__item_price">
      $
      {total}
    </div>
  )
};

const mapStateToProps = state => ({
  cart: state.cart.cart
})

Total.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
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
    })).isRequired,
  index: PropTypes.number.isRequired
}


export default connect(mapStateToProps, { counter })(Total);
