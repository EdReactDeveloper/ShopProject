import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../components/navigation/index';
import Home from '../components/home';
import ProductPage from '../components/productPage';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Profile from '../components/profile';
import Cart from '../components/profile/cart';
import Orders from '../components/profile/orders';
import Alert from '../components/alert';
import Catalog from '../components/catalog';

const Routes = ({ loading }) => {
  return (
    <>
      {!loading && (
        <Router>
          <Navigation>
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products/:id" component={ProductPage} />
              <Route exact path="/catalog" component={Catalog} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/register" component={Register} />
              <PrivateRoute exact path="/me" component={Profile} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute exact path="/orders" component={Orders} />
            </Switch>
          </Navigation>
        </Router>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading
});

Routes.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Routes);
