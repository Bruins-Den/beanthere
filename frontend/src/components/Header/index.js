import React, { Fragment } from 'react';
import styled from 'styled-components';


const NavBar = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	justify-contents: space-evenly;
	align-items: center;

	li {
		display: inline;
		float: left;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 15;
		overflow: hidden;
		background-color: #ecebdd;
		position:sticky;
	}
	li a {
		display: block;
		color: #000000;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	
	li a:hover:not(.active) {
		border: 2px solid #383287;
	}
	.logo{
		font-size:35px;
		font-weight: bold;
		color: #383287;
		float: left;
		padding: 10px;
	}
	.searchBar{
		float:right;
		padding: 10px;
	}
`

const tempStyles = {
	searchStyle: {
		width: '300px',
		border: '2px solid #383287',
		height: '40px',
	}
};
const Header = () => {
	return (
		<Fragment>
			<NavBar>
			    <div className = "logo">bean there</div>
				
				<ul>
				<li><a href ="bean good">bean good</a></li>
				<li><a href ="hyb">have you bean?</a></li>
				<li><a href ="about">about</a></li>
				<li><a href ="log in">log in</a></li>
				</ul>

				<div className = "searchBar">
				<input
					type='search'
					placeholder='search'
					style={tempStyles.searchStyle}
				></input>
			</div>
			</NavBar>
			<hr />
		</Fragment>
	);
};

export default Header;
