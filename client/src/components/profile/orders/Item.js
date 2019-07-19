import React from 'react'

const Item = ({product}) => {
  const {title, color, size, price, quantity, total} = product
  return (
    <li className="orders__order_item">
      <h3>{title}</h3>
      <div>size: {size}</div>
      <div style={{background: color}} className="orders__order_item-color"></div>
      <div>quantity: {quantity}</div>
      <div>total: ${total}</div>
      <div>price: ${price}</div>
    </li>
  )
}

export default Item
