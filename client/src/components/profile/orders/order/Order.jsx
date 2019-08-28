import React from 'react';
import PropTypes from 'prop-types';
import Item from './item/Item';
import './Order.scss'; 

const OrdersItem = ({ item }) => {
  const orderItems = item.products.map(product => {
    return <Item product={product} key={product._id} />;
  });

  return <ul className="orders__order_list">{orderItems}</ul>;
};

OrdersItem.propTypes = {
  item: PropTypes.shape(
    {
      products: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string.isRequired, 
        productId: PropTypes.string.isRequired, 
        quantity: PropTypes.number.isRequired, 
        size: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        _id: PropTypes.string.isRequired, 
        total: PropTypes.number.isRequired, 
        price: PropTypes.number.isRequired
      }))
    }
  ).isRequired
};

export default OrdersItem;
