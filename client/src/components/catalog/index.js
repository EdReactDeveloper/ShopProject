import React, {useEffect} from 'react'
import {connect} from 'react-redux'; 
import {getProducts} from '../../store/actions/products'; 
import Card from '../ui/product/card/index'; 
import './catalog.scss'; 
import PropTypes from 'prop-types';
import Loader from '../ui/loader';

const Products = ({getProducts, products: {products, loading}}) => {
  useEffect(()=>{
    getProducts()
  }, [getProducts])

    return (
      <div className="container">
      {products && !loading ? (
      <ul className="catalog__list">
        {products.map(item => (
          <Card item={item} key={item._id} />
          ))}
      </ul> ) : <Loader />
        }
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

Products.propTypes = {
  getProducts: PropTypes.func.isRequired, 
  products: PropTypes.object.isRequired, 
  loading: PropTypes.bool
}

export default connect(mapStateToProps, {getProducts})(Products)
