import React, { useEffect } from 'react';
import CardBlock from './cardBlock';
import { connect } from 'react-redux';
import { findProductById } from '../../store/actions/products';
import { getCart } from '../../store/actions/cart';
import PropTypes from 'prop-types'; 
import Loader from '../ui/loader'; 

const ProductPage = ({ getCart, products: { product, loading }, auth: {isAuthenticated}, findProductById, match, cart, auth }) => {

  useEffect(
    () => {
      findProductById(match.params.id)
      if(isAuthenticated){
        getCart()
      }
      return (()=> {
        getCart()
      })
    },
    [findProductById, isAuthenticated, getCart, match]
  );
  return (
    <article className="productPage">
      {product && cart && !loading ? (
        <CardBlock product={product} cart={cart} auth={auth} />
      ) : (
        <Loader />
      )}
    </article>
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
