import React from 'react';
import Front from './Front';
import Back from './Back';
import '../styles/Card.scss';
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {
  const scrollup = () => {
    window.scrollTo(0, 200);
  };

  return (
    <li className="card" onClick={scrollup}>
      <Front item={item} />
      <Back item={item} />
    </li>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductCard;
