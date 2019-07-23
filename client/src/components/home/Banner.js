import React from "react";
import Icon from "../ui/icon/Icon";
import {Link} from 'react-router-dom'; 
import { NavIcon } from "../ui/icon/Selection";
import './Banner.scss'; 

const banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-infobox-wrapper">
          <div className="banner-scroll">
            <div className="banner-scroll-top" />
            <div className="banner-scroll-middle" />
            <div className="banner-scroll-bottom" />
          </div>
          <div className="banner-infobox">
            <h1 className="banner-infoheader">Full winter kit</h1>
            <div className="banner-textbox">
              <div className="banner-text">
                Half Jacket + Skiny Trousers + Boot leather
              </div>
              <div className="banner-subtext">
                lorem Ipsum is just a dummy text of the priniting and the
                typesitting industrt
              </div>
            </div>
            <div className="banner-pricebox">
              <div className="banner-price">Price: $120</div>
              <div className="banner-order">
                <Icon d={NavIcon.basket} className="banner-icon" />
                <Link className="banner-order-text" to='/products/5d2a3ccdf6ab9c2654a8dd88'>Order Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
