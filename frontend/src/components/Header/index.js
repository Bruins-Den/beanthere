import React, { Fragment } from 'react';
import SideBar from "./sidebar.js";


const Header = () => {
	return (
		<Fragment>
	
		<div id="Menu">
           <SideBar pageWrapId={GridContainer} outerContainerId={"Menu"} />
		</div>

			{/*
			<NavBar>
			    <div className = "logo"><a href ="home">bean there</a></div>
				
				<ul className= "main-nav" id= "menu">
				<li><a href ="bean good">bean good</a></li>
				<li><a href ="hyb">have you bean?</a></li>
				<li><a href ="about">about</a></li>
				<li><a href ="log in">log in</a></li>
				</ul>

				
			</NavBar>
			*/}
			
		</Fragment>
	);
};

export default Header;
