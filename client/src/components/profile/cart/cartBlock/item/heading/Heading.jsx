import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatTitle from '../../../../../ui/misc/formatText';
import './Heading.scss';

const Heading = ({ id, heading }) => {
  return (
    <h3 className="cart__item_heading">
      <Link to={`/products/${id}`}>{formatTitle(heading)}</Link>
    </h3>
  );
};

Heading.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

export default Heading;