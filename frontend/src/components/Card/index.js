import React from 'react';

const cardStyle = {
	border: '2px solid brown',
	margin: '10px auto',
};

const Card = ({ post }) => {
	const { userName, title } = post;

	return (
		<section style={cardStyle}>
			<div>User : {userName}</div>
			<div>Title : {title}</div>
		</section>
	);
};

export default Card;
