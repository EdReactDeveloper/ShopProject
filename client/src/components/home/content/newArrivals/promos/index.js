import React from "react";
import Icon from "../../../../ui/icon/Icon";
import { Product } from "../../../../ui/icon/Selection";
import PromoIcon from "./Icon";
import {Link} from 'react-router-dom';
import './Promos.scss'; 

const Promos = () => {
  return (
    <div className="promos__wrapper">
      <Link to="/" className="promos__left">
        <PromoIcon className="promos__left-icon" />
        <div className="promos__left-headingbox">
          <h3 className="promos__left-heading">Full winter kit</h3>
          <div className="promos__left-subheading">
            Half Jacket + Skiny Trousers + Boot leather
          </div>
        </div>

        <div className="promos__left-pricebox">
          <Icon d={Product.cart} className="promos__left-price-icon" />
          <div className="promos__left-price">$120</div>
        </div>
      </Link>
      <Link to="/" className="promos__right">
        <h3 className="promos__right-heading">
          adv <span>area</span>
        </h3>
        <div className="promos__right-subheading">100 x 470</div>
      </Link>
    </div>
  );
};

export default Promos;
