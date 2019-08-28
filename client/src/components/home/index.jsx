import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from './banner/Banner';
import Content from './content';
import { getProducts } from '../../store/actions/products';

const Home = ({ getProducts }) => {
  useEffect(
    () => {
      getProducts();
    },
    [getProducts]
  );

  return (
    <main className="main">
      <Banner />
      <Content />
    </main>
  );
};

Home.propTypes = {
  getProducts: PropTypes.func.isRequired
};

export default connect(null, { getProducts })(Home);
