import React from 'react';
import NewsLetter from '../../../ui/misc/newsLetter/NewsLetter';
import Heading from '../../../ui/misc/heading/Heading';
import List from './list/List';
import './BestSales.scss'; 

const BestSales = () => {
  return (
    <section className="sales__wrapper">
      <Heading
        span="best"
        main="sales"
        content="lorem Ipsum is simply dummy text of the printing and typesetting
       industry"
      />
      <List />
      <NewsLetter />
    </section>
  );
};




export default BestSales;
