import React, { Fragment } from 'react';
import Header from '../../components/Header';

const buttonStyle = {
	cursor: 'pointer',
};

const Detail = ({ setView, data }) => {
	const { userName, title, data: body } = data;
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
