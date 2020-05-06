import React, { useState, useEffect } from 'react';

import Main from './pages/Main';
import Detail from './pages/Detail';
import Create from './pages/Create';
import mockData from '../mock_data';


const App = () => {
	/*
		When <App /> component is rendered,
		following states will be set first before anything. 

		By default, 
		view = 'main' // just a string
		posts = [] // empty array
		selectedPost = {} // empty object
	*/

	/**
	 * Additionally,
	 * setView, setPosts, and setSelectedPost are a callback function.
	 * When it's called, it'll reset the view with passed argument.
	 * For instance, if I call setView('detail') in somewhere else,
	 * this callback function will come back to this page and then will reset the 'view' variable
	 * to 'detail'.
	 *
	 * By default -> view = 'main'
	 * Later if I call like this -> setView('detail')
	 * resetting the value -> view = 'detail'
	 */
	const [view, setView] = useState('main');
	const [posts, setPosts] = useState([]);
	const [selectedPost, setSelectedPost] = useState({});

	/**
	 * UseEffect is a React method that gets called right after 'render' method.
	 * In this file, useEffect will be called after <App /> returns function viewController.
	 *
	 * So it's like below...
	 * [1] Render <App />, meaning Return viewController()
	 * [2] Call useEffect(), meaning Call what's inside useEffect -> call setPosts with mock data
	 * Since there's changes in state, we re-render <App />
	 * [3] Re-Render <App />
	 */
	useEffect(() => {
		console.log('<App /> useEffect triggered');
		setPosts(mockData);
	}, [mockData]
		);

	const viewController = () => {
		console.log('<App /> render');
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

	/*
		When <App /> component is loaded on the browser,
	    function 'viewController' will be triggered.
		
		Since state 'view' is set to 'main' by default,
		this will return <Main /> component
	*/
	return viewController();
};

export default App;
