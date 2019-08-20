import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Item = ({ product }) => {
	const { title, color, size, price, quantity, total } = product;
	return (
		<li className="orders__order_item">
			<h3 className="orders__order_item_heading">{title}</h3>
			<div className="orders__order_item_info">
				<div>
					<FormattedMessage id="color" defaultMessage="Color" />:{' '}
				</div>
				<div>{size}</div>
				<div>
					{' '}
					<FormattedMessage id="size" defaultMessage="size" />:{' '}
				</div>
				<div style={{ background: color }} className="orders__order_item-color" />
			</div>
			<div className="orders__order_item_info">
				<div>
					<FormattedMessage id="quantity" defaultMessage="quantity" />
					:{' '}
				</div>
				<div className="orders__order_item_info_cell">{quantity}</div>
				<div>
					<FormattedMessage id="price" defaultMessage="price" />:{' '}
				</div>
				<div>${price}</div>
			</div>
			<div>
				<FormattedMessage id="total" defaultMessage="total" />: <strong>${total}</strong>
			</div>
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
};

export default Item;
