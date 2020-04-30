import express from 'express';
const categoriesController = require('../controllers/categories');
const router = express.Router();

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.create);
router.get('/:id', categoriesController.getById);
router.put('/:id', categoriesController.updateById);
router.delete('/:id', categoriesController.deleteById);

module.exports = router;