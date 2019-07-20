import React from 'react';
import Icon from "../../../ui/icon/Icon";
import { Product } from "../../../ui/icon/Selection";
import {Link} from 'react-router-dom'; 
import './Card.scss'; 
import Rating from './Rating'; 

const SalesCard = ({item}) => {
 
    return (
        <li className="sales__product-item">
                <Link to={`/products/${item._id}`} className="sales__product-item-front">
                  <img
                    src={item.images[0]}
                    alt="is missing"
                    className="sales__product-item-img"
                  />
                  <div className="sales__product-item-line" />
                  <div className="sales__product-item-infobox">
                    <h3 className="sales__product-item-infobox-heading">
                      {item.heading}
                    </h3>
                    <div className="sales__product-item-stats">
                    <div className="sales__product-item-stats-front">   
                      <Rating stars={item.rating} />
                      <div className="sales__product-item-price">$100</div>
                    </div>
                    </div>                    
                    <div className="sales__product-item-stats-back">
                      <div className="sales__product-item-stats-hover">
                        <Icon
                          d={Product.cart}
                          className="sales__product-icon-cart"
                        />
                        add to cart
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
    );
};

export default SalesCard;