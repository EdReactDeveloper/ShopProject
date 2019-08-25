import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/products';
import Card from '../ui/product/card/index';
import './Catalog.scss';
import PropTypes from 'prop-types';
import Loader from '../ui/loader';

const Catalog = ({ getProducts, products: { products, loading } }) => {
	useEffect(
		() => {
			getProducts();
		},
		[getProducts]
	);

	let productsList = products.map(item => <Card item={item} key={item._id} />);

	return (
		<section className="container">
			{products && !loading ? <ul className="catalog__list">{productsList}</ul> : <Loader />}
		</section>
	);
};

const mapStateToProps = state => ({
	products: state.products
});

Catalog.propTypes = {
	getProducts: PropTypes.func.isRequired,
	products: PropTypes.object.isRequired,
	loading: PropTypes.bool
};

export default connect(mapStateToProps, { getProducts })(Catalog);
