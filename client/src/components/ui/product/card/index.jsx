import React from 'react';
import PropTypes from 'prop-types';
import Front from './front/Front';
import Back from './back/Back';
import './Card.scss';

const ProductCard = ({ item }) => {
  const scrollup = () => {
    window.scrollTo(0, 200);
  };

  return (
    <li className="card" onChange={scrollup}>
      <Front item={item} />
      <Back item={item} />
    </li>
  );
};

ProductCard.propTypes = {
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

export default ProductCard;
