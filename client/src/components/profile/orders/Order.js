import React from 'react'
import Item from './Item'; 

const OrdersItem = ({item}) => {

  return (
    <ul className="orders__order_list">
      {item.products.map(product=> {
        return <Item product={product} key={product._id} />
      })}
    </ul>
  )
}

export default OrdersItem
