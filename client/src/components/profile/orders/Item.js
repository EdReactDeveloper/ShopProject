import React from 'react';

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
					<div>quantity:</div>
					<div>{quantity}</div>
					<div>price: </div>
					<div>${price}</div>
				</div>
			<div>total: ${total}</div>
		</li>
	);
};

export default Item;
