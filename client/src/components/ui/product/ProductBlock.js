import React from "react";
import Card from "./card";
import {connect} from 'react-redux'
import './styles/ProductBlock.scss'; 

const Products = ({products: {products, loading}}) => {
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

export default connect(mapStateToProps)(Products);
