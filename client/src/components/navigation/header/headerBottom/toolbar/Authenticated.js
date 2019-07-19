import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import { logout } from '../../../../../actions/auth';
import {Link} from 'react-router-dom'; 

const Authenticated = ({logout}) => {
  return (
    <Fragment>
      <li className="toolbar__item"><Link to="/cart">Cart</Link></li>
      <li className="toolbar__item" onClick={logout}><Link to="/login">logout</Link></li>
    </Fragment>
  )
}

export default connect(null, {logout})(Authenticated)
