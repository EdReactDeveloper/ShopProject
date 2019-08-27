import React from 'react';
import NewsLetter from '../../../ui/misc/newsLetter/NewsLetter';
import Heading from '../../../ui/misc/heading/Heading';
import List from './list/List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './BestSales.scss'; 

const BestSales = ({ products }) => {
  return (
    <section className="sales__wrapper">
      <Heading
        span="best"
        main="sales"
        content="lorem Ipsum is simply dummy text of the printing and typesetting
       industry"
      />
      <List products={products} />
      <NewsLetter />
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

BestSales.propTypes = {
  products: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(BestSales);
