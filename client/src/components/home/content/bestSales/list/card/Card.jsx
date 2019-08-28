import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Icon from '../../../../../ui/icon/Icon';
import { Product } from '../../../../../ui/icon/Selection';
import './Card.scss';
import Rating from './rating/Rating';
import formatTitle from '../../../../../ui/misc/formatText';

const SalesCard = ({ item }) => {
  const { _id, heading, images, rating } = item;
  const title = formatTitle(heading);

  return (
    <li className="sales__product-item">
      <Link to={`/products/${_id}`} className="sales__product-item-front">
        <img src={images[0]} alt={heading} className="sales__product-item-img" />
        <div className="sales__product-item-line" />
        <div className="sales__product-item-infobox">
          <h3 className="sales__product-item-infobox-heading">{title}</h3>
          <div className="sales__product-item-stats">
            <div className="sales__product-item-stats-front">
              <Rating stars={rating} />
              <div className="sales__product-item-price">$100</div>
            </div>
          </div>
          <div className="sales__product-item-stats-back">
            <div className="sales__product-item-stats-hover">
              <Icon d={Product.cart} className="sales__product-icon-cart" />
              <FormattedMessage id="addtocart" defaultMessage="add to cart" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
SalesCard.propTypes = {
  item: PropTypes.shape(
    {
      _id: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired).isRequired,
      rating: PropTypes.number.isRequired
    }
  ).isRequired,
};

export default SalesCard;
