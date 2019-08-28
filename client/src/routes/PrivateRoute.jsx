import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
  <Route
    {...rest} 
    render={props => (!isAuthenticated && !loading ? <Redirect to="/login" /> : <Component {...props} />)}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.object.isRequired,
  auth: PropTypes.shape(
    {
      isAuthenticated: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
    }
  ).isRequired
}

export default connect(mapStateToProps)(PrivateRoute);
