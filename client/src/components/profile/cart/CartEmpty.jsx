import React from 'react';
import { FormattedMessage } from 'react-intl';

const CartEmpty = () => {
	return (
		<section className="cart__empty container">
			<h3>
				<FormattedMessage id="cartEmpty" defaultMessage=" Your cart is empty" />
			</h3>
		</section>
	);
};

export default CartEmpty;
