var express = require('express');
const router = express.Router();
const user = require('../services/user');

/* GET user by email */
router.get('/', async function(req, res, next) {
  try {
    res.json(await user.getUser(req.query.email));
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST user */
router.post('/', async function(req, res, next) {
  try {
    res.json(await user.createUser(req.body.user));
  } catch (err) {
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
