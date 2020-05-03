import express from 'express';

const contactController = require('../controllers/contact');
const router = express.Router();

router.post('/', contactController.create);

module.exports = router;