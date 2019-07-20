import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../components/navigation/index';
import Home from '../components/home';
import ProductPage from '../components/productPage';
import Login from '../components/navigation/header/auth/Login';
import Register from '../components/navigation/header/auth/Register';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';  
import Profile from '../components/profile'; 
import Cart from '../components/profile/cart';
import Orders from '../components/profile/orders'; 
import {connect} from 'react-redux'; 

const Routes = ({loading}) => {
	return (
		<div>
			{!loading && 
			<Router>
				<Navigation>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products/:id" component={ProductPage} />
						<AuthRoute exact path="/login" component={Login} />
						<AuthRoute exact path="/register" component={Register} />
						<PrivateRoute exact path="/me" component={Profile} />
						<PrivateRoute exact path="/cart" component={Cart} />
						<PrivateRoute exact path="/orders" component={Orders} />
					</Switch>
				</Navigation>
			</Router>
		}
		</div>
	);
};

const mapStateToProps = state => ({
	loading: state.auth.loading
})

export default connect(mapStateToProps)(Routes);
