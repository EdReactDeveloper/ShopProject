import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../store/actions/cart';
import Counter from './Counter';
import Total from './Total';
import Icon from '../../ui/icon/Icon';
import { Product } from '../../ui/icon/Selection';
import PropTypes from 'prop-types'; 

const CartItem = ({ removeFromCart, index, item: { productId: { heading, images, _id, price }, color, size } }) => {
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
			<div className="cart__item_info">
				<div>color: </div>
				<div className="cart__item_color" style={{ background: color }} />
				<div>size: </div>
				<div className="cart__item_size">{size}</div>
				<div>price: </div>
				<div>${price}</div>
				<div>total: </div>
				<Total index={index} />
			</div>
			<div className="cart__item_quantity">
				<Counter index={index} id={_id} />
			</div>
			<div className="cart__item_btnWrapper">
				<button onClick={() => removeHandler(_id)} className="cart__item_btn">
					<Icon d={Product.delete} className="icon cart__item_btn_icon" />
				</button>
			</div>
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
  size: PropTypes.string,
}

export default connect(null, { removeFromCart })(CartItem);
