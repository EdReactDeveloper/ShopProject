import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/products';
import Card from '../ui/product/card/index';
import Loader from '../ui/loader';
import './Catalog.scss';

const Catalog = ({ getProducts, products: { products, loading } }) => {
  useEffect(
    () => {
      getProducts();
    },
    [getProducts]
  );

  const productsList = products.map(item => <Card item={item} key={item._id} />);

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
  products: PropTypes.shape(
    {
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
      ).isRequired
      )
    }).isRequired,
};


export default connect(mapStateToProps, { getProducts })(Catalog);
