import React from 'react';
import Header from './header';
import Footer from './footer';

const Navigation = props => {
  return (
    <main className="wrapper">
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default Navigation;
