import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../../../store/actions/cart';
import Order from './order/Order';
import Loader from '../../ui/loader';

const Orders = ({ getOrders, orders: { orders, loading } }) => {
  useEffect(
    () => {
      getOrders();
    },
    [getOrders]
  );

  const ordersList = orders.reverse().map(item => <Order item={item} key={item._id} />);


  return <div className="orders__wrapper container">{orders && !loading ? ordersList : <Loader />}</div>;
};

const mapStateToProps = state => ({
  orders: state.orders
});

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  orders: PropTypes.shape(
    {
      orders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      loading: PropTypes.bool.isRequired
    }
  ).isRequired,
};

export default connect(mapStateToProps, { getOrders })(Orders);
