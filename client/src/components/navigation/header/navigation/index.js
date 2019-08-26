import React from 'react';
import Logo from '../../logo/Logo';
import Toolbar from './toolbar';
import Navbar from './navbar/Navbar';
import './navigation.scss'; 

const HeaderBottom = () => {
  return (
    <div className="header__navigation">
      <div className="container">
        <div className="header__navigation-wrapper">
          <Logo />
          <Navbar />
          <Toolbar />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
