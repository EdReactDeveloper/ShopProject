import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = [
	{ title: 'Home', link: '/' },
	{ title: 'Products', link: '/products' }
];

const Navbar = () => {
	return (
		<ul className="navigation-list">
			{nav.map((item, i) => (
				<li className="navigation-item" key={i}>
					<NavLink to={item.link} exact activeClassName="my-active" className="navigation-link">
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default Navbar;
