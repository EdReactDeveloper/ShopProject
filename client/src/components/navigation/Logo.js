import React from 'react';
import image from '../../assests/logo.png';
import {Link } from 'react-router-dom'; 
import './Logo.scss';

const Logo = () => {
	return (
		<Link to="/" className="logo-wrapper">
			<div className="logo-box">
				<div>SH</div>
				<div className="logo-imagewrapper">
					<img src={image} alt="logo" className="logo-image" />
				</div>
				<div>PY</div>
			</div>
			<div className="logo-sublogo">shops any where</div>
		</Link>
	);
};

export default Logo;
