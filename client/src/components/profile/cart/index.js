import React, {useEffect} from 'react'
import {connect} from 'react-redux'; 
import {getCart, sendOrder} from '../../../actions/cart'; 
import CartItem from './CartItem'; 
import '../styles/Cart.scss'; 

const Cart = ({cart:{cart, loading}, getCart, sendOrder, history}) => {
  useEffect(()=>{
    getCart()
  }, [getCart, loading])
  return (
    <div className="container">
      <ul className="cart__list">
      {!loading && cart ? cart.map((item, index)=> {
        return <CartItem item={item} key={item._id} index={index}/>
      }): <div>loading...</div>}
      </ul>
      <div className="cart__order-wrapper">
      <button className="cart__order-btn" onClick={()=> sendOrder(cart, history)}>order</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, {getCart, sendOrder})(Cart)
