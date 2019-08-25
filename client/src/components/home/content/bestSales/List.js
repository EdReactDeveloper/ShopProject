import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const BestSalesList = ({ products: { products, loading } }) => {
  
	let productList = products.slice(0, 3).map((item, i) => <Card item={item} key={i} />);

	return <ul className="sales__product-list">{products && !loading && productList}</ul>;
};

BestSalesList.propTypes = {
	products: PropTypes.object.isRequired,
	loading: PropTypes.bool
};

export default BestSalesList;
