import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Info.scss'; 
import PropTypes from 'prop-types';

const Info = ({color, size, price, quantity}) => {
  return (
    
    <div className="orders__order_item_info">
      <div>
        <FormattedMessage id="color" defaultMessage="Color" />
       :
      </div>
      <div>{size}</div>
      <div>
        <FormattedMessage id="size" defaultMessage="size" />
        :
      </div>
      <div style={{ background: color }} className="orders__order_item-color" />
      <div className="orders__order_item_info">
        <div>
          <FormattedMessage id="quantity" defaultMessage="quantity" />
          :
        </div>
        <div className="orders__order_item_info_cell">{quantity}</div>
        <div>
          <FormattedMessage id="price" defaultMessage="price" />
          :
        </div>
        <div>
          $
          {price}
        </div>
      </div>
    </div>
    
  );
};

Info.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default Info;