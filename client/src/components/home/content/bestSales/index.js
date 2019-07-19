import React from "react";
import Card from "./Card";
import NewsLetter from "../../../ui/misc/NewsLetter";
import Heading from '../../../ui/misc/Heading'; 
import {connect} from 'react-redux';


const BestSales = ({products: {products, loading}}) => {

    return (
      <div className="sales__wrapper">
        <Heading 
       span="best" main='sales' 
       content=" Lorem Ipsum is simply dummy text of the printing and typesetting
       industry"
        />  
        <ul className="sales__product-list">
          {products && products.slice(0,3).map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </ul>
        <NewsLetter />
      </div>
    );
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(BestSales);
