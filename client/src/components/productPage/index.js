import React, { useEffect } from 'react';
import Product from './CardBlock';
import { connect } from 'react-redux';
import { findProductById } from '../../actions/products';
import './styles/product.scss';
import { getCart } from '../../actions/cart';
import PropTypes from 'prop-types'; 

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

ProductPage.propTypes = {
  getCart: PropTypes.func.isRequired,
  product: PropTypes.object,
  loading: PropTypes.bool,
  cart: PropTypes.object.isRequired,
  findProductById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { findProductById, getCart })(ProductPage);
