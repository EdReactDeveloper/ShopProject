import React from "react";
import Image from "./Image";
import Description from './Description'; 

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



export default Product;
