import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import formatTitle from '../../../misc/formatText';
import './Back.scss';

const Cardback = ({ item }) => {

  const sizes = item.sizes.map((item) => (
    <div style={{ color: item ? 'orange' : '' }} className="card-back-size-wrapper" key={item}>
      <span className="card-back-size-label">{item}</span>
      <span>-</span>
    </div>
  ));

  const colors = item.colors.map((item) => <div className="card-back-color" style={{ background: item }} key={item} />);

  return (
    <Link to={`/products/${item._id}`} className="card-back card-side">
      <img src={item.images[0]} className="card-back-image" alt="is missing" />
      <h3 className="card-back-heading">{formatTitle(item.heading)}</h3>
      <ul className="card-back-size">
        <FormattedMessage id="size" defaultMessage="size" />
        :
        {sizes}
      </ul>
      <div className="card-back-colorswrapper">{colors}</div>
      <div className="card-back-price">
        $
        {item.price}
      </div>
    </Link>
  );
};

Cardback.propTypes = {
  item: PropTypes.shape(
    {
      colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      category: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired,
};

export default Cardback;
