import React from 'react';
import { FormattedMessage } from 'react-intl';
import Total from './total/Total';
import './Info.scss'; 

const Info = ({ color, size, price, index }) => {
	return (
		<div className="cart__item_info">
			<div>
				<FormattedMessage id="color" defaultMessage="color" />:
			</div>
			<div className="cart__item_color" style={{ background: color }} />
			<div>
				<FormattedMessage id="size" defaultMessage="size" />:{' '}
			</div>
			<div className="cart__item_size">{size}</div>
			<div>
				<FormattedMessage id="price" defaultMessage="price" />
				:{' '}
			</div>
			<div>${price}</div>
			<div>
				<FormattedMessage id="total" defaultMessage="total" />
				:{' '}
			</div>
			<Total index={index} />
		</div>
	);
};

export default Info;
