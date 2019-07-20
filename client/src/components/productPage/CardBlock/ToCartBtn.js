import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, getCart } from '../../../actions/cart';
import { inCart } from '../../ui/misc/inCart';
import '../styles/addToCart.scss';


const ToCartBtn = ({ addToCart, getCart, product, cart: { cart, color, size } }) => {
	const [inCartData, setInCart] = useState({
		isInCart: false
	});
	const { isInCart } = inCartData;
	useEffect(
		() => {
			setInCart({ isInCart: inCart(product, cart) });
		},
		[cart, product, isInCart, getCart]
	);

	const cartHandler = (id, color, size, price) => {
		addToCart(id, color, size, price);
	};
	return (
		<div>
			{isInCart ? (
				<button className="toCart__btn">
					<Link to="/cart">in cart</Link>
				</button>
			) : (
				<button className="toCart__btn" onClick={() => cartHandler(product._id, color, size, product.price)}>add to cart</button>
			)}
		</div>
	);
};

export default connect(null, { addToCart, getCart })(ToCartBtn);
