import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

const tempStyles = {
	searchStyle: {
		width: '300px',
		border: '2px solid gray',
		height: '40px',
	},
	buttonDivStyle: {
		textAlign: 'right',
	},
	buttonStyle: {
		cursor: 'pointer',
	},
};

const Main = ({ posts, setView, setSelectedPost }) => {
	console.log('<Main /> render');
	return (
		<Fragment>
			<Header />
			<div>
				{posts.map((post, i) => (
					<Card
						key={i}
						post={post}
						setView={setView}
						setSelectedPost={setSelectedPost}
					/>
				))}
			</div>
			<div style={tempStyles.buttonDivStyle}>
				<button
					onClick={() => setView('create')}
					style={tempStyles.buttonStyle}
				>
					create
				</button>
			</div>
		</Fragment>
	);
};

export default Main;
