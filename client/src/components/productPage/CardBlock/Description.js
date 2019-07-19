import React from 'react';
import Colors from '../../ui/product/Colors';
import Sizes from '../../ui/product/Sizes';
import ToCartBtn from './ToCartBtn';

const productDescription = ({ product, auth: { isAuthenticated, loading }, cart }) => {
	const { heading, subheading, description, colors, sizes, price } = product;
	return (
		<div className="productPage__right">
			<h3 className="productPage__right-heading">{heading}</h3>
			<span className="productPage__right-subheading">{subheading}</span>
			<div className="productPage__right-description">{description}</div>

			<div className="productPage__right-options--wrapper">
				<div className="productPage__right-options--left">
					<Colors colors={colors} />
					<Sizes sizes={sizes} />
				</div>
				<div className="productPage__right-options--right" />
			</div>

			<div className="productPage__right-order--wrapper">
				<div className="productPage__right-order--price">Price: ${price}</div>
				{isAuthenticated && !loading && <ToCartBtn cart={cart} product={product} />}
			</div>
		</div>
	);
};

export default productDescription;
