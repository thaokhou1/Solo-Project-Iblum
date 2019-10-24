const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const id = req.user.id
  const queryText = `SELECT * FROM "picture" WHERE "user_id" = $1`;
  pool.query(queryText, [id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT picture query', err);
      res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {


  const image = req.body.img.image;
  const date = req.body.date;
  const location = req.body.location;
  const audio = req.body.audio.audio;
  const user_id = req.body.user_id

  const queryText = 'INSERT INTO "picture" ("image","date", "location", "audio", "user_id") VALUES ($1, $2, $3, $4,$5)';
  pool.query(queryText, [image, date, location, audio, user_id])
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
})

router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM "picture" WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT picture query', err);
      res.sendStatus(500);
    });
});

module.exports = router;