import React, { Fragment } from 'react';
import { NavBar } from './styled.js';
import Icon from './icon';

const Header = () => {
	return (
		<Fragment>
			<NavBar>
			    <div className = "logo"><a href ="home">bean there</a></div>
				
				<ul className= "main-nav" id= "menu">
				<li><a href ="bean good">bean good</a></li>
				<li><a href ="hyb">have you bean?</a></li>
				<li><a href ="about">about</a></li>
				<li><a href ="log in">log in</a></li>
				</ul>

				<div className = "searchBar" id="searchbar">
				<form action="">
					<input
						type='search'
					></input>
					<div className = "coffeeIcon">
						<Icon name = "coffeemug" width={25} fill='#383287'/>
					</div>
				</form>
				</div>
			</NavBar>
			
		</Fragment>
	);
};

export default Header;
