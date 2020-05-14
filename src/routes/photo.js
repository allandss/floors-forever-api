import express from 'express';
const photoController = require('../controllers/photo');
const router = express.Router();

router.get('/', photoController.getAll);
router.post('/', photoController.create);
router.get('/:id', photoController.getById);
router.put('/:id', photoController.updateById);
router.delete('/:id', photoController.deleteById);

module.exports = router;