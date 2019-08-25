import React from 'react';
import Promos from './promos';
import Heading from '../../../ui/misc/Heading';
import ProductList from '../../../ui/product/ProductBlock';

const NewArrivals = () => {
  return (
    <section className="content__wrapper">
      <Heading
        span="new"
        main="arrivals"
        content="lorem Ipsum is just a dummy text of the printing and typesetting
          industry"
      />
      <div className="content__productbox">
        <div className="content__product-wrapper">
          <ProductList className="product-list" />
          <Promos />
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
