import React from 'react';
import NewArrivals from './newArrivals';
import BestSales from './bestSales';
import './Content.scss';

const Content = () => {
  return (
    <section className="content container">
      <NewArrivals />
      <BestSales />
    </section>
  );
};

export default Content;
