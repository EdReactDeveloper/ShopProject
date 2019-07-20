import React from 'react'
import CartItem from './CartItem'; 

const Cart = ({cart, loading, sendOrder, history}) => {
  return (
    <>
    <ul className="cart__list">
      {!loading && cart ? cart.map((item, index)=> {
        return <CartItem item={item} key={item._id} index={index}/>
      }): <div>loading...</div>}
      </ul>
      <div className="cart__order-wrapper">
      <button className="cart__order-btn" onClick={()=> sendOrder(cart, history)}>order</button>
      </div>
      </>
  )
}

export default Cart
