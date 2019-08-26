import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './Items.scss';

const UnAuthenticated = () => {
	return (
		<Fragment>
			<li className="toolbar__item">
				<Link to="/login">
					<FormattedMessage id="login" defaultMessage="login" />
				</Link>
			</li>
			<li className="toolbar__item">
				<Link to="/register">
					<FormattedMessage id="register" defaultMessage="register" />
				</Link>
			</li>
		</Fragment>
	);
};

export default UnAuthenticated;
