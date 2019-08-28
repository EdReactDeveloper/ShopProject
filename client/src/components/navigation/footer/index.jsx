import React from 'react';
import LogoBlock from './logoBlock/LogoBlock';
import List from './list/List';
import Payment from './payment/Payment';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <LogoBlock />
        <List />
        <Payment />
      </div>
    </footer>
  );
};

export default Footer;
