import React from 'react';
import Colors from '../../ui/product/Colors';
import Sizes from '../../ui/product/Sizes';
import ToCartBtn from './ToCartBtn';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

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
			</div>
			<div className="productPage__right-order--wrapper">
				<div className="productPage__right-order--price">
					<FormattedMessage id="price" defaultMessage="price" />: ${price}
				</div>
				{isAuthenticated && !loading && <ToCartBtn cart={cart} product={product} />}
			</div>
		</div>
	);
};

productDescription.propTypes = {
	product: PropTypes.object.isRequired,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	description: PropTypes.string,
	colors: PropTypes.array,
	sizes: PropTypes.array,
	price: PropTypes.number,
	isAuthenticated: PropTypes.func,
	loading: PropTypes.bool,
	cart: PropTypes.object.isRequired
};

export default productDescription;
