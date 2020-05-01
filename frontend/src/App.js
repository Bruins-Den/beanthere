import React, { useState } from 'react';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Create from './pages/Create';

const App = () => {
	const [view, setView] = useState('main');
	const [data, setData] = useState({});

	const viewController = () => {
		switch (view) {
			case 'main':
				return <Main setView={setView} setData={setData} />;
			case 'detail':
				return <Detail setView={setView} data={data} />;
			case 'create':
				return <Create setView={setView} />;
			default:
				return <Main setView={setView} />;
		}
	};

	return viewController();
};

export default App;
