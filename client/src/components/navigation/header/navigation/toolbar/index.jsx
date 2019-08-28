import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Authenticated from './items/Authenticated';
import UnAuthenticated from './items/Unauthenticated';
import './Toolbar.scss';

const Toolbar = ({ auth: { isAuthenticated, loading } }) => {
  return <ul className="toolbar__list">{isAuthenticated && !loading ? <Authenticated /> : <UnAuthenticated />}</ul>;
};

const mapStateToProps = state => ({
  auth: state.auth
});

Toolbar.propTypes = {
  auth: PropTypes.shape(
    {
      isAuthenticated: PropTypes.bool,
      loading: PropTypes.bool
    }
  ).isRequired
};


export default connect(mapStateToProps)(Toolbar);
