import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../../store/actions/auth';
import { Link } from 'react-router-dom';
import Icon from '../../../../ui/icon/Icon';
import { Product, Profile } from '../../../../ui/icon/Selection';
import { getOrders } from '../../../../../store/actions/cart';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Authenticated = ({ getOrders, logout }) => {
  const [orderData, setOders] = useState(false);

  useEffect(
    () => {
      getOrders().then(orders => {
        if (orders.length > 0) setOders(true);
      });
    },
    [getOrders]
  );
  
  return (
    <Fragment>
      {orderData && (
        <li className="toolbar__item">
          <Link to="/orders">
            <FormattedMessage id="my_orders" defaultMessage="my orders" />
          </Link>
        </li>
      )}
      <li className="toolbar__item">
        <Link to="/cart">
          <Icon d={Product.cart} className="toolbar__item-icon" />
        </Link>
      </li>
      <li className="toolbar__item" onClick={logout}>
        <Link to="/login">
          <Icon d={Profile.logout} className="toolbar__item-icon" />
        </Link>
      </li>
    </Fragment>
  );
};

Authenticated.propTypes = {
  getOrders: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout, getOrders })(Authenticated);
