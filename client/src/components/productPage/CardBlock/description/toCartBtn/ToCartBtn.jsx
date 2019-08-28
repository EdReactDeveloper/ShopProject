import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { addToCart, getCart } from '../../../../../store/actions/cart';
import inCart from '../../../../ui/misc/inCart';
import './toCartBtn.scss';

const ToCartBtn = ({ addToCart, getCart, product, cart: { cart, color, size } }) => {
  const [inCartData, setInCart] = useState({
    isInCart: false
  });
  const { isInCart } = inCartData;
  useEffect(
    () => {
      setInCart({ isInCart: inCart(product, cart) });
    },
    [cart, product, isInCart, getCart]
  );

  const cartHandler = (id, color, size, price) => {
    addToCart(id, color, size, price);
  };
  return (
    <div>
      {isInCart ? (
        <button className="toCart__btn" type="button">
          <Link to="/cart">
            <FormattedMessage id="incart" defaultMessage="in cart" />
          </Link>
        </button>
      ) : (
        <button
          className="toCart__btn"
          type="button"
          onClick={() => cartHandler(product._id, color, size, product.price)}
        >
          <FormattedMessage id="addtocart" defaultMessage="add to cart" />
        </button>
      )}
    </div>
  );
};

ToCartBtn.propTypes = {
  addToCart: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  product: PropTypes.shape(
    {
      colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      category: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }
  ).isRequired,
  cart: PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      cart: PropTypes.arrayOf(PropTypes.shape(
        {
          color: PropTypes.string.isRequired
        }
      ))
    }
  ).isRequired
};

export default connect(null, { addToCart, getCart })(ToCartBtn);

