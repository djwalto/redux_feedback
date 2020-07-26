const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Adds users new survey to the db
router.post('/', (req, res) => {
  let newSurvey = req.body;
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

// Get for all surveys to display on admin page
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error getting surveys', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error', err);
      res.sendStatus(500);
    });
});

module.exports = router;
