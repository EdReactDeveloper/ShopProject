import React from 'react';
import { Product } from '../../../ui/icon/Selection';
import Icon from '../../../ui/icon/Icon';
import PropTypes from 'prop-types';

const Rating = ({ stars }) => {
  let arr = [];
  for (let i = 0; i < stars; i++) {
    arr.push(Product.star);
  }

  let starList = arr.map((item, i) => <Icon d={item} className="sales__product-icon" key={i} />);

  return <div className="sales__product-item-stars">{starList}</div>;
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired
};

export default Rating;
