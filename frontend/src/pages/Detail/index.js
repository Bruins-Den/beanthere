import React, { Fragment } from 'react';
import Header from '../../components/Header';

const buttonStyle = {
	cursor: 'pointer',
};

const Detail = ({ setView, selectedPost }) => {
	console.log('<Detail /> render');
	const { userName, title, data: body } = selectedPost;
	return (
		<Fragment>
			<Header />
			<div>Detail Page</div>
			<button onClick={() => setView('main')} style={buttonStyle}>
				Back
			</button>
			<section>
				<div>User : {userName}</div>
				<div>Title : {title}</div>
				<div> Body : {body}</div>
			</section>
		</Fragment>
	);
};

export default Detail;
