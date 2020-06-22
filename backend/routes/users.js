const router = require('express').Router();
let User = require('../models/user.model');

// handles incoming HTTP GET requests on the /users/ URL
router.route('/').get((req, res) => {
  // get a list of all the users from the database
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//  handles incoming HTTP POST requests on the /users/add/ URL path
router.route('/add').post((req, res) => {
  // get new username from request body
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
