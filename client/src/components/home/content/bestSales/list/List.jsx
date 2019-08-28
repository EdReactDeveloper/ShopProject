import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './card/Card';
import './List.scss';

const BestSalesList = ({ products, loading }) => {

  const productList = products.slice(0, 3).map((item) => <Card item={item} key={item._id} />);
  return <ul className="sales__product_list">{products && !loading && productList}</ul>;
};

BestSalesList.propTypes = {
  loading: PropTypes.bool.isRequired,
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

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading
});

export default connect(mapStateToProps)(BestSalesList);
