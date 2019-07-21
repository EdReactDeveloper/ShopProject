import React, {useEffect} from 'react'
import {connect} from 'react-redux'; 
import {getProducts} from '../../actions/products'; 
import Card from '../ui/product/card/index'; 
import './catalog.scss'; 

const Products = ({getProducts, products: {products, loading}}) => {
  useEffect(()=>{
    getProducts()
  }, [getProducts])

  if(!products && loading){
    return <div>loading...</div>
  }

  return (
    <div className="container">
      {products && !loading && 
      <ul className="catalog__list">
        {products.map(item => (
          <Card item={item} key={item._id} />
          ))}
      </ul>
        }
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, {getProducts})(Products)
