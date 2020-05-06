import React, { Fragment } from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Card from '../../components/Card';

import styled from 'styled-components';


const GridContainer = styled.div`
		display:grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
		    "Header Header Header"
			"postGrid postGrid threadGrid"
			"postGrid postGrid threadGrid"
			"postGrid postGrid threadGrid2"
			"postGrid postGrid threadGrid2";

		grid-gap: 0.2rem;
	
`

const PostGrid = styled.div`
		grid-area:postGrid;
`
const ThreadGrid = styled.div`
		grid-area:threadGrid;
		border: 2px solid #383287;
		postion: relative;
		padding: 15px;
		margin: 10px;
		text-align:left;
		font-family:Karla;
		font-size:14px;
`
const ThreadGrid2 = styled.div`
		grid-area:threadGrid2;
		border: 2px solid #383287;
		postion: relative;
		padding: 15px;
		margin: 10px;
		text-align:left;
		font-family:Karla;
		font-size:14px;
`
const ThreadTitle = styled.h1`
		font-family:Crimson Pro;
		font-size:18px;
		font-weight:bold;
		color:#383287;
`

const ButtonStyles = styled.button`
  
		text-align: right;
		float:right;
		cursor: pointer;
		border: 2px solid #383287;
		text-decoration: none;
		padding: 8px 20px;
		background-color: #f3e3db;
		font-family:Karla;
		font-size:14px;
		&:hover{
			border-color:#d85235;
			color:#d85235;
		}
`

const Main = ({ posts, setView, setSelectedPost }) => {
	console.log('<Main /> render');
	
	return (
		<Fragment>
			<Header />
			<GridContainer>
			<ThreadGrid>
				<ThreadTitle>Weekly Thread</ThreadTitle>
				<p>Princeps huius civitatis Phalereus Demetrius cum patria pulsus esset iniuria, 
					ad Ptolomaeum se regem Alexandream contulit. Verum hoc loco sumo verbis his 
					eandem certe vim voluptatis Epicurum nosse quam ceteros. Avaritiamne minuis? 
					Duo enim genera quae erant, fecit tria.</p>	
			</ThreadGrid>
			<ThreadGrid2>
				<ThreadTitle>Weekly Thread</ThreadTitle>
				<p2>Princeps huius civitatis Phalereus Demetrius cum patria pulsus esset iniuria, 
					ad Ptolomaeum se regem Alexandream contulit. Verum hoc loco sumo verbis his 
					eandem certe vim voluptatis Epicurum nosse quam ceteros. Avaritiamne minuis? 
					Duo enim genera quae erant, fecit tria.</p2>	
			</ThreadGrid2>
			
			<PostGrid>
				{posts.map((post, i) => (
					<Card
						key={i}
						post={post}
						setView={setView}
						setSelectedPost={setSelectedPost}
					/>
				))}
			</PostGrid>
			</GridContainer>
			
				<ButtonStyles
					onClick={() => setView('create')}
				>
					create
				</ButtonStyles>
				
		</Fragment>
	);
};

export default Main;
