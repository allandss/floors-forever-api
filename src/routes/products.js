import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

const productController = require('../controllers/products');
//const upload = multer(multerConfig);
const router = express.Router();

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:id', productController.getById);
router.put('/:id', productController.updateById);
router.delete('/:id', productController.deleteById);

module.exports = router;