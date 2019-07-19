import React from 'react'
import { Link } from "react-router-dom";
import {formatTitle} from '../../misc/formatText';
import '../styles/Back.scss'; 

const Cardback = ({item}) => {
    return (
        <Link
        to={`/products/${item._id}`}
        className="card-back card-side"
      >
      
        <img
            src={item.images[0]}
            className="card-back-image"
            alt="is missing"
          />
          
        <h3 className="card-back-heading">{formatTitle(item.heading)}</h3>
        <ul className="card-back-size">
          size:
          {item.sizes.map((item, i) => (
            <div 
            style={{color: item ? 'orange' : ''}}
            className="card-back-size-wrapper" key={i}>
              <label className="card-back-size-label">{item}</label>
              <span>-</span>
            </div>
          ))}
        </ul>
        <div className="card-back-colorswrapper">
          {item.colors.map((item, k) => (
            <div
              className="card-back-color"                
              style={{ background: item }}
              key={k}
            />
          ))}
        </div>
        <div className="card-back-price">${item.price}</div>
      </Link>
    );
};

export default Cardback;