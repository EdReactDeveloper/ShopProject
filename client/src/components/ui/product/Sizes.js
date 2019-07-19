import React, { useState, useEffect } from 'react';
import './styles/Sizes.scss';
import { connect } from 'react-redux';
import { fetchSize } from '../../../actions/cart';

const Sizes = ({ sizes, fetchSize }) => {
	const [sizeData, setSize] = useState({
		index: 0
	});

	const { index } = sizeData;

	useEffect(
		() => {
			setSize({ index: 0 });
			fetchSize(sizes[0].join(''));
		},
		[sizes, fetchSize]
	);

	const sizeHandler = i => {
		setSize({ index: i });
		fetchSize(sizes[i].join(''));
	};
	return (
		<div className="size__wrapper">
			<span className="size__label">Size</span>
			<div className="size__list">
				{sizes.map((item, i) => (
					<div style={{ background: item }} className={`size__item ${i === index && 'size__selected'}`} onClick={() => sizeHandler(i)} key={item}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default connect(null, { fetchSize })(Sizes);
