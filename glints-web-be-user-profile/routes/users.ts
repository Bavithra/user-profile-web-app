import express from 'express';
const router = express.Router();
const UserProfileService = require('../services/UserProfileService');

router.post('/', async function(req: any, res: any, next) {
  try {
    res.json(await UserProfileService.saveUserProfile());
  } catch (err: any) {
    console.error(`Error `, err.message);
    next(err);
  }
});

module.exports = router;