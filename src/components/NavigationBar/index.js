import React from 'react';
import './styles.css';
import logo from '../../images/logo.svg';

const NavigationBar = function() {
	/* eslint-disable jsx-a11y/href-no-hash */
	return (
		<nav>
			<h1>
				<img className="logo" src={logo} alt="Spotaroom company logo"/>
			</h1>
			<ul>
				<li><a href="#">The company</a></li>
				<li><a href="#">How we work</a></li>
				<li><a href="#">Contact us</a></li>
			</ul>
		</nav>
	);
	/* eslint-enable jsx-a11y/href-no-hash */
};

export default NavigationBar;