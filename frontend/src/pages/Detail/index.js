import React, { Fragment } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';

const ButtonStyles = styled.button`

		text-align: right;
		float:right;
		cursor: pointer;
		border: 2px solid #383287;
		text-decoration: none;
		padding: 8px 20px;
		background-color: #f3e3db;
		font-family:Karla;
		font-size:14px;
		&:hover{
			border-color:#d85235;
			color:#d85235;
		}
`

const Detail = ({ setView, selectedPost }) => {
	console.log('<Detail /> render');
	const { userName, title, data: body } = selectedPost;
	return (
		<Fragment>
			<Header />
			<ButtonStyles 
				onClick={() => setView('main')}>
				Back
			</ButtonStyles>
			<section>
				<div>User : {userName}</div>
				<div>Title : {title}</div>
				<div> Body : {body}</div>
			</section>
		</Fragment>
	);
};

export default Detail;
