import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid'
import { Product } from '../../../../../../ui/icon/Selection';
import Icon from '../../../../../../ui/icon/Icon';
import './Rating.scss'; 

const Rating = ({ stars }) => {
  const arr = [];
  for (let i = 0; i < stars; i+=1) {
    arr.push(Product.star);
  }
  const starList = arr.map((item) => <Icon d={item} className="sales__product-icon" key={uuid.v4()} />);

  return <div className="sales__product-item-stars">{starList}</div>;
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired
};

export default Rating;
