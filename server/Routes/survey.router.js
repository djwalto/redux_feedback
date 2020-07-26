const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Adds a new book to the list of awesome reads
// Request body must be a book object with a title and author.
router.post('/', (req, res) => {
  let newSurvey = req.body;
  console.log(`Adding survey`, newSurvey);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newSurvey.feeling,
      newSurvey.understanding,
      newSurvey.support,
      newSurvey.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new survey`, error);
      res.sendStatus(500);
    });
});

// Get all books
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id";';
  pool
    .query(queryText)
    .then((result) => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
});

module.exports = router;
