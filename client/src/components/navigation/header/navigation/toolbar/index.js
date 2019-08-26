import React from 'react';
import Authenticated from './items/Authenticated';
import UnAuthenticated from './items/Unauthenticated';
import { connect } from 'react-redux';
import './Toolbar.scss';
import PropTypes from 'prop-types';

const Toolbar = ({ auth: { isAuthenticated, loading } }) => {
	return <ul className="toolbar__list">{isAuthenticated && !loading ? <Authenticated /> : <UnAuthenticated />}</ul>;
};

const mapStateToProps = state => ({
	auth: state.auth
});

Toolbar.propTypes = {
	isAuthenticated: PropTypes.bool,
	loading: PropTypes.bool
};

export default connect(mapStateToProps)(Toolbar);
