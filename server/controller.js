const get_user = (req, res) => {
  req.session.user = req.body;
  console.log('req.body when I press login', req.body);
  const db = req.app
    .get('db')
    // const {username, password} = req.body
    .users.findOne(req.body)
    .then(response => {
      console.log('get: ', response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const registerr = (req, res) => {
  req.session.user = req.body;
  const db = req.app
    .get('db')
    // const {username, password} = req.body
    .users.insert(req.body)
    // db.register([req.body.username, req.body.password])
    .then(response => {
      console.log('get: ', response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const get_posts = (req, res, next) => {
  req.session.user = req.params;
  req.app
    .get('db')
    .getUsers(req.params)
    .then(response => res.status(200).send(response))
    .catch(err => {
      res.status(500).send(err);
    });
};

const get_all_posts = (req, res, next) => {
  req.app
    .get('db')
    .get_all_posts()
    .then(response => res.status(200).send(response))
    .catch(err => {
      res.status(500).send(err);
    });
};

// const get_MyPosts = (req, res, next) => {
//   req.app
//     .get('db')
//     .query(`select * from forum where forum_id=${req.params.id}`)
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => res.status(500).send(err));
// }

const poster = (req, res, next) => {
  req.app
    .get('db')
    .get_particular_post([parseInt(req.params.postid)])
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
};

const poster_query = (req, res, next) => {
  req.app
    .get('db')
    .get_particular_post_query([`%${req.query.search}%`])
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
};
module.exports = {
  get_user,
  registerr,
  get_posts,
  get_all_posts,
  poster,
  poster_query
};
