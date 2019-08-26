import React from 'react';
import './Image.scss'; 

const Image = ({images, heading}) => {
  return (
    <div className="cart__item_imgWrapper">
    <img src={images[0]} alt={heading} className="cart__item_img" />
  </div>
  );
};

export default Image;