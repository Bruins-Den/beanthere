import React, { Fragment } from 'react';
import Header from '../../components/Header';

const buttonStyle = {
	cursor: 'pointer',
};

const Create = ({ setView }) => {
	return (
		<Fragment>
			<Header />
			<div>Create Page</div>
			<button onClick={() => setView('main')} style={buttonStyle}>
				Back
			</button>
			<form>
				<label htmlFor='userName'>User : </label>
				<input type='text' id='userName' name='userName' />
				<br />
				<label htmlFor='password'>Password : </label>
				<input type='password' id='password' name='password' />
				<br />
				<label htmlFor='title'>Title : </label>
				<input type='text' id='title' name='title' />
				<br />
				<label htmlFor='body'>Body : </label>
				<textarea
					type='text'
					id='body'
					name='body'
					rows='10'
					cols='30'
				/>
				<br />
				<input type='submit' />
			</form>
		</Fragment>
	);
};

export default Create;
