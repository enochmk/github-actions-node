const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('I love github actions. You should too.');
});

app.listen('3000', () => {
	console.log('server started');
});
