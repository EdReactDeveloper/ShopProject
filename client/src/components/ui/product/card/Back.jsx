import React from 'react';
import { Link } from 'react-router-dom';
import { formatTitle } from '../../misc/formatText';
import '../styles/Back.scss';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Cardback = ({ item }) => {
	let sizes = item.sizes.map((item, i) => (
		<div style={{ color: item ? 'orange' : '' }} className="card-back-size-wrapper" key={i}>
			<label className="card-back-size-label">{item}</label>
			<span>-</span>
		</div>
	));

	let colors = item.colors.map((item, k) => <div className="card-back-color" style={{ background: item }} key={k} />);

	return (
		<Link to={`/products/${item._id}`} className="card-back card-side">
			<img src={item.images[0]} className="card-back-image" alt="is missing" />
			<h3 className="card-back-heading">{formatTitle(item.heading)}</h3>
			<ul className="card-back-size">
				<FormattedMessage id="size" defaultMessage="size" />:
				{sizes}
			</ul>
			<div className="card-back-colorswrapper">{colors}</div>
			<div className="card-back-price">${item.price}</div>
		</Link>
	);
};

Cardback.propTypes = {
	item: PropTypes.object.isRequired
};

export default Cardback;
