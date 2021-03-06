import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../card';
import './ProductBlock.scss';

const Products = ({ products }) => {
  
  const productsList = products && products.slice(0, 4).map(item => <Card key={item._id} item={item} />);

  return <ul className="product-list">{productsList}</ul>;
};

const mapStateToProps = state => ({
  products: state.products.products
});

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(
    {
      colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      category: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    }
  )).isRequired
};

export default connect(mapStateToProps)(Products);
