import React, { Component } from "react";
import Front from './Front'; 
import Back from './Back';
import '../styles/Card.scss'; 

class ProductCard extends Component {
  scrollup = () => {
    window.scrollTo(0, 200);
  };

  render() {
    const { item } = this.props;
    return (
      <li className="card" onClick={this.scrollup}>
       <Front item={item}/>
       <Back item={item}/> 
      </li>
    );
  }
}

export default ProductCard;
