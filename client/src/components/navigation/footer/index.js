import React from 'react';
import Logo from './Logo';
import List from './List';
import Payment from './Payment';
import './styles/Footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper container">
				<Logo />
				<List />
				<Payment />
			</div>
		</footer>
	);
};

export default Footer;
