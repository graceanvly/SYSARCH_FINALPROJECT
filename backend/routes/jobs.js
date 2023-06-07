const router = require('express').Router();
let Job = require('../models/job.model');

// Get all jobs
router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new job
router.route('/add').post((req, res) => {
  const { title, company, location, description } = req.body;
  const newJob = new Job({ title, company, location, description });

  newJob.save()
    .then(() => res.json('Job added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
