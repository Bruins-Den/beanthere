import React, { useState, useEffect } from 'react';

import Main from './pages/Main';
import Detail from './pages/Detail';
import Create from './pages/Create';
import mockData from '../mock_data';

const App = () => {
	const [view, setView] = useState('main');
	const [posts, setPosts] = useState([]);
	const [selectedPost, setSelectedPost] = useState({});

	useEffect(() => {
		setPosts(mockData);
	}, [mockData]);

	const viewController = () => {
		switch (view) {
			case 'main':
				return (
					<Main
						posts={posts}
						setView={setView}
						setSelectedPost={setSelectedPost}
					/>
				);
			case 'detail':
				return <Detail setView={setView} selectedPost={selectedPost} />;
			case 'create':
				return <Create setView={setView} setPosts={setPosts} />;
			default:
				return (
					<Main
						posts={posts}
						setView={setView}
						setSelectedPost={setSelectedPost}
					/>
				);
		}
	};

	return viewController();
};

export default App;
