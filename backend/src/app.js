const express = require('express');

const app = express();

app.use(express.json());
app.get('/api/test', (req, res) => {
	res.status(200).send({ msg: 'hello' });
});

module.exports = app;
