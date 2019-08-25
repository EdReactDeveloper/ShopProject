import React from 'react';
import { FormattedMessage } from 'react-intl';

const promosIcon = () => {
	return (
		<div className="promos__icon-wrapper">
			<div className="promos__icon-front">
				<h3 className="promos__icon-heading">
					<span>
						<FormattedMessage id="sale" defaultMessage="Sale" />
					</span>
					50%
				</h3>
			</div>
			<div className="promos__icon-back" />
		</div>
	);
};

export default promosIcon;
