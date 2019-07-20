import React, { useEffect } from 'react';
import NewsLetter from '../ui/misc/NewsLetter';
import Heading from '../ui/misc/Heading';
import Product from './CardBlock';
import { connect } from 'react-redux';
import { findProductById } from '../../actions/products';
import './styles/product.scss';
import { getCart } from '../../actions/cart';

const ProductPage = ({ getCart, products: { product, loading }, findProductById, match, cart, auth }) => {
	

	useEffect(
		() => {
			findProductById(match.params.id)
			getCart()
			return (()=> {
				getCart()
			})
		},
		[findProductById, getCart, match]
	);
	return (
		<div className="productPaged">
			{product && cart && !loading ? (
				<Product product={product} cart={cart} auth={auth} />
			) : (
				<div>loading...</div>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	products: state.products,
	cart: state.cart,
	auth: state.auth
});

export default connect(mapStateToProps, { findProductById, getCart })(ProductPage);
