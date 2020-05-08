import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { GridContainer } from './styled.js';
import { PostGrid } from './styled.js';
import { ThreadGrid } from './styled.js';
import { ThreadGrid2 } from './styled.js';
import { ThreadTitle } from './styled.js';
import { ButtonStyles } from './styled.js';


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
				<p>Princeps huius civitatis Phalereus Demetrius cum patria pulsus esset iniuria, 
					ad Ptolomaeum se regem Alexandream contulit. Verum hoc loco sumo verbis his 
					eandem certe vim voluptatis Epicurum nosse quam ceteros. Avaritiamne minuis? 
					Duo enim genera quae erant, fecit tria.</p>	
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
