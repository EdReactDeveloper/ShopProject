import React from "react";
import Icon from "../icon/Icon";
import { Contact } from "../icon/Selection";
import './NewsLetter.scss'; 

const newsLetter = () => {
  return (
    <div className="newsLetter__wrapper">
      <div className="newsLetter__left">
        <h3 className="newsLetter__heading">NEWS LETTER</h3>
        <span>join us now to get all news and special offers</span>
      </div>
      <div className="newsLetter__right">
        <div className="newsLetter__mail">
          <Icon d={Contact.mail} className="newsLetter__icon" />
          <input className="newsLetter__mail-input" placeholder="type your email here" type="text"/>
        </div>

        <button className="newsLetter__button">join us</button>
      </div>
    </div>
  );
};

export default newsLetter;
