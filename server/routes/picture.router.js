const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT "user".username,"picture".image, "description".date, "description".location FROM "user"
  JOIN "user_picture_description" ON "user".id = "user_picture_description".user_id
  JOIN "picture" ON "picture".id = "user_picture_description".picture_id
  JOIN  "description" ON "description".id = "user_picture_description".description_id
   `;
  pool.query(queryText)
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

  
    const  image= req.body.image;
 
  
    const queryText = 'INSERT INTO "picture" ("image") VALUES ($1)';
    pool.query(queryText, [image])
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