import React, { Fragment, useState } from 'react';

import Header from '../../components/Header';
import { addMockData } from '../../../mock_data';

import styled from 'styled-components';

const buttonStyle = {
	cursor: 'pointer',
};

const defaultForm = {
	userName: '',
	password: '',
	title: '',
	body: '',
};

const Create = ({ setView, setPosts }) => {
	console.log('<Create /> render');
	const [form, setForm] = useState(defaultForm);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//NODE_ENV === 'dev'
		let newDataSet = addMockData(form);
		setPosts(newDataSet);
		setView('main');
	};

	return (
		<Fragment>
			<Header />
			<div>Create Page</div>
			<button onClick={() => setView('main')} style={buttonStyle}>
				Back
			</button>
	
			<form onSubmit={handleSubmit}>
				<label htmlFor='userName'>User : </label>
				<input
					type='text'
					id='userName'
					name='userName'
					value={form.userName}
					onChange={handleInputChange}
				/>
				<br />
				<label htmlFor='password'>Password : </label>
				<input
					type='password'
					id='password'
					name='password'
					value={form.password}
					onChange={handleInputChange}
				/>
				<br />
				<label htmlFor='title'>Title : </label>
				<input
					type='text'
					id='title'
					name='title'
					value={form.title}
					onChange={handleInputChange}
				/>
				<br />
				<label htmlFor='body'>Body : </label>
				<textarea
					type='text'
					id='body'
					name='body'
					rows='10'
					cols='30'
					value={form.body}
					onChange={handleInputChange}
				/>
				<br />
				
				<input type='submit' />
			</form>
		</Fragment>
	);
};

export default Create;
