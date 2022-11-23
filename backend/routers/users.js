/* within our users.js folder */

// create a router with express
const router = require('express').Router();
// require in User from user.model
const User = require('../models/user.model');

/* our first route or first endpoint that handles incoming http
  get request on the /users/ endpoint will find user in database and send
  back that user to the server as json. it will also catch any errors by
  sending back a 400 and a json err object */

router.route('/').get(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

/* our second route will handle post request on the /users/add endpoint
  extract the username from the request's body, create a new user passing
  in the user you just extracted from the request's body. Then you will
  save that newUser in the database and send a response back to server
  in json 'user added!'. If any errors, return a 400 status and a json
  err object. */

router.route('/add').post((req, res) => {
  // console.log('HELLO WORLD ===============================');
  const username = req.body.username;
  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// make router public by exporting module

module.exports = router;
