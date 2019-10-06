import React from 'react';
import { connect } from 'react-redux';
import './Alert.scss';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => (
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert container alert-${alert.status}`}>
      {alert.msg}
    </div>
  )));

const mapStateToProps = state => ({
  alerts: state.alert
});
Alert.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({}))};

export default connect(mapStateToProps)(Alert);
