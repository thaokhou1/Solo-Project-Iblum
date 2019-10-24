const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', rejectUnauthenticated,(req, res, next) => {
  const firstname = req.body.firstname;
  const email = req.body.email;
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = 'INSERT INTO "user" (firstname, email, username, password) VALUES ($1, $2,$3,$4) RETURNING id';
  pool.query(queryText, [firstname, email, username, password])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.put('/update', rejectUnauthenticated,(req, res, next) => {
  const firstname = req.body.firstname;
  const email = req.body.email;
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const id = req.user.id
  const queryText =
    `UPDATE "user"
  SET "firstname"= $1, "email"= $2, "username"=$3, "password"= $4
  WHERE "id" = $5`;
  pool.query(queryText, [firstname, email, username, password, id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});
// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', rejectUnauthenticated, userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', rejectUnauthenticated,(req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.delete('/delete',rejectUnauthenticated, (req, res) => {
  const queryText = 'DELETE FROM "user" WHERE "id" = $1';
  pool.query(queryText, [req.user.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT user query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
