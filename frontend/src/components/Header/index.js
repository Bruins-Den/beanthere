import React, { Fragment } from 'react';
import './style.css';
const Header = () => {
	return (
		<Fragment>
			<header className = "header">
			<nav className = "headerMenu">
				<a href ="#">bean there</a>
				<a href ="#">bean good</a>
				<a href ="#">have you bean?</a>
				<a href ="#">about</a>
				<a href ="#">log in</a>
			</nav>
			</header>
			<hr />
		</Fragment>
	);
};

export default Header;
