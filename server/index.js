require('dotenv').config();
// ***** Dependencies  ****

const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');

const {} = require('./controller');

const port = 3005;

const app = express();
app.use(json());

app.listen(port, () => {
	console.log(`Port ${port} is listening...`);
});