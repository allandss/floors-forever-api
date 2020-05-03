import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

const fileController = require('../controllers/file');
const router = express.Router();

const upload = multer(multerConfig);

router.post('/', upload.single('file'), fileController.create);
router.get('/', fileController.getAll);

module.exports = router;