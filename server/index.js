require('dotenv').config();
// ***** Dependencies  ****

const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const session = require('express-session');

const {} = require('./controller');

const port = 3005;
const { register, get_user } = require('./controller');
const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000000
    }
  })
);

//Endpoints
app.post('/api/create_user', register);
app.post('/api/user', get_user);

app.listen(port, () => {
  console.log(`Port ${port} is listening...`);
});
