import React from 'react';
import Image from './image/Image';
import Description from './description/Description';
import PropTypes from 'prop-types';
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
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default Product;
