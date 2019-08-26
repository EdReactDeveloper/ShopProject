import React from 'react';
import { FormattedMessage } from 'react-intl';

const Total = ({ total }) => {
	return (
		<div className="orders__order_item_total">
			<FormattedMessage id="total" defaultMessage="total" />: <strong>${total}</strong>
		</div>
	);
};

export default Total;
