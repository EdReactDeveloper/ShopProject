import React from 'react'
import Item from './Item'; 
import PropTypes from 'prop-types'; 

const OrdersItem = ({item}) => {

  return (
    <ul className="orders__order_list">
      {item.products.map(product=> {
        return <Item product={product} key={product._id} />
      })}
    </ul>
  )
}

OrdersItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default OrdersItem
