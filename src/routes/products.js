import express from 'express';
const productController = require('../controllers/products');
const router = express.Router();

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:id', productController.getById);
router.put('/:id', productController.updateById);
router.delete('/:id', productController.deleteById);
router.get('/category/:id', productController.getByCategory);

module.exports = router;