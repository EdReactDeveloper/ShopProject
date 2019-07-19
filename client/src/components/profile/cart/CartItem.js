import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../actions/cart';
import Counter from './Counter';
import Total from './Total';

const CartItem = ({ removeFromCart, index, item: { productId:{heading, images, _id}, 
	color, size } }) => {

	const removeHandler = id => {
		removeFromCart(id);
	};
	return (
		<li className="cart__item">
			<div className="cart__item_imgWrapper">
				<img src={images[0]} alt={heading} className="cart__item_img" />
			</div>
			<h3 className="cart__item_heading">
				<Link to={`/products/${_id}`}>{heading}</Link>
			</h3>
			<div className="cart__item_color" style={{ background: color }} />
			<div className="cart__item_size">{size}</div>
			<div className="cart__item_quantity">
				<Counter index={index} id={_id}/>
			</div>
				<Total index={index}/>
			<div className="cart__item_btnWrapper">
				<button onClick={() => removeHandler(_id)} className="cart__item_btn">
					remove
				</button>
			</div>
		</li>
	);
};

export default connect(null, { removeFromCart })(CartItem);
