import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromCart } from '../../../../../store/actions/cart';
import Image from './image/Image';
import Heading from './heading/Heading';
import Info from './info/Info';
import Counter from './counter/Counter';
import Button from './removeBtn/removeBtn';

const CartItem = ({ removeFromCart, index, item: { productId: { heading, images, _id, price }, color, size } }) => {
  const removeHandler = () => {
    removeFromCart(_id);
  };

  return (
    <li className="cart__item">
      <Image images={images} heading={heading} />
      <Heading id={_id} heading={heading} />
      <Info color={color} size={size} price={price} index={index} />
      <Counter index={index} id={_id} />
      <Button removeHandler={removeHandler} />
    </li>
  );
};

CartItem.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  item: PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      productId: PropTypes.shape(
        {
          heading: PropTypes.string.isRequired,
          _id: PropTypes.string.isRequired,
          images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          price: PropTypes.number.isRequired
        }
      )
    }).isRequired,
  index: PropTypes.number.isRequired
};

export default connect(null, { removeFromCart })(CartItem);
