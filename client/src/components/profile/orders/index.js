import React, {useEffect} from 'react'
import {connect} from 'react-redux'; 
import {getOrders} from '../../../actions/cart'; 
import Order from './Order'; 
import '../styles/Orders.scss'; 
import PropTypes from 'prop-types'; 

const Orders = ({getOrders, orders: {orders, loading}}) => {
useEffect(()=>{
  getOrders()
}, [getOrders] )
  return (
    <div className="orders__wrapper container">
      {orders && !loading ? orders.reverse().map(item=>(
        <Order item={item} key={item._id}/>
      )): <div>loading...</div>}
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.orders
})

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, {getOrders})(Orders)
