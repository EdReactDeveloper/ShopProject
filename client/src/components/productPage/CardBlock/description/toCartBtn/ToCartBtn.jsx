import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { addToCart, getCart } from '../../../../../store/actions/cart';
import { inCart } from '../../../../ui/misc/inCart';
import PropTypes from 'prop-types';
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
        <button className="toCart__btn">
          <Link to="/cart">
            <FormattedMessage id="incart" defaultMessage="in cart" />
          </Link>
        </button>
      ) : (
        <button className="toCart__btn" onClick={() => cartHandler(product._id, color, size, product.price)}>
          <FormattedMessage id="addtocart" defaultMessage="add to cart" />
        </button>
      )}
    </div>
  );
};

ToCartBtn.propTypes = {
  addToCart: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

export default connect(null, { addToCart, getCart })(ToCartBtn);
