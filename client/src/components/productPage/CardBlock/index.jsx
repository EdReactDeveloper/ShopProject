import React from 'react';
import PropTypes from 'prop-types';
import Image from './image/Image';
import Description from './description/Description';
import './CardBlock.scss';

const Product = ({ product, cart, auth }) => {
  return (
    <div className="productPage__background container">
      <div className="productPage__wrapper">
        <Image images={product.images} />
        <Description product={product} auth={auth} cart={cart} />
      </div>
    </div>
  );
};

Product.propTypes = {
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
      description: PropTypes.string.isRequired
    }
  ).isRequired,
  cart: PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      cart: PropTypes.arrayOf(PropTypes.shape({}))
    }
  ).isRequired,
  auth: PropTypes.shape(
    {
      isAuthenticated: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
    }
  ).isRequired
};

export default Product;
