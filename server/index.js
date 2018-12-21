require('dotenv').config();
// ***** Dependencies  ****

const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const session = require('express-session');

const port = 3005;
const { registerr, get_user, get_all_posts, get_posts, poster, poster_query } = require('./controller');
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
    saveUninitialized: true,
    cookie: {
      maxAge: 10000000000
    }
  })
);

//Endpoints
app.get('/api/session', (req, res, next) => {
	res.status(200).json(req.session);
});

app.get('/api/logout', (req, res, next) => {
	req.session.destroy();
	res.status(200).send(req.session);
});
app.get('/api/post/:postid', poster)
app.get('/api/other', poster_query)
app.get('/api/posts', get_all_posts)
// app.get('/api/posts:id', get_all_posts)
app.get('/api/posts:id', get_posts)
app.post('/api/create_user', registerr);
app.post('/api/login', get_user);

app.listen(port, () => {
  console.log(`Port ${port} is listening...`);
});
