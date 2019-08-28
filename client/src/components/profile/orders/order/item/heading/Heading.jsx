import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ title }) => {
	 return <h3 className="orders__order_item_heading">{title}</h3>;
};

Heading.propTypes = {
	 title: PropTypes.string.isRequired
}

export default Heading;
