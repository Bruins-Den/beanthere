import React, { useState, useEffect, Fragment } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import mockData from '../../../mock_data';

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

const Main = ({ setView, setData }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(mockData);
	}, [mockData]);

	return (
		<Fragment>
			<Header />
			<div>
				{posts.map((post, i) => (
					<Card
						key={i}
						post={post}
						setView={setView}
						setData={setData}
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
