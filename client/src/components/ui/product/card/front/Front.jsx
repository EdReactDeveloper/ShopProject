import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatTitle from '../../../misc/formatText';
import './Front.scss'; 

const Cardfront = ({ item }) => {

  return (
    <Link to={`/products/${item._id}`} className="card-front card-side">
      <img src={item.images[0]} className="card-front-image" alt="is missing" />
      <h3 className="card-front-heading">{formatTitle(item.heading)}</h3>
      <div className="card-front-price">
        $
        {item.price}
      </div>
    </Link>
  );
};

Cardfront.propTypes = {
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
      rating: PropTypes.number.isRequired,
    }).isRequired
};

export default Cardfront;
