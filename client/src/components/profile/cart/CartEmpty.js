import React from 'react'
import {FormattedMessage} from 'react-intl'; 

const CartEmpty = () => {
  return (
    <div className="cart__empty container">
      <h3>
      <FormattedMessage id="cartEmpty" defaultMessage= " Your cart is empty"/>
        
       </h3>      
    </div>
  )
}

export default CartEmpty
