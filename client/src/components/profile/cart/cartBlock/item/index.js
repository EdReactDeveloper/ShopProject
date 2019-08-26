import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../../../store/actions/cart';
import PropTypes from 'prop-types';

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
	index: PropTypes.number,
	heading: PropTypes.string,
	images: PropTypes.string,
	_id: PropTypes.string,
	price: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.string
};

export default connect(null, { removeFromCart })(CartItem);
