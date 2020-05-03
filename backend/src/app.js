const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const mockData = require('./models/mockdata.json');

const app = express();

app.use(express.json());

app.use(
	'/',
	expressStaticGzip(path.resolve(__dirname, '../../frontend/public'), {
		enableBrotli: true,
		orderPreference: ['br', 'gz'],
	})
);

app.get('/api/test', (req, res) => {
	res.status(200).send({ msg: 'hello' });
});

app.get('/api/getlist/mockdata', (req, res) => {
	res.status(200).send(mockData);
});

app.get('/api/getitem/mockdata', (req, res) => {
	let item_data = mockData.find(c => c.userName === req.query.name);

	if (item_data) {
		res.status(200).send(item_data);
	} else {
		res.status(404).send({msg:"No Data Available"});
	}
});

module.exports = app;
