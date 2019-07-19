import React from 'react';
import Header from './header';
import Footer from './footer';

const Navigation = props => {
	return (
		<div className="wrapper">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Navigation;
