import React, { useEffect } from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
	postion: absolute;
	left:0px;
	border-top: 0.5px solid #72b0bd;
	padding: 15px;
	max-width: 850px;
	&:hover{
		color:#d9d9d9;
	}
`
const cardStyle = {
	fontSize: '14px',
	cursor: 'pointer',
	fontFamily: 'Karla',
};

const Card = ({ post, setView, setSelectedPost }) => {
	const { userName, title, review } = post;

	const handleOnClick = () => {
		setSelectedPost(post);
		setView('detail');
	};

	return (
		<CardWrapper>
		<section style={cardStyle} onClick={handleOnClick}>
			<div>User : {userName}</div>
			<div>Title : {title}</div>
			<div>Review: {review}</div>
		</section>
		</CardWrapper>
	);
};

export default Card;
