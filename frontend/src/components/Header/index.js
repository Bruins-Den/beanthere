import React, { Fragment } from 'react';
import styled from 'styled-components';


const NavBar = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	justify-contents: space-evenly;
	align-items: center;

	#menu{
		position:flex;
		top:0;
		margin:auto;
		text-align:center;
		display:flex;
		align-items:center;
		justify-content:center;
		height:100%;
		li{
		  margin:0 20px;
		  position:relative;
		  display:inline;
		  a{
			text-decoration:none;
			display:block;
			padding:5px 0;
			font-family:'Karla';
			font-size:16px;
			line-height:1;
			position:relative;
			z-index:1;
			text-align: center;
			color:#383287;
			background-size: 200% 100%;
			background-position: -100%;
			transition: all 0.3s ease-in-out;
			&:before{
			  display:block;
			  content:'';
			  width:0;
			  height:3px;
			  bottom:5px;
			  left:0;
			  bottom:-2px;
			  z-index:0;
			  position:absolute;
			  background:#d85235;
			  transition: all 0.3s ease-in-out;
			}
			&:hover{
			  color:#d85235;
			  &:before{
				width:100%;
			  }
			}
		  }
		}
	  }
	  
	.logo{
		font-size:35px;
		font-weight: bold;
		color: #383287;
		float: left;
		padding: 10px;
		font-family: Crimson Pro;
        /*font-family: Lora;*/
        /*font-family: Karla;*/
        /*font-family: Playfair Display;*/
        /*font-family: Montserrat;*/
	}
	.logo a {
		text-decoration: none;
		color:#383287;
		&:hover{
			color:#d85235;
		}
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
		backgroundColor: '#f3e3db',
	}
};
const Header = () => {
	return (
		<Fragment>
			<NavBar>
			    <div className = "logo"><a href ="home">bean there</a></div>
				
				<ul id= "menu">
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
			
		</Fragment>
	);
};

export default Header;
