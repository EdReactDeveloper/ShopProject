import React from 'react';
import Navigation from './navigation';
import './Header.scss';
import Contacts from './contacts/Contacts';

const Header = () => {
  return (
    <header className="header">
      <Contacts />
      <Navigation />
    </header>
  );
};

export default Header;
