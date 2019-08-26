import React from 'react';
import Header from './header';
import Footer from './footer';
import './ContentWrapper.scss';

const Navigation = props => {
	return (
		<div className="wrapper">
			<Header />
			<main className="content__wrapper">{props.children}</main>
			<Footer />
		</div>
	);
};

export default Navigation;
