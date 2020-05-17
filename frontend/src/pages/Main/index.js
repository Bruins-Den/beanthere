import React, { Fragment } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Header from '../../components/Header';
import Card from '../../components/Card';


import { GridContainer, PostGrid, MenuSection, BottomGrid, TopGrid, CreatePostStyle, MainSection, ButtonStyles } from './styled.js';

const Main = ({ posts, setView, setSelectedPost }) => {
	console.log('<Main /> render');
	
	return (
		<Fragment>
			<Header/>
			<GridContainer>
			<MenuSection></MenuSection>
			<TopGrid>
			<CreatePostStyle>
				<MainSection>
				<div className = 'logo'><a href ='home'>bean there</a></div>
			
					<p>we are an independent community of enthusiasts dedicated
					to supporting and promoting better coffee, community and 
					culture. 
					</p>
			
				</MainSection>
				<div id = 'createBar'>
				<form action = "">
					<input
						type='create'
						onClick = {() => setView('create')}
						placeholder = 'Create Post'
					></input>
				</form>
				</div>
			</CreatePostStyle>
			</TopGrid>

			<BottomGrid>
				<div className = "searchBar">
					<form action="">
						<input
							type='search'
							placeholder='Search'
						></input>
					</form>
				</div>
			</BottomGrid>
			{/*
			<ThreadGrid2>
				
				<ThreadTitle>Weekly Thread</ThreadTitle>
				<p>Princeps huius civitatis Phalereus Demetrius cum patria pulsus esset iniuria, 
					ad Ptolomaeum se regem Alexandream contulit. Verum hoc loco sumo verbis his 
					eandem certe vim voluptatis Epicurum nosse quam ceteros. Avaritiamne minuis? 
					Duo enim genera quae erant, fecit tria.</p>	
			</ThreadGrid2>
				*/}
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
		</Fragment>
	);
};

export default Main;
