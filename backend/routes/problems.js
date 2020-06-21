const router = require('express').Router();
let Problem = require('../models/problem.model');

// handles incoming HTTP GET requests on the /problems/ URL
router.route('/').get((req, res) => {
  // get a list of all the problems from the database
  Problem.find()
    .then(problems => res.json(problems))
    .catch(err => res.status(400).json('Error: ' + err));
});

//  handles incoming HTTP POST requests on the /problems/add/ URL path
router.route('/add').post((req, res) => {
  // extract problem data from request body (default = String)
  const number = Number(req.body.number);
  const title = req.body.title;
  const difficulty = req.body.difficulty;
  const date = Date.parse(req.body.date);
  const topics = req.body.topics;
  const notes = req.body.notes;

  const newProblem = new Problem({
    number,
    title,
    difficulty,
    date,
    topics,
    notes
  });

  newProblem.save()
  .then(() => res.json('Problem added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// returns a problem item given an id
router.route('/:id').get((req, res) => {
  Problem.findById(req.params.id)
    .then(problem => res.json(problem))
    .catch(err => res.status(400).json('Error: ' + err));
});
 
// deletes a problem item given an id
router.route('/:id').delete((req, res) => {
    Problem.findByIdAndDelete(req.params.id)
    .then(() => res.json('Problem deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });


module.exports = router;