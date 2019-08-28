import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ images, heading }) => {

  return (
    <div className="cart__item_imgWrapper">
      <img src={images[0]} alt={heading} className="cart__item_img" />
    </div>
  );
};


Image.propTypes = {
  images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired)).isRequired,
  heading: PropTypes.string.isRequired
}

export default Image;
