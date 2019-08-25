import React, { useState, useEffect } from 'react';
import './styles/Colors.scss';
import { connect } from 'react-redux';
import { fetchColor } from '../../../store/actions/cart';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Colors = ({ colors, fetchColor }) => {
	const [colorData, setColor] = useState({
		index: 0
	});

	const { index } = colorData;

	useEffect(
		() => {
			setColor({ index: 0 });
			fetchColor(colors[0].join(''));
		},
		[colors, fetchColor]
	);

	const colorHandler = i => {
		setColor({ color: colors[i], index: i });
		fetchColor(colors[i].join(''));
	};

	let colorsList = colors.map((item, i) => (
		<button
			key={item}
			style={{ background: item }}
			onClick={() => colorHandler(i)}
			className={`colors__item ${i === index && 'colors__selected'}`}
		/>
	));
	
	return (
		<div className="colors__wrapper">
			<span className="colors__label">
				<FormattedMessage id="color" defaultMessage="Color" />
			</span>
			<div className="colors__list">{colorsList}</div>
		</div>
	);
};

Colors.propTypes = {
	colors: PropTypes.array.isRequired,
	fetchColor: PropTypes.func.isRequired
};

export default connect(null, { fetchColor })(Colors);
