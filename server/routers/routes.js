const SiswaController = require('../controllers/SiswaController');

const express = require('express');
const router = express.Router();

router.get('/', SiswaController.index);
router.post('/', SiswaController.store);
router.put('/:id', SiswaController.update);
router.delete('/:id', SiswaController.destroy);

module.exports = router;
