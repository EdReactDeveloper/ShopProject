import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import './ContentWrapper.scss';

const Navigation = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content__wrapper">{children}</main>
      <Footer />
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Navigation;
