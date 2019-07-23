import React from 'react'
import CartItem from './CartItem'; 
import PropTypes from 'prop-types'; 
import Loader from '../../ui/loader'; 
const Cart = ({cart, loading, sendOrder, history}) => {
  return (
    <div className="container">
    <ul className="cart__list">
      {!loading && cart ? cart.map((item, index)=> {
        return <CartItem item={item} key={item._id} index={index}/>
      }): <Loader/>}
      </ul>
      <div className="cart__order-wrapper">
      <button className="cart__order-btn" onClick={()=> sendOrder(cart, history)}>order</button>
      </div>
      </div>
  )
}

Cart.propTypes = {
  sendOrder: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired
}

export default Cart
