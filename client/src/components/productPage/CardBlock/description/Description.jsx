import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Colors from './colors/Colors';
import Sizes from './sizes/Sizes';
import ToCartBtn from './toCartBtn/ToCartBtn';
import './Description.scss';

const productDescription = ({ product, auth: { isAuthenticated, loading }, cart }) => {

  const { heading, subheading, description, colors, sizes, price } = product;

  return (
    <div className="productPage__right">
      <h3 className="productPage__right-heading">{heading}</h3>
      <span className="productPage__right-subheading">{subheading}</span>
      <div className="productPage__right-description">{description}</div>
      <div className="productPage__right-options--wrapper">
        <div className="productPage__right-options--left">
          <Colors colors={colors} />
          <Sizes sizes={sizes} />
        </div>
      </div>
      <div className="productPage__right-order--wrapper">
        <div className="productPage__right-order--price">
          <FormattedMessage id="price" defaultMessage="price" />
          : $
          {price}
        </div>
        {isAuthenticated && !loading && <ToCartBtn cart={cart} product={product} />}
      </div>
    </div>
  );
};

productDescription.propTypes = {
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
  ).isRequired,
  auth: PropTypes.shape(
    {
      isAuthenticated: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
    }
  ).isRequired
};

export default productDescription;
