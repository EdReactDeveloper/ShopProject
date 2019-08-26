import React from 'react';
import Icon from '../../../../../ui/icon/Icon';
import { Product } from '../../../../../ui/icon/Selection';
import './removeBtn.scss'; 

const RemoveBtn = ({removeHandler}) => {
  return (
    <div className="cart__item_btnWrapper">
    <button onClick={removeHandler} className="cart__item_btn">
      <Icon d={Product.delete} className="icon cart__item_btn_icon" />
    </button>
  </div>
  );
};

export default RemoveBtn;