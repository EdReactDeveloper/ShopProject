import React from "react";
import Card from "./card";
import {connect} from 'react-redux'
import './styles/ProductBlock.scss'; 
import PropTypes from 'prop-types'; 

const Products = ({products: {products}}) => {
    return (
      <ul className="product-list" >
       {products && products.slice(0, 4).map(item=>{
         return <Card key={item._id} item={item}/>
       })}
      </ul>
    );
  }

  const mapStateToProps = state => ({
    products: state.products
  })

  Products.propTypes = {
    products: PropTypes.object.isRequired
  }

export default connect(mapStateToProps)(Products);
