import React, {Fragment, useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { logout } from '../../../../../actions/auth';
import {Link} from 'react-router-dom'; 
import Icon from '../../../../ui/icon/Icon'; 
import {Product, Profile} from '../../../../ui/icon/Selection';
import {getOrders} from '../../../../../actions/cart'; 

const Authenticated = ({getOrders, logout}) => {
  
  const [orderData, setOders] = useState(false)

  useEffect(()=>{
    getOrders().then(orders => {
      if(orders.length > 0) setOders(true)
    })
  }, [getOrders])
  return (
    <Fragment>
      {orderData && <li className="toolbar__item" ><Link to="/orders">my orders</Link></li>}
      <li className="toolbar__item"><Link to="/cart"><Icon d={Product.cart} className="toolbar__item-icon" /></Link></li>
      <li className="toolbar__item" onClick={logout}><Link to="/login"><Icon d={Profile.logout} className="toolbar__item-icon" /></Link></li>
    </Fragment>
  )
}

export default connect(null, {logout, getOrders})(Authenticated)
