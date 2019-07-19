import React from 'react';
import Promos from './promos';
import Button from '../../../ui/buttons/ExtendButton';
import Heading from '../../../ui/misc/Heading';
import ProductList from '../../../ui/product/ProductBlock';

const NewArrivals = () => {
	return (
		<div className="content__wrapper">
			<Heading
				span="new"
				main="arrivals"
				content="lorem Ipsum is just a dummy text of the printing and typesetting
          industry"
			/>
			<div className="content__productbox">
				<div className="content__product-wrapper">
					<ProductList className="product-list" />
					<Button />
					<Promos />
				</div>
			</div>
		</div>
	);
};

export default NewArrivals;
