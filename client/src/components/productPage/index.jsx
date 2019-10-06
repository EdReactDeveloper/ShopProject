import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardBlock from './CardBlock';
import { findProductById } from '../../store/actions/products';
import { getCart } from '../../store/actions/cart';
import Loader from '../ui/loader';

const ProductPage = ({ getCart, products: { product, loading }, auth: { isAuthenticated }, findProductById, match, cart, auth }) => {
  useEffect(
    () => {
      findProductById(match.params.id)
      if (isAuthenticated) {
        getCart()
      }
      return (() => {
        getCart()
      })
    },
    [findProductById, isAuthenticated, getCart, match]
  );
  return (
    <article className="productPage">
      {product && cart && !loading ? (
        <CardBlock product={product} cart={cart} auth={auth} />
      ) : ( <Loader /> )}
    </article>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
  auth: state.auth
});

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getCart: PropTypes.func.isRequired,
  products: PropTypes.shape({
    product: PropTypes.shape(
      {
        colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
        sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
        category: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }
    ),
    loading: PropTypes.bool.isRequired
  }).isRequired,
  cart: PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      cart: PropTypes.arrayOf(PropTypes.shape({})
      )
    }
  ).isRequired,
  findProductById: PropTypes.func.isRequired,
  auth: PropTypes.shape(
    {
      isAuthenticated: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
    }
  ).isRequired
}


export default connect(mapStateToProps, { findProductById, getCart })(ProductPage);
