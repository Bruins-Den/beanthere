const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

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

module.exports = app;
