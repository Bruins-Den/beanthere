import React, { useState, useEffect, Fragment } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import mockData from '../../../mock_data';

const tempStyles = {
	buttonStyle: {
		textAlign: 'right',
	},
};

const Main = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(mockData);
	}, [mockData]);

	return (
		<Fragment>
			<Header />
			<div>
				{posts.map((post, i) => (
					<Card key={i} post={post} />
				))}
			</div>
			<div style={tempStyles.buttonStyle}>
				<button>create</button>
			</div>
		</Fragment>
	);
};

export default Main;
