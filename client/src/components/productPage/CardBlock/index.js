import React from "react";
import Image from "./Image";
import Description from './Description'; 
import PropTypes from 'prop-types'; 

const Product = ({product, cart, auth})=> {
    return (
      <div className="productPage__background">
        <div className="container">
            <div className="productPage__wrapper">
              <Image
                images={product.images}
              />
              <Description product={product} auth={auth} cart={cart} />
            </div>
        </div>
      </div>
    );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}



export default Product;
