import React from 'react';
import PropTypes from 'prop-types'; 

const Item = ({ product }) => {
	const { title, color, size, price, quantity, total } = product;
	return (
		<li className="orders__order_item">
			<h3 className="orders__order_item_heading">{title}</h3>
				<div className="orders__order_item_info">
					<div>size: </div>
					<div>{size}</div>
					<div>color: </div>
					<div style={{ background: color }} className="orders__order_item-color" />
				</div>
				<div className="orders__order_item_info">
					<div>quantity: </div>
					<div className="orders__order_item_info_cell">{quantity}</div>
					<div>price: </div>
					<div>${price}</div>
				</div>
			<div>total: <strong>${total}</strong></div>
		</li>
	);
};

Item.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  quantity: PropTypes.number,
  total: PropTypes.number,
  price: PropTypes.number
}

export default Item;
