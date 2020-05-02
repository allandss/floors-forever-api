import express from 'express';
const serieController = require('../controllers/serie');
const router = express.Router();

router.get('/', serieController.getAll);
router.post('/', serieController.create);
router.get('/:id', serieController.getById);
router.put('/:id', serieController.updateById);
router.delete('/:id', serieController.deleteById);
router.get('/category/:id', serieController.getByCategory);

module.exports = router;