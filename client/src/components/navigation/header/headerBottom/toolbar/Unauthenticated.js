import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const UnAuthenticated = () => {
	return (
		<Fragment>
			<li className="toolbar__item">
				<Link to="/login">login</Link>
			</li>
		</Fragment>
	);
};

export default UnAuthenticated;
