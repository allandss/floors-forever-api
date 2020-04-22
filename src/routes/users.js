const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('', userController.create);
router.post('/login', userController.login);
router.get('/me', userController.getProfile);
router.post('/me/logout', userController.logout);
router.post('/me/logoutall', userController.logoutAll);

module.exports = router;