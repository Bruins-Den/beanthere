import React, { useState, useEffect, Fragment } from 'react';

import Header from '../../components/Header';
import mockData from '../../../mock_data/index';

const tempStyles = {
	searchStyle: {
		width: '300px',
		border: '2px solid gray',
		height: '40px',
	},
	postStyle: {
		border: '2px solid brown',
		margin: '10px auto',
	},
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
				<input
					type='search'
					placeholder='search'
					style={tempStyles.searchStyle}
				></input>
			</div>
			<div>
				{posts.map((post, i) => {
					return (
						<div key={i} style={tempStyles.postStyle}>
							<div>User : {post.userName}</div>
							<div>Title : {post.title}</div>
						</div>
					);
				})}
			</div>
			<div style={tempStyles.buttonStyle}>
				<button>create</button>
			</div>
		</Fragment>
	);
};

export default Main;
