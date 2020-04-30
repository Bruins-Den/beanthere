import React from 'react';

const cardStyle = {
	border: '2px solid #383287',
	margin: '10px auto',
};

const Card = ({ post }) => {
	const { userName, title, review } = post;

	return (
		<section style={cardStyle}>
			<img src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4fZU6PmOOkpuNr7OpLRcHQAAAA%26pid%3DApi%26h%3D180%26p%3D0&f=1"/>
			<div>User : {userName}</div>
			<div>Title : {title}</div>
			<div>Review: {review}</div>
		</section>
	);
};

export default Card;
