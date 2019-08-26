import PropTypes from 'prop-types';
import React from 'react';

import Heading from './heading/Heading';
import Info from './info/Info';
import Total from './total/Total'; 
import './Item.scss'; 

const Item = ({ product }) => {
  const { title, color, size, price, quantity, total } = product;
  return (
    <li className="orders__order_item">
      <Heading title={title}/>
      <Info color={color}  size={size} price={price} quantity={quantity} />
      <Total total={total} />
    </li>
  );
};

Item.propTypes =  {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  quantity: PropTypes.number,
  total: PropTypes.number,
  price: PropTypes.number
};

export default Item;
