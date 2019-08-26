import React from 'react';
import Card from './card/Card';
import PropTypes from 'prop-types';
import './List.scss'; 

const BestSalesList = ({ products: { products, loading } }) => {
  
  let productList = products.slice(0, 3).map((item, i) => <Card item={item} key={i} />);

  return <ul className="sales__product_list">{products && !loading && productList}</ul>;
};

BestSalesList.propTypes = {
  products: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

export default BestSalesList;
