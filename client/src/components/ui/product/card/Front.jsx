import React from 'react';
import { Link } from 'react-router-dom';
import { formatTitle } from '../../misc/formatText';
import '../styles/Front.scss';
import PropTypes from 'prop-types';

const Cardfront = ({ item }) => {
	return (
		<Link to={`/products/${item.id}`} className="card-front card-side">
			<img src={item.images[0]} className="card-front-image" alt="is missing" />
			<h3 className="card-front-heading">{formatTitle(item.heading)}</h3>
			<div className="card-front-price">${item.price}</div>
		</Link>
	);
};

Cardfront.propTypes = {
	item: PropTypes.object.isRequired
};

export default Cardfront;
