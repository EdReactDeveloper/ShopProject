import React from 'react';
import PropTypes from 'prop-types';

import Heading from './heading/Heading';
import Info from './info/Info';
import Total from './total/Total'; 
import './Item.scss'; 

const Item = ({ product: {title, color, size, price, quantity, total} }) => {
  return (
    <li className="orders__order_item">
      <Heading title={title} />
      <Info color={color} size={size} price={price} quantity={quantity} />
      <Total total={total} />
    </li>
  );
};

Item.propTypes =  {
  product: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    }
  ).isRequired
};

export default Item;
