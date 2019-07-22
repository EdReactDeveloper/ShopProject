import React from 'react';
import Icon from "../../../ui/icon/Icon";
import { Product } from "../../../ui/icon/Selection";
import {Link} from 'react-router-dom'; 
import './Card.scss'; 
import Rating from './Rating'; 
import {formatTitle} from '../../../ui/misc/formatText'; 
import PropTypes from 'prop-types'; 

const SalesCard = ({item}) => {
 
  const {_id, heading, images, rating, } = item
    return (
        <li className="sales__product-item">
                <Link to={`/products/${_id}`} className="sales__product-item-front">
                  <img
                    src={images[0]}
                    alt="is missing"
                    className="sales__product-item-img"
                  />
                  <div className="sales__product-item-line" />
                  <div className="sales__product-item-infobox">
                    <h3 className="sales__product-item-infobox-heading">
                      {formatTitle(heading)}
                    </h3>
                    <div className="sales__product-item-stats">
                    <div className="sales__product-item-stats-front">   
                      <Rating stars={rating} />
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
SalesCard.propTypes = { 
  item: PropTypes.object,
  _id: PropTypes.string, 
  heading: PropTypes.string, 
  imgaes: PropTypes.string, 
  rating: PropTypes.number
}

export default SalesCard;