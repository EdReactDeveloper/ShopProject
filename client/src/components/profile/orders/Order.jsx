import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const OrdersItem = ({ item }) => {
  
	let orderItems = item.products.map(product => {
		return <Item product={product} key={product._id} />;
	});

	return <ul className="orders__order_list">{orderItems}</ul>;
};

OrdersItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default OrdersItem;
