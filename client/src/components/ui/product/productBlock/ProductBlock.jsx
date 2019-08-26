import React from 'react';
import Card from '../card';
import { connect } from 'react-redux';
import './ProductBlock.scss';
import PropTypes from 'prop-types';

const Products = ({ products: { products } }) => {
  let productsList = products && products.slice(0, 4).map(item => <Card key={item._id} item={item} />);

  return <ul className="product-list">{productsList}</ul>;
};

const mapStateToProps = state => ({
  products: state.products
});

Products.propTypes = {
  products: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Products);
