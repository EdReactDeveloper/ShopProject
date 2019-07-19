import React from 'react';
import HeaderBottom from './headerBottom';
import './styles/Header.scss';
import Contacts from './Contacts';

const Header = () => {
	return (
		<header className="header">
			<Contacts />
			<HeaderBottom />
		</header>
	);
};

export default Header;
