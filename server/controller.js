
const get_user = (req, res) => {
    console.log(req.body)
    const db = req.app.get('db');
    const {username, password} = req.body
    db.get_user([username, password])
    .then(response => {
      console.log("get: ", response)
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
}

const register = (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body
    db.register([username, password])
    .then(response => {
      console.log("get: ", response)
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
}

module.exports = {
    get_user,
    register
}