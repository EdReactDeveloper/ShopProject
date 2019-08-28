import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Total from './total/Total';
import './Info.scss'; 

const Info = ({ color, size, price, index }) => {
  return (
    <div className="cart__item_info">
      <div>
        <FormattedMessage id="color" defaultMessage="color" />
        :
      </div>
      <div className="cart__item_color" style={{ background: color }} />
      <div>
        <FormattedMessage id="size" defaultMessage="size" />
        :
      </div>
      <div className="cart__item_size">{size}</div>
      <div>
        <FormattedMessage id="price" defaultMessage="price" />
        :
      </div>
      <div>
        $
        {price}
      </div>
      <div>
        <FormattedMessage id="total" defaultMessage="total" />
        :
      </div>
      <Total index={index} />
    </div>
  );
};

Info.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default Info;
